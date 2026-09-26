# 09 — Contributing & Workflow

> Alur kerja untuk semua kontributor (PM, dev, QA, docs).

---

## 1. Alur Kerja Git

```text
main        ← rilis produksi (tag versi)
develop     ← integrasi (opsional; saat ini main langsung)
feature/*   ← pekerjaan fitur
fix/*       ← perbaikan bug
docs/*      ← dokumentasi
chore/*     ← tooling, deps
```

1. Buat branch dari `main`: `feature/M9-swap-slippage`.
2. Commit kecil & bermakna (Conventional Commits): `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`.
3. Push → buka **Pull Request**.
4. CI (`.github/workflows/ci.yml`) wajib hijau: install + test + build.
5. Review ≥ 1 orang (perubahan kontrak: wajib review web3 dev senior + catatan keamanan).
6. Merge → hapus branch.

---

## 2. Definition of Ready (fitur masuk sprint)

- [ ] FRD modul ada (pakai template FRD §0) dengan **Acceptance Criteria** bernomor.
- [ ] Dampak kontrak diidentifikasi (kontrak baru? upgrade UUPS? hanya frontend?).
- [ ] Prioritas MoSCoW disepakati PM.
- [ ] Desain UI (bila user-facing) ada/linked.

## 3. Definition of Done (PR merge)

- [ ] Semua AC FRD terpenuhi & dicatat bukti (screenshot/video tx hash).
- [ ] `npm run build` sukses lokal + CI hijau.
- [ ] Tidak ada `console.log` liar / komentar kode mati.
- [ ] Alamat/ABI kontrak hanya berubah di `utils/index.ts` + `updatedContracts/`.
- [ ] Dokumen diperbarui bila scope berubah:
  - fitur → `03-FRD`, (bila scope produk) `02-PRD`
  - kontrak → `06-SMART-CONTRACTS` (+ tabel alamat bila berubah)
  - setup/build → `04-TECHNICAL-GUIDE`
  - diagram → `05-ARCHITECTURE`
- [ ] Animasi/UX baru mengikuti design system (theme + `animations.css`).

---

## 4. Standar Kualitas

| Area | Standar |
|------|---------|
| TypeScript | Tanpa `any` baru di boundary non-kontrak; props bertipe |
| React | Functional component + hooks; efek bersih (cleanup observer/interval) |
| Web3 | Semua tx via hook domain; error selalu tertangani & diberitahukan |
| Styling | Tema MUI + util animasi global; hindari hex liar — tambahkan token warna di tema |
| Aksesibilitas | Kontras OK, state loading/disable jelas, `prefers-reduced-motion` tetap dihormati |
| Performa | Lazy route; multicall untuk baca banyak; tidak ada polling agresif |

## 5. Review Checklist (reviewer)

- [ ] Logika bisnis sesuai FRD (bukan interpretasi sendiri).
- [ ] Tidak ada perubahan alamat kontrak tanpa sinkronisasi 3 tempat (utils, docs/06, docs/08).
- [ ] Tidak ada secret yang masuk (env, kunci, mnemonic).
- [ ] Edge case: wallet tidak connect, chain salah, saldo nol, tx revert.
- [ ] Mobile tidak rusak (cek breakpoint `md`/`lg`).

## 6. Pelaporan Bug

Template issue:
```
Judul: [Modul] ringkasan singkat
Environment: mainnet/testnet · browser · wallet
Langkah reproduksi: 1..2..3..
Hasil sekarang vs harapan (rujuk AC-xx-y)
Bukti: screenshot / tx hash / console log
```

Bug kontrak/mainnet uang = **P0** → langsung kabari Owner + PM (bukan hanya issue).
