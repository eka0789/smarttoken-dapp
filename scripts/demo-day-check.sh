#!/usr/bin/env bash
# ============================================================
# demo-day-check.sh — Verifikasi kesiapan Demo Day (BSC Testnet)
# Jalankan: bash scripts/demo-day-check.sh
# Cek: RPC testnet, kehadiran kode kontrak, konfigurasi env,
#      (opsional) saldo akun demo, dan pengingat build.
# ============================================================
set -uo pipefail

FRONTEND="SMT-FRONTEND/smarttoken-dev/smarttoken-dev"
CONTRACTS=(
  "0x768f0B3280FaE944ab42c5C9e919F26480635393" # SMT
  "0x9419Ce0Fa0B39644dE6c0D5De332cc280f8a2b4C" # SmartComp
  "0x9Ab7FC48b6a8B3E38e59A9fB5f82E9695191c469" # GoldenTreePool
  "0x9aD2b8345da513ac13c916c4538b6Ea215B3e54f" # SmartArmy
  "0x2b68e85bE8076e8BBA39dF4B194AA83a7CC26439" # SmartFarm
  "0x48B8b13052C8adB1CfaDc49CF684D27631a08153" # SmartLadder
  "0x95379256b0DB1489Bd785548B8bdd42E68e0D723" # SMTBridge
  "0xA216D3ebb2f18C8580dcb506168e409f7542C455" # SmartNobilityAchievement
  "0x07bB8f9Bbc171d7350842a173ae09eaA16A57714" # SmartOtherAchievement
  "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3" # Router
  "0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576" # Multicall
)
RPC_URLS=(
  "https://bsc-testnet.publicnode.com"
  "https://bsc-testnet.bnbchain.org"
  "https://bsc-testnet.drpc.org"
  "https://bsc-testnet-rpc.publicnode.com"
)

PASS=0; FAIL=0
ok()   { echo "  ✔ $1"; PASS=$((PASS+1)); }
bad()  { echo "  ✘ $1"; FAIL=$((FAIL+1)); }

rpc_chainid() { # $1 = url
  curl -s --max-time 10 -X POST "$1" \
    -H "Content-Type: application/json" \
    --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}' \
    | sed -n 's/.*"result":"\(0x[0-9a-fA-F]*\)".*/\1/p' | tr -d '\n'
}

echo "==> [1/4] Cek RPC Testnet (harus chain id 0x61 = 97)"
for url in "${RPC_URLS[@]}"; do
  cid=$(rpc_chainid "$url")
  if [ -z "$cid" ]; then
    bad "RPC tidak merespons: $url"
  elif [ "$cid" = "0x61" ] || [ "$cid" = "0x061" ]; then
    ok "RPC OK (chain 97): $url"
  else
    bad "RPC salah chain ($cid, expected 97): $url"
  fi
done

echo "==> [2/4] Cek kode kontrak testnet (harus non-kosong)"
for addr in "${CONTRACTS[@]}"; do
  code=$(curl -s --max-time 10 -X POST "${RPC_URLS[1]}" \
    -H "Content-Type: application/json" \
    --data "{\"jsonrpc\":\"2.0\",\"method\":\"eth_getCode\",\"params\":[\"$addr\",\"latest\"],\"id\":1}" \
    | sed -n 's/.*"result":"\(0x[0-9a-fA-F]*\)".*/\1/p' | tr -d '\n')
  if [ "${#code}" -gt 4 ]; then
    ok "$addr"
  else
    bad "KOSONG/tidak ada kode: $addr"
  fi
done

echo "==> [3/4] Cek konfigurasi network (harus 97)"
# .env.production
if [ -f "$FRONTEND/.env.production" ]; then
  if grep -q "REACT_APP_NETWORK_ID=97" "$FRONTEND/.env.production"; then
    ok ".env.production → testnet (97)"
  else
    bad ".env.production TIDAK mengarah testnet"
  fi
else
  bad ".env.production tidak ditemukan di $FRONTEND"
fi
# vercel.json
if [ -f "$FRONTEND/vercel.json" ]; then
  if grep -q "REACT_APP_NETWORK_ID=97" "$FRONTEND/vercel.json"; then
    ok "vercel.json → testnet (97)"
  else
    bad "vercel.json TIDAK mengarah testnet"
  fi
else
  bad "vercel.json tidak ditemukan di $FRONTEND"
fi
# src/utils/index.ts: pastikan default chain 97
if grep -q "currentNetwork.*97\|parseInt.*REACT_APP_NETWORK_ID" "$FRONTEND/src/utils/index.ts"; then
  ok "src/utils/index.ts menggunakan REACT_APP_NETWORK_ID (default 97)"
else
  bad "currentNetwork di utils tidak sesuai ekspektasi — cek manual"
fi

echo "==> [4/4] Cek saldo akun demo (opsional, isi env DEMO_ACCOUNT)"
if [ -n "${DEMO_ACCOUNT:-}" ]; then
  bal=0x$(curl -s --max-time 10 -X POST "${RPC_URLS[1]}" \
    -H "Content-Type: application/json" \
    --data "{\"jsonrpc\":\"2.0\",\"method\":\"eth_getBalance\",\"params\":[\"$DEMO_ACCOUNT\",\"latest\"],\"id\":1}" \
    | sed -n 's/.*"result":"\(0x[0-9a-fA-F]*\)".*/\1/p' | tr -d '\n')
  bal_wei=$((16#${bal:-0}))
  if [ $bal_wei -gt 0 ]; then
    ok "Akun $DEMO_ACCOUNT punya $(echo "scale=6; $bal_wei/1000000000000000000" | bc) tBNB"
  else
    bad "Akun $DEMO_ACCOUNT SALDO 0 — isi faucet dulu!"
  fi
else
  echo "  - DEMO_ACCOUNT tidak di-set, lompat cek saldo."
fi

echo
echo "==> Hasil: $PASS lulus, $FAIL gagal."
[ $FAIL -eq 0 ] && echo "==> Siap demo. Jangan lupa: npm run build && npm start (buka http://127.0.0.1:3000)" || echo "==> Ada masalah — perbaiki sebelum demo."
exit $FAIL