const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 = 16:9 (render 150dpi -> 2000x1125)
pres.title = "SMT Video Demo Cards";

const W = 13.33, H = 7.5, M = 0.7;
const C = {
  ink: "10141A", bg: "FFFFFF", gold: "F0B90B", goldd: "A87E00",
  t1: "FDF6E0", text: "1E2329", muted: "6E7780", line: "E4E7EB",
  dtext: "F2F4F6", dmuted: "9AA4AE"
};
const F = "Segoe UI";
const shadow = () => ({ type: "outer", color: "000000", blur: 7, offset: 2, angle: 45, opacity: 0.14 });

function coin(s, x, y, d, fs) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: C.gold }, shadow: shadow() });
  const p = d * 0.105;
  s.addShape(pres.shapes.OVAL, { x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, fill: { color: C.ink } });
  s.addText("SMT", { x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, align: "center", valign: "middle", fontSize: fs, bold: true, color: C.gold, fontFace: F, margin: 0, charSpacing: 2 });
}

/* ---- card-01 · Hook (dark) ---- */
let s = pres.addSlide();
s.background = { color: C.ink };
coin(s, 10.1, 2.6, 2.3, 28);
s.addText("SMART ECOSYSTEM (SMT) · VIDEO DEMO", { x: M, y: 2.0, w: 9, h: 0.35, fontSize: 13, bold: true, charSpacing: 3, color: C.gold, fontFace: F, margin: 0 });
s.addText("Program reward crypto\nbiasanya berjalan gelap.", { x: M, y: 2.45, w: 9.0, h: 1.9, fontSize: 40, bold: true, color: C.dtext, fontFace: F, margin: 0 });
s.addText("SMT membuat setiap distribusi bisa diverifikasi semua orang.", { x: M, y: 4.5, w: 8.6, h: 0.7, fontSize: 22, bold: true, color: C.gold, fontFace: F, margin: 0 });

/* ---- card-02 · Masalah (light) ---- */
s = pres.addSlide();
s.background = { color: C.bg };
s.addText("MASALAH", { x: M, y: 0.55, w: 9, h: 0.32, fontSize: 12.5, bold: true, charSpacing: 3, color: C.goldd, fontFace: F, margin: 0 });
s.addText("Kenapa program reward crypto gagal di kepercayaan", { x: M, y: 0.9, w: W - 2 * M, h: 0.7, fontSize: 30, bold: true, color: C.text, fontFace: F, margin: 0 });
const probs = [
  ["01", "Distribusi manual & tidak transparan", "Reward dibagi oleh admin — anggota harus percaya, tanpa bukti."],
  ["02", "Referral bergaya MLM = Ponzi", "Reward dibayar dari uang anggota baru; kolaps saat rekrutmen berhenti."],
  ["03", "DeFi terfragmentasi", "Swap, staking, dan tracking tim di 3–5 tools terpisah — pemula menyerah."]
];
probs.forEach((p, i) => {
  const y = 2.0 + i * 1.62;
  s.addText(p[0], { x: M, y: y - 0.1, w: 1.1, h: 0.8, fontSize: 36, bold: true, color: C.gold, fontFace: F, margin: 0 });
  s.addText([
    { text: p[1], options: { fontSize: 18, bold: true, color: C.text, breakLine: true } },
    { text: p[2], options: { fontSize: 14.5, color: C.muted } }
  ], { x: 2.0, y, w: 10.6, h: 1.2, fontFace: F, margin: 0, valign: "top", paraSpaceAfter: 5 });
  if (i < 2) s.addShape(pres.shapes.LINE, { x: M, y: y + 1.38, w: W - 2 * M, h: 0, line: { color: C.line, width: 1 } });
});

/* ---- segment cards (dark) ---- */
function segCard(num, judul, sub) {
  const sl = pres.addSlide();
  sl.background = { color: C.ink };
  sl.addShape(pres.shapes.OVAL, { x: M, y: 2.55, w: 1.7, h: 1.7, fill: { color: C.gold }, shadow: shadow() });
  sl.addText(num, { x: M, y: 2.55, w: 1.7, h: 1.7, align: "center", valign: "middle", fontSize: 44, bold: true, color: C.ink, fontFace: F, margin: 0 });
  sl.addText("SEGMENT " + num, { x: 3.0, y: 2.6, w: 8, h: 0.35, fontSize: 13, bold: true, charSpacing: 3, color: C.dmuted, fontFace: F, margin: 0 });
  sl.addText(judul, { x: 3.0, y: 3.0, w: 9.6, h: 0.95, fontSize: 38, bold: true, color: C.dtext, fontFace: F, margin: 0 });
  sl.addText(sub, { x: 3.0, y: 4.0, w: 9.6, h: 0.6, fontSize: 18, color: C.gold, bold: true, fontFace: F, margin: 0 });
  return sl;
}
segCard("01", "Hubungkan Wallet & Dashboard", "Data live dari blockchain — bukan hardcode");
segCard("02", "Swap & Tax On-Chain", "Setiap transaksi menyuburkan ekosistem");
segCard("03", "Lisensi, Farming & Tim 7 Level", "Satu dashboard untuk seluruh ekosistem");
segCard("04", "Arsitektur & Keamanan", "Serverless · 10 kontrak UUPS terverifikasi");

/* ---- card-07 · Closing (dark) ---- */
s = pres.addSlide();
s.background = { color: C.ink };
coin(s, 5.565, 0.95, 2.2, 26);
s.addText("Terbukti di mainnet", { x: M, y: 3.45, w: W - 2 * M, h: 0.8, align: "center", fontSize: 36, bold: true, color: C.dtext, fontFace: F, margin: 0 });
const stats = [["10", "kontrak UUPS"], ["18/18", "test lulus"], ["17", "halaman QA"], ["2", "LP pair aktif"]];
stats.forEach((st, i) => {
  const x = 1.35 + i * 2.75;
  s.addText(st[0], { x, y: 4.35, w: 2.4, h: 0.85, align: "center", fontSize: 44, bold: true, color: C.gold, fontFace: F, margin: 0 });
  s.addText(st[1], { x, y: 5.2, w: 2.4, h: 0.35, align: "center", fontSize: 13.5, color: C.dmuted, fontFace: F, margin: 0 });
});
s.addText("github.com/eka0789/smarttoken-dapp   ·   bscscan.com/token/0xf3F9B44b…c28", { x: M, y: 6.25, w: W - 2 * M, h: 0.4, align: "center", fontSize: 15, bold: true, color: C.dtext, fontFace: F, margin: 0 });

pres.writeFile({ fileName: "C:/Users/Admin/smarttoken-dapp/video-assets/SMT-Video-Cards.pptx" }).then(() => console.log("OK"));
