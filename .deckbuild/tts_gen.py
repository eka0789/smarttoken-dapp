import asyncio, json
import edge_tts

VOICE = "id-ID-ArdiNeural"
OUT = "C:/Users/Admin/smarttoken-dapp/.deckbuild/tts"

SEGMENTS = {
  "s1": "Program reward di dunia crypto biasanya berjalan di balik layar, tanpa bisa diperiksa. Smart Ecosystem membaliknya: seluruh distribusi reward berjalan di smart contract di BNB Smart Chain, dan bisa diverifikasi semua orang. Ini demo singkatnya.",
  "s2": "Dua ekstrem yang biasa terjadi. Pertama, reward didistribusikan manual oleh admin, tidak transparan. Kedua, program referral bergaya MLM yang sebenarnya Ponzi: reward dibayar dari uang anggota baru, dan kolaps saat rekrutmen berhenti. Ditambah lagi, DeFi terfragmentasi: swap, staking, dan tracking tim ada di tools yang berbeda-beda. Akibatnya, kepercayaan rendah, dan pemula menyerah di tengah jalan.",
  "s3": "Ini dApp Smart Ecosystem, berjalan langsung di browser. Semua angka di layar dibaca live dari blockchain: saldo, harga token, dan pajak transaksi yang sedang aktif. Tidak ada backend, dan tidak ada angka hardcode. Aplikasi membaca kontrak SMT langsung di BSC mainnet.",
  "s4": "Di halaman Smart Army, ada empat tier lisensi, dari Trial sampai Visionary. Semakin tinggi tier, semakin besar level referral dan porsi reward yang terbuka. Lalu di halaman farming, SMT dan L P token bisa di stake, dengan reward harian nol koma satu persen, ditambah bagian pasif dari pajak ekosistem.",
  "s5": "Struktur referral tujuh level tertulis di kontrak. Level satu menerima porsi terbesar, sisanya mendorong pertumbuhan jaringan. Ada pula Golden Tree, dan achievement Nobility yang mengunci reward berkelanjutan bagi anggota aktif.",
  "s6": "Untuk pertukaran token, integrasi PancakeSwap sudah tertanam di dalam dApp. Setiap transaksi, pajak, dan distribusinya tercatat on-chain, dan alamat kontraknya dipublikasikan, siapa pun bisa memeriksanya di explorer kapan saja. Inilah transparansi yang menjadi inti Smart Ecosystem.",
  "s7": "Sepuluh kontrak U U P S terverifikasi di BscScan. Delapan belas dari delapan belas test lulus di C I, dan K A visual tujuh belas halaman selesai. Smart Ecosystem: reward yang transparan, satu pintu untuk semua. Tautan GitHub dan BscScan ada di deskripsi."
}

async def gen(name, text):
    tts = edge_tts.Communicate(text, VOICE, rate="-4%")
    await tts.save(f"{OUT}/{name}.mp3")

async def main():
    await asyncio.gather(*(gen(k, v) for k, v in SEGMENTS.items()))
    print("done")

asyncio.run(main())
