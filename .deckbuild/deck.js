const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5"
pres.author = "Smart Ecosystem (SMT)";
pres.title = "Smart Ecosystem (SMT) — Pitch Deck";

const W = 13.33, H = 7.5, M = 0.7;
const C = {
  ink: "10141A", ink2: "1B222C", bg: "FFFFFF",
  gold: "F0B90B", goldd: "A87E00",
  t1: "FDF6E0", t2: "F8E9B8", t3: "F0D987",
  text: "1E2329", muted: "6E7780", line: "E4E7EB",
  dtext: "F2F4F6", dmuted: "9AA4AE", card: "F7F8FA", darkln: "333B47"
};
const F = "Segoe UI";
const shadow = () => ({ type: "outer", color: "000000", blur: 7, offset: 2, angle: 45, opacity: 0.14 });

function kicker(s, txt, dark) {
  s.addText(txt, { x: M, y: 0.5, w: 11, h: 0.32, fontSize: 12.5, bold: true, charSpacing: 3, color: dark ? C.gold : C.goldd, fontFace: F, margin: 0 });
}
function title(s, txt, dark, size) {
  s.addText(txt, { x: M, y: 0.84, w: W - 2 * M, h: 0.72, fontSize: size || 33, bold: true, color: dark ? C.dtext : C.text, fontFace: F, margin: 0 });
}
function pageNum(s, n) {
  s.addText(n, { x: W - 1.1, y: H - 0.52, w: 0.6, h: 0.3, align: "right", fontSize: 12, color: C.muted, fontFace: F, margin: 0 });
}
function coin(s, x, y, d, fs) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: C.gold }, shadow: shadow() });
  const p = d * 0.105;
  s.addShape(pres.shapes.OVAL, { x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, fill: { color: C.ink } });
  s.addText("SMT", { x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, align: "center", valign: "middle", fontSize: fs || 34, bold: true, color: C.gold, fontFace: F, margin: 0, charSpacing: 2 });
}
function arrow(s, x1, y1, x2, y2) {
  const o = { line: { color: C.muted, width: 1.75, endArrowType: "triangle" } };
  o.x = Math.min(x1, x2); o.y = Math.min(y1, y2);
  o.w = Math.abs(x2 - x1); o.h = Math.abs(y2 - y1);
  if (x2 < x1) o.flipH = true;
  if (y2 < y1) o.flipV = true;
  s.addShape(pres.shapes.LINE, o);
}
function box(s, x, y, w, h, txt, o) {
  o = o || {};
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.07, fill: { color: o.fill || C.bg }, line: { color: o.line || C.line, width: 1 }, shadow: o.sh ? shadow() : undefined });
  s.addText(txt, { x, y, w, h, align: "center", valign: "middle", fontSize: o.fs || 14, bold: o.bold !== false, color: o.color || C.text, fontFace: F, margin: 0 });
}
function lead(s, x, y, w, leadTxt, desc, opts) {
  opts = opts || {};
  s.addText([
    { text: leadTxt, options: { fontSize: opts.leadFs || 16.5, bold: true, color: opts.dark ? C.dtext : C.text, breakLine: true } },
    { text: desc, options: { fontSize: opts.descFs || 13.5, color: opts.dark ? C.dmuted : C.muted } }
  ], { x, y, w, h: opts.h || 1.0, fontFace: F, margin: 0, valign: "top", paraSpaceAfter: 4 });
}
function hline(s, x, y, w) {
  s.addShape(pres.shapes.LINE, { x, y, w, h: 0, line: { color: C.line, width: 1 } });
}

/* ---------------- S1 · COVER (dark) ---------------- */
let s = pres.addSlide();
s.background = { color: C.ink };
// coin + orbit
s.addShape(pres.shapes.OVAL, { x: 8.45, y: 1.35, w: 4.15, h: 4.15, fill: { color: C.ink }, line: { color: C.darkln, width: 1 } });
s.addShape(pres.shapes.OVAL, { x: 12.32, y: 3.32, w: 0.16, h: 0.16, fill: { color: C.gold } });
coin(s, 9.0, 1.9, 3.05, 40);
s.addText("BNB SMART CHAIN", { x: 9.0, y: 5.18, w: 3.05, h: 0.3, align: "center", fontSize: 12, bold: true, charSpacing: 2, color: C.dmuted, fontFace: F, margin: 0 });
// left block
s.addText("BNB SMART CHAIN HACKATHON SUBMISSION", { x: M, y: 1.28, w: 7.6, h: 0.34, fontSize: 12.5, bold: true, charSpacing: 3, color: C.gold, fontFace: F, margin: 0 });
s.addText("Smart Ecosystem", { x: M, y: 1.66, w: 7.8, h: 1.05, fontSize: 52, bold: true, color: C.dtext, fontFace: F, margin: 0 });
s.addText("Ekosistem DeFi Satu Pintu", { x: M, y: 2.78, w: 7.6, h: 0.55, fontSize: 25, bold: true, color: C.gold, fontFace: F, margin: 0 });
s.addText("Reward referral 7 level, farming, dan lisensi keanggotaan terdistribusi otomatis on-chain — lewat 10 smart contract UUPS yang bisa diverifikasi semua orang.", { x: M, y: 3.55, w: 7.0, h: 1.25, fontSize: 15.5, color: C.dmuted, fontFace: F, margin: 0, valign: "top" });
// bottom chips
const chips = [
  ["SMT Token · 0xf3F9B44b…c28", M],
  ["Finance & Commerce · Consumer Apps", 4.35],
  ["Live di Mainnet", 9.05]
];
chips.forEach(ch => {
  s.addShape(pres.shapes.RECTANGLE, { x: ch[1], y: 5.62, w: 0.11, h: 0.11, fill: { color: C.gold } });
  s.addText(ch[0], { x: ch[1] + 0.24, y: 5.5, w: 3.9, h: 0.35, fontSize: 13, bold: true, color: C.dtext, fontFace: F, margin: 0 });
});
s.addText("Pitch Deck · Oktober 2026", { x: M, y: 6.85, w: 4, h: 0.3, fontSize: 12, color: C.dmuted, fontFace: F, margin: 0 });
s.addNotes("Pembuka: satu kalimat — 'Program reward crypto biasanya gelap; SMT membuat seluruh distribusinya bisa diverifikasi semua orang di BscScan.' Sebut kontrak live di mainnet sejak slide pertama.");

/* ---------------- S2 · PROBLEM ---------------- */
s = pres.addSlide();
s.background = { color: C.bg };
kicker(s, "MASALAH");
title(s, "Program reward crypto gagal di kepercayaan");
const probs = [
  ["01", "Distribusi manual & tidak transparan", "Reward dibagi oleh admin lewat proses di balik layar — anggota harus percaya, tidak ada yang bisa diverifikasi."],
  ["02", "Referral bergaya MLM = Ponzi", "Reward dibayar langsung dari uang anggota baru; kolaps tepat saat pertumbuhan rekrutmen berhenti."],
  ["03", "DeFi terfragmentasi bagi pemula", "Untuk sekadar ikut, pengguna harus merangkai 3–5 tools terpisah: DEX untuk swap, dashboard staking, tracker tim manual."]
];
probs.forEach((p, i) => {
  const y = 2.0 + i * 1.58;
  s.addText(p[0], { x: M, y: y - 0.12, w: 1.15, h: 0.85, fontSize: 40, bold: true, color: C.gold, fontFace: F, margin: 0 });
  s.addText([
    { text: p[1], options: { fontSize: 17.5, bold: true, color: C.text, breakLine: true } },
    { text: p[2], options: { fontSize: 14, color: C.muted } }
  ], { x: 2.05, y: y - 0.05, w: 10.5, h: 1.25, fontFace: F, margin: 0, valign: "top", paraSpaceAfter: 5 });
  if (i < 2) hline(s, M, y + 1.32, W - 2 * M);
});
pageNum(s, "02");
s.addNotes("Fokus di kepercayaan: dua ekstrem buruk (reward manual vs ponzi) plus fragmentasi tools yang membuat pemula menyerah di tengah jalan.");

/* ---------------- S3 · SOLUTION ---------------- */
s = pres.addSlide();
s.background = { color: C.bg };
kicker(s, "SOLUSI");
title(s, "Semua reward on-chain, satu pintu untuk semua");
const sols = [
  ["1", "Distribusi 100% smart contract", "Pajak tiap transaksi SMT langsung terbagi on-chain ke pool ekosistem — siapa pun bisa memeriksanya di BscScan."],
  ["2", "Reward dari ekonomi riil", "Sumber reward adalah fee transaksi nyata di PancakeSwap; ladder dibatasi 7 level dengan porsi tertulis di kontrak."],
  ["3", "Satu dApp ramah pemula", "Swap, lisensi, farming, reward, dan manajemen tim dalam satu dashboard — cukup hubungkan wallet."]
];
sols.forEach((p, i) => {
  const y = 2.05 + i * 1.42;
  s.addText(p[0], { x: M, y: y - 0.08, w: 0.6, h: 0.7, fontSize: 30, bold: true, color: C.gold, fontFace: F, margin: 0 });
  lead(s, 1.45, y, 5.75, p[1], p[2], { h: 1.2 });
});
// right mini flow
box(s, 7.75, 1.95, 4.85, 0.72, "Hubungkan Wallet", { sh: true });
arrow(s, 10.17, 2.67, 10.17, 3.02);
box(s, 7.75, 3.02, 4.85, 0.72, "Transaksi di dApp — Swap · Lisensi · Farm", { sh: true });
arrow(s, 10.17, 3.74, 10.17, 4.09);
box(s, 7.75, 4.09, 4.85, 0.72, "SmartToken — Tax Engine On-Chain", { fill: C.gold, line: C.gold, color: C.ink, fs: 14.5 });
arrow(s, 10.17, 4.81, 10.17, 5.16);
box(s, 7.75, 5.16, 4.85, 0.72, "Reward Terdistribusi Otomatis", { fill: C.ink, line: C.ink, color: C.dtext });
pageNum(s, "03");
s.addNotes("Tiga pilar solusi; sisi kanan adalah perjalanan pengguna dari wallet sampai reward terdistribusi tanpa klaim manual.");

/* ---------------- S4 · PRODUCT ---------------- */
s = pres.addSlide();
s.background = { color: C.bg };
kicker(s, "PRODUK");
title(s, "Satu dashboard, seluruh ekosistem");
// browser mockup
const fx = M, fy = 1.8, fw = 7.35, fh = 4.55;
s.addShape(pres.shapes.RECTANGLE, { x: fx, y: fy, w: fw, h: fh, fill: { color: C.bg }, line: { color: C.line, width: 1 }, shadow: shadow() });
s.addShape(pres.shapes.RECTANGLE, { x: fx, y: fy, w: fw, h: 0.42, fill: { color: C.ink } });
[0, 1, 2].forEach(i => s.addShape(pres.shapes.OVAL, { x: fx + 0.18 + i * 0.2, y: fy + 0.16, w: 0.1, h: 0.1, fill: { color: "3A4250" } }));
// sidebar
s.addShape(pres.shapes.RECTANGLE, { x: fx, y: fy + 0.42, w: 1.65, h: fh - 0.42, fill: { color: C.card } });
for (let i = 0; i < 5; i++) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: fx + 0.22, y: fy + 0.78 + i * 0.44, w: 1.2, h: 0.13, rectRadius: 0.05, fill: { color: i === 0 ? C.gold : C.line } });
}
// stat cards
const stats = [["Pajak Buy", "15%", C.text], ["Farming", "0,1%/hr", C.text], ["Lisensi", "4 Tier", C.text], ["Tim", "7 Level", C.goldd]];
stats.forEach((st, i) => {
  const cx = fx + 1.85 + i * 1.38;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: cx, y: fy + 0.62, w: 1.26, h: 0.98, rectRadius: 0.06, fill: { color: C.card } });
  s.addText(st[0], { x: cx + 0.1, y: fy + 0.72, w: 1.06, h: 0.28, fontSize: 12, color: C.muted, fontFace: F, margin: 0 });
  s.addText(st[1], { x: cx + 0.1, y: fy + 1.02, w: 1.06, h: 0.42, fontSize: 19, bold: true, color: st[2], fontFace: F, margin: 0 });
});
// mini bars
const bh = [0.5, 0.82, 0.62, 1.0, 0.78, 1.18, 0.92, 1.32];
bh.forEach((h, i) => {
  s.addShape(pres.shapes.RECTANGLE, { x: fx + 1.92 + i * 0.62, y: fy + 3.62 - h, w: 0.34, h, fill: { color: i === 7 ? C.ink : C.gold } });
});
hline(s, fx + 1.85, fy + 3.72, 5.3);
s.addText("Ilustrasi antarmuka dApp Smart Ecosystem", { x: fx, y: fy + fh + 0.12, w: fw, h: 0.3, fontSize: 12, italic: true, color: C.muted, fontFace: F, margin: 0 });
// right features
const feats = [
  ["Swap terintegrasi", "SMT / BNB / BUSD via PancakeSwap V2 — langsung dari dApp."],
  ["Lisensi 4 tier", "Trial · Opportunist · Runner · Visionary (100 → 10.000 SMT)."],
  ["Farming", "Reward fixed 0,1% per hari + bagian passive dari pajak."],
  ["Tim & reward", "Ladder referral 7 level + achievement Nobility (Folks → King)."]
];
feats.forEach((f, i) => {
  const y = 1.85 + i * 1.18;
  lead(s, 8.4, y, 4.2, f[0], f[1], { leadFs: 15.5, descFs: 13, h: 1.05 });
  if (i < 3) hline(s, 8.4, y + 1.02, 4.2);
});
pageNum(s, "04");
s.addNotes("Mockup menggambarkan dashboard sungguhan: kartu pajak live, farming, lisensi, dan tim. Semua angka dibaca langsung dari kontrak, bukan hardcode.");

/* ---------------- S5 · EKONOMI ---------------- */
s = pres.addSlide();
s.background = { color: C.bg };
kicker(s, "EKONOMI");
title(s, "Setiap transaksi menyuburkan ekosistem");
// left flow
box(s, M, 1.85, 3.6, 0.62, "Transaksi SMT — Buy · Sell · Transfer", { fs: 12.5 });
arrow(s, 2.5, 2.47, 2.5, 2.72);
box(s, M, 2.72, 3.6, 0.62, "SmartToken · Tax Engine", { fill: C.gold, line: C.gold, color: C.ink, fs: 14 });
arrow(s, 2.5, 3.34, 2.5, 3.59);
const pools = ["SmartLadder — referral 7 level", "SmartFarm — reward harian", "GoldenTreePool — growth reward", "Achievement — Nobility & lainnya", "Dev & Marketing"];
pools.forEach((p, i) => {
  const y = 3.62 + i * 0.58;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y, w: 3.6, h: 0.46, rectRadius: 0.06, fill: { color: C.card } });
  s.addShape(pres.shapes.RECTANGLE, { x: M + 0.16, y: y + 0.18, w: 0.1, h: 0.1, fill: { color: C.gold } });
  s.addText(p, { x: M + 0.38, y, w: 3.2, h: 0.46, fontSize: 12.5, bold: true, color: C.text, fontFace: F, margin: 0, valign: "middle" });
});
// right chart
s.addText("Porsi reward ladder per aktivitas buy (%)", { x: 7.1, y: 1.85, w: 5.5, h: 0.35, fontSize: 15, bold: true, color: C.text, fontFace: F, margin: 0 });
s.addChart(pres.charts.BAR, [{
  name: "Porsi", labels: ["L1", "L2", "L3", "L4", "L5", "L6", "L7"], values: [50, 5, 5, 7.5, 7.5, 12.5, 12.5]
}], {
  x: 7.1, y: 2.3, w: 5.5, h: 3.55, barDir: "col", barGapWidthPct: 40, varyColors: true,
  chartColors: ["1E2329", "F0B90B", "F0B90B", "F0B90B", "F0B90B", "F0B90B", "F0B90B"],
  showValue: true, dataLabelPosition: "outEnd", dataLabelColor: "1E2329", dataLabelFontSize: 12, dataLabelFontFace: F, dataLabelFormatCode: "0.#",
  catAxisLabelColor: C.muted, catAxisLabelFontSize: 12, catAxisLabelFontFace: F,
  valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
  valAxisMaxVal: 58, showLegend: false, showTitle: false, chartArea: { fill: { color: C.bg } }
});
// bottom note band
s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 6.55, w: W, h: 0.62, fill: { color: C.t1 } });
s.addText([
  { text: "Nilai pajak dibaca live dari kontrak ", options: { bold: true, color: C.text } },
  { text: "· Emergency tax +10% (maks 24 jam) saat harga turun ≥ 25% / 24 jam — pelindung pool. Sumber: kontrak SmartToken, BSC Mainnet.", options: { color: C.muted } }
], { x: M, y: 6.55, w: W - 2 * M, h: 0.62, fontSize: 12.5, fontFace: F, margin: 0, valign: "middle" });
pageNum(s, "05");
s.addNotes("Inti ekonomi: pajak buy/sell/transfer terbagi otomatis ke lima pool. Grafik: contoh distribusi ladder untuk aktivitas buy — level 1 (sponsor langsung) menerima porsi terbesar, sisanya mendorong pertumbuhan jaringan.");

/* ---------------- S6 · ARSITEKTUR ---------------- */
s = pres.addSlide();
s.background = { color: C.bg };
kicker(s, "ARSITEKTUR");
title(s, "Serverless — tanpa backend, semua dari kontrak");
box(s, M, 2.15, 2.2, 0.85, "Wallet Pengguna\nMetaMask · WalletConnect", { fs: 12.5, sh: true });
arrow(s, 2.9, 2.57, 3.35, 2.57);
box(s, 3.35, 2.15, 2.6, 0.85, "dApp React 17 + MUI 5\nethers.js", { fs: 12.5, sh: true });
arrow(s, 5.95, 2.57, 6.4, 2.57);
box(s, 6.4, 2.15, 2.45, 0.85, "SmartComp\nRegistry On-Chain", { fill: C.gold, line: C.gold, color: C.ink, fs: 13 });
arrow(s, 8.85, 2.57, 9.3, 2.57);
box(s, 9.3, 2.15, 3.3, 0.85, "10 Smart Contract UUPS\nBSC Mainnet 56", { sh: true });
arrow(s, 10.95, 3.0, 10.95, 3.45);
s.addShape(pres.shapes.RECTANGLE, { x: 5.0, y: 3.45, w: 7.6, h: 0.75, fill: { color: C.t1 } });
s.addText([
  { text: "PancakeSwap V2 ", options: { bold: true, color: C.text } }, { text: "swap & likuiditas   ·   ", options: { color: C.muted } },
  { text: "BSC RPC ×3 ", options: { bold: true, color: C.text } }, { text: "baca data   ·   ", options: { color: C.muted } },
  { text: "BscScan ", options: { bold: true, color: C.text } }, { text: "verifikasi publik", options: { color: C.muted } }
], { x: 5.0, y: 3.45, w: 7.6, h: 0.75, align: "center", fontSize: 13, fontFace: F, margin: 0, valign: "middle" });
// bottom three points
const pts6 = [
  ["Tanpa server bisnis", "Seluruh data & logika dibaca langsung dari blockchain — tidak ada titik kendali tersembunyi."],
  ["Registry on-chain", "SmartComp menyimpan alamat semua modul; ganti alamat cukup 1 transaksi, tanpa redeploy."],
  ["Kendali penuh pengguna", "Wallet pengguna menandatangani semua transaksi — dApp tidak pernah memegang dana."]
];
pts6.forEach((p, i) => {
  const x = M + i * 4.12;
  s.addShape(pres.shapes.LINE, { x, y: 4.95, w: 3.7, h: 0, line: { color: C.gold, width: 1.5 } });
  lead(s, x, 5.12, 3.7, p[0], p[1], { leadFs: 15, descFs: 13, h: 1.5 });
});
pageNum(s, "06");
s.addNotes("Tegaskan keunggulan serverless: tidak ada backend yang bisa memanipulasi data; satu-satunya layanan eksternal adalah RPC, IPFS avatar, dan Sentry.");

/* ---------------- S7 · TRAKSI ---------------- */
s = pres.addSlide();
s.background = { color: C.bg };
kicker(s, "STATUS SAAT INI");
title(s, "Live di mainnet, siap dipakai");
const stats7 = [
  ["10", "kontrak UUPS", "terverifikasi BscScan · chain 56"],
  ["18/18", "test suite lulus", "CI build + test tiap push"],
  ["17", "halaman QA visual", "dApp produksi terverifikasi"],
  ["2", "LP pair aktif", "SMT-BNB · SMT-BUSD"]
];
stats7.forEach((st, i) => {
  const x = M + i * 3.03;
  if (i > 0) s.addShape(pres.shapes.LINE, { x: x - 0.18, y: 2.25, w: 0, h: 2.1, line: { color: C.line, width: 1 } });
  s.addText(st[0], { x, y: 2.05, w: 2.7, h: 1.1, fontSize: 58, bold: true, color: C.gold, fontFace: F, margin: 0 });
  s.addText(st[1], { x, y: 3.22, w: 2.7, h: 0.35, fontSize: 15.5, bold: true, color: C.text, fontFace: F, margin: 0 });
  s.addText(st[2], { x, y: 3.58, w: 2.7, h: 0.55, fontSize: 12.5, color: C.muted, fontFace: F, margin: 0 });
});
s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.75, w: W, h: 1.15, fill: { color: C.t1 } });
s.addText([
  { text: "Produksi, bukan prototype.  ", options: { bold: true, color: C.text } },
  { text: "NetworkGuard anti salah jaringan · error boundaries · empty states · build sukses — per September 2026.", options: { color: C.muted } }
], { x: M, y: 4.75, w: W - 2 * M, h: 1.15, fontSize: 14, fontFace: F, margin: 0, valign: "middle" });
s.addText("Sumber: laporan QA & log deployment proyek (docs/08, docs/14) — September 2026", { x: M, y: 6.3, w: 9, h: 0.3, fontSize: 12, color: C.muted, fontFace: F, margin: 0 });
pageNum(s, "07");
s.addNotes("Empat angka bukti: kontrak live, test lulus, QA selesai, likuiditas aktif. Tekankan ini sudah produksi — bukan demo testnet.");

/* ---------------- S8 · KEAMANAN ---------------- */
s = pres.addSlide();
s.background = { color: C.bg };
kicker(s, "KEAMANAN");
title(s, "Dilindungi berlapis, siap diaudit");
const sec = [
  ["UUPS upgradeable + initializer terkunci", "Perbaikan bug tanpa memindahkan dana pengguna ke kontrak baru."],
  ["Kontrol akses 3 lapis", "Owner (strategis) · Operator (harian) · Distributor (pemicu reward) — tidak ada satu kunci untuk segalanya."],
  ["Runbook operasional", "Rotasi ownership & panduan response insiden tersedia publik di repo."],
  ["CI otomatis + rencana audit eksternal", "Build & test tiap push; audit pihak ketiga jadi langkah roadmap berikutnya."]
];
sec.forEach((p, i) => {
  const y = 2.0 + i * 1.18;
  lead(s, M, y, 7.1, p[0], p[1], { leadFs: 16, descFs: 13.5, h: 1.05 });
  if (i < 3) hline(s, M, y + 1.0, 7.1);
});
// layer stack
const layers = [
  ["Audit & CI Otomatis", C.t1, C.text, 2.9],
  ["Runbook & Response Insiden", C.t2, C.text, 3.25],
  ["Kontrol Akses 3 Lapis", C.t3, C.text, 3.6],
  ["UUPS + SmartComp Registry", C.gold, C.ink, 3.95]
];
layers.forEach((L, i) => {
  const w = L[3], x = 8.35 + (3.95 - w) / 2, y = 2.0 + i * 0.82;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.66, rectRadius: 0.07, fill: { color: L[1] }, shadow: shadow() });
  s.addText(L[0], { x, y, w, h: 0.66, align: "center", valign: "middle", fontSize: 13.5, bold: true, color: L[2], fontFace: F, margin: 0 });
});
s.addText("Fondasi di bawah, perlindungan bertumpuk ke atas", { x: 8.35, y: 5.45, w: 3.95, h: 0.55, align: "center", fontSize: 12, italic: true, color: C.muted, fontFace: F, margin: 0 });
pageNum(s, "08");
s.addNotes("UUPS menjawab masalah kontrak immutable; kontrol akses berlapis membatasi dampak kompromi satu kunci. Runbook publik = komitmen transparansi.");

/* ---------------- S9 · ROADMAP ---------------- */
s = pres.addSlide();
s.background = { color: C.bg };
kicker(s, "ROADMAP");
title(s, "Dari hackathon ke ekosistem komunitas");
s.addShape(pres.shapes.LINE, { x: 1.5, y: 3.42, w: 10.35, h: 0, line: { color: C.line, width: 2.5 } });
const road = [
  ["1", "Kontrak & dApp Live", "10 kontrak UUPS di mainnet + dApp produksi", true],
  ["2", "Audit Eksternal", "Review keamanan pihak ketiga untuk kontrak inti", false],
  ["3", "Onboarding Komunitas", "Kampanye lisensi & edukasi pengguna baru", false],
  ["4", "Pertumbuhan Ekosistem", "Likuiditas, integrasi baru & fase Golden Tree", false]
];
road.forEach((r, i) => {
  const cx = 1.9 + i * 3.1;
  s.addShape(pres.shapes.OVAL, { x: cx - 0.27, y: 3.15, w: 0.54, h: 0.54, fill: { color: r[3] ? C.gold : C.bg }, line: { color: r[3] ? C.gold : C.muted, width: 1.75 }, shadow: r[3] ? shadow() : undefined });
  s.addText(r[0], { x: cx - 0.27, y: 3.15, w: 0.54, h: 0.54, align: "center", valign: "middle", fontSize: 16, bold: true, color: r[3] ? C.ink : C.muted, fontFace: F, margin: 0 });
  s.addText(r[1], { x: cx - 1.4, y: 2.3, w: 2.8, h: 0.65, align: "center", fontSize: 15.5, bold: true, color: C.text, fontFace: F, margin: 0, valign: "bottom" });
  s.addText(r[2], { x: cx - 1.4, y: 3.95, w: 2.8, h: 0.9, align: "center", fontSize: 12.5, color: C.muted, fontFace: F, margin: 0, valign: "top" });
});
s.addShape(pres.shapes.OVAL, { x: 3.15, y: 3.35, w: 0.14, h: 0.14, fill: { color: C.gold } });
s.addText("posisi saat ini", { x: 2.55, y: 4.95, w: 2.2, h: 0.3, fontSize: 12, bold: true, color: C.goldd, fontFace: F, margin: 0 });
// takeaway band
s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.85, w: W, h: 0.95, fill: { color: C.t1 } });
s.addText([
  { text: "Fondasi selesai dibangun.  ", options: { bold: true, color: C.text } },
  { text: "Dukungan hackathon mempercepat audit eksternal & onboarding komunitas pertama.", options: { color: C.muted } }
], { x: M, y: 5.85, w: W - 2 * M, h: 0.95, fontSize: 14, fontFace: F, margin: 0, valign: "middle" });
pageNum(s, "09");
s.addNotes("Jujur soal posisi: engineering selesai, audit eksternal adalah langkah berikutnya dan itulah di mana dukungan hackathon paling berdampak.");

/* ---------------- S10 · TIM & LINK (dark) ---------------- */
s = pres.addSlide();
s.background = { color: C.ink };
s.addText("TIM & KONTAK", { x: M, y: 0.62, w: 8, h: 0.34, fontSize: 12.5, bold: true, charSpacing: 3, color: C.gold, fontFace: F, margin: 0 });
s.addText("Bangun reward yang transparan,\nbersama Smart Ecosystem", { x: M, y: 1.05, w: 8.4, h: 1.6, fontSize: 34, bold: true, color: C.dtext, fontFace: F, margin: 0 });
const links = [
  ["GitHub", "github.com/eka0789/smarttoken-dapp"],
  ["BscScan — Token SMT", "bscscan.com/token/0xf3F9B44b88CA47Ea583F6Fde50A8C853e3c09c28"],
  ["Track", "Finance & Commerce · Consumer Apps"],
  ["Network", "BNB Smart Chain Mainnet (chain 56)"]
];
links.forEach((l, i) => {
  const y = 3.05 + i * 0.78;
  s.addShape(pres.shapes.RECTANGLE, { x: M, y: y + 0.13, w: 0.12, h: 0.12, fill: { color: C.gold } });
  s.addText([
    { text: l[0] + "   ", options: { bold: true, color: C.dtext } },
    { text: l[1], options: { color: C.dmuted } }
  ], { x: M + 0.28, y, w: 8.2, h: 0.42, fontSize: 14, fontFace: F, margin: 0 });
});
coin(s, 9.55, 1.75, 2.5, 30);
s.addText("Solo developer — smart contract · frontend React · QA & dokumentasi lengkap (16 dokumen di repo)", { x: M, y: 6.35, w: 8.6, h: 0.6, fontSize: 13.5, color: C.dmuted, fontFace: F, margin: 0 });
s.addText("Pitch Deck · Oktober 2026", { x: 9.55, y: 4.5, w: 2.5, h: 0.35, align: "center", fontSize: 12, color: C.dmuted, fontFace: F, margin: 0 });
s.addNotes("Tutup dengan ajakan: fondasi sudah live dan terverifikasi; undang juri memeriksa sendiri kontrak di BscScan dan kode di GitHub.");

pres.writeFile({ fileName: "C:/Users/Admin/smarttoken-dapp/SMT-Pitch-Deck.pptx" }).then(() => console.log("OK"));
