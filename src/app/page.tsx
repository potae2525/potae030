import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat font-sans bg-gray-50">
      {/* พื้นหลังเต็มจอ */}
      <Image
        src="/image/20.jpg"
        alt="Background"
        fill
        quality={100}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Header */}
      <header className="relative z-20 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm sticky top-0">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/image/123.jpg"
                alt="Thai Sports Hub Logo"
                fill
                className="object-cover rounded-full ring-2 ring-blue-500 shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-bold text-gray-800">Thai Sports Hub</span>
          </div>

          <nav className="hidden sm:flex gap-6 text-gray-700 font-medium">
            <a href="#news" className="hover:text-blue-600 transition">ข่าวล่าสุด</a>
            <a href="#table" className="hover:text-green-600 transition">ตารางคะแนน</a>
            <a href="#gallery" className="hover:text-red-600 transition">ภาพกีฬา</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col gap-12 items-center sm:items-start w-full max-w-6xl mx-auto px-6 sm:px-12 py-10 bg-white bg-opacity-90 backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl mt-12">
        {/* โลโก้ใหญ่หน้าเว็บ */}
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-400 hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/123.jpg"
              alt="Football icon"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Thai Sports Hub
          </h1>
        </div>

        {/* เกี่ยวกับเรา */}
        <section className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-1.414 1.414A8 8 0 105.636 18.364l1.414-1.414M15 12h.01"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">เกี่ยวกับเรา</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                <span className="font-semibold text-blue-700">Thai Sports Hub</span> คือเว็บไซต์ศูนย์รวมข่าวสารกีฬาไทยและต่างประเทศ ครอบคลุมทั้งฟุตบอล บาสเกตบอล และกีฬาอื่นๆ ที่นี่คุณจะได้พบกับคลิปไฮไลต์เด็ดๆ ตารางคะแนนล่าสุด และภาพบรรยากาศการแข่งขันทั้งหมดในที่เดียว!
              </p>
            </div>
          </div>
        </section>

        {/* ข่าวล่าสุด */}
        <section id="news" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-blue-700 border-b-4 border-blue-300 pb-2">🏆 ข่าวล่าสุด</h2>
          <div className="flex flex-col gap-4">
            {["บุรีรัมย์ ยูไนเต็ด ชนะ เมืองทอง 3-1 ศึกไทยลีกสุดมันส์!", "แมนเชสเตอร์ ซิตี้ เตรียมดวลลิเวอร์พูลสุดสัปดาห์นี้", "โค้ชทีมชาติไทยเผยรายชื่อล่าสุดชุดคัดเลือกบอลโลก"].map((news, i) => (
              <article key={i} className="flex items-start gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-blue-600 text-2xl mt-1">📰</div>
                <p className="text-gray-800 text-lg font-medium leading-relaxed">{news}</p>
              </article>
            ))}
          </div>
        </section>

        {/* วิดีโอไฮไลต์ */}
        <section id="video" className="w-full">
          <h2 className="text-3xl font-extrabold mb-4 text-purple-700 border-b-4 border-purple-300 pb-2">🎥 คลิปวิดีโอไฮไลต์</h2>
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ugZb1GgHn6A?si=Xb8YJAIBDUYfj5Mh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* ตารางคะแนน */}
        <section id="table" className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-green-700 border-b-4 border-green-300 pb-2">📊 ตารางคะแนนพรีเมียร์ลีก</h2>
          <table className="w-full text-left border-collapse rounded overflow-hidden bg-white shadow">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-4">อันดับ</th>
                <th className="px-4">ทีม</th>
                <th className="px-4">แข่ง</th>
                <th className="px-4">ชนะ</th>
                <th className="px-4">เสมอ</th>
                <th className="px-4">แพ้</th>
                <th className="px-4">คะแนน</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 font-medium">
              {[
                { rank: 1, team: "แมนซิตี้", played: 30, win: 24, draw: 3, lose: 3, points: 75 },
                { rank: 2, team: "ลิเวอร์พูล", played: 30, win: 22, draw: 7, lose: 1, points: 73 },
                { rank: 3, team: "อาร์เซนอล", played: 30, win: 21, draw: 8, lose: 1, points: 71 },
                { rank: 4, team: "เชลซี", played: 30, win: 18, draw: 6, lose: 6, points: 60 },
                { rank: 5, team: "แมนยูไนเต็ด", played: 30, win: 17, draw: 7, lose: 6, points: 58 },
                { rank: 6, team: "ท็อตแน่ม ฮ็อตสเปอร์", played: 30, win: 16, draw: 8, lose: 6, points: 56 },
                { rank: 7, team: "นิวคาสเซิล", played: 30, win: 14, draw: 10, lose: 6, points: 52 },
                { rank: 8, team: "ไบรท์ตัน", played: 30, win: 13, draw: 9, lose: 8, points: 48 },
                { rank: 9, team: "แอสตัน วิลล่า", played: 30, win: 12, draw: 8, lose: 10, points: 44 },
                { rank: 10, team: "เวสต์แฮม ยูไนเต็ด", played: 30, win: 11, draw: 8, lose: 11, points: 41 },
              ].map(({ rank, team, played, win, draw, lose, points }, i) => (
                <tr key={rank} className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-green-100`}>
                  <td className="py-2 px-4">{rank}</td>
                  <td className="px-4">{team}</td>
                  <td className="px-4">{played}</td>
                  <td className="px-4">{win}</td>
                  <td className="px-4">{draw}</td>
                  <td className="px-4">{lose}</td>
                  <td className="px-4 font-semibold">{points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* แกลเลอรี */}
        <section id="gallery" className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-red-600 border-b-4 border-red-300 pb-2">📸 ไฮไลต์ภาพกีฬา</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[3, 2, 1].map((num) => (
              <div key={num} className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-2xl hover:shadow-[0_10px_30px_rgba(255,0,0,0.5)] transition-shadow duration-500 transform hover:scale-110 cursor-pointer">
                <Image src={`/image/${num === 1 ? "1.png" : `${num}.jpg`}`} alt={`Match Highlight ${num}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-red-600 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* ปุ่มเพิ่มเติม */}
        <div className="flex gap-4 flex-col sm:flex-row mt-4">
          <a className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl" href="#">
            ดูข่าวทั้งหมด
          </a>
          <a className="rounded-full border-2 border-gray-400 px-6 py-3 text-gray-700 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md" href="#">
            ตารางคะแนนทั้งหมด
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-300 mt-10 pb-6 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-t-xl">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h3 className="text-white font-semibold mb-2">ติดต่อเรา</h3>
            <p>
              อีเมล: <a href="mailto:contact@thaisportshub.com" className="underline hover:text-white">contact@thaisportshub.com</a>
            </p>
            <p>
              โทร: <a href="tel:+66812345678" className="underline hover:text-white">+66 81 234 5678</a>
            </p>
          </div>

          <div className="flex gap-8 text-gray-400">
            <a href="https://facebook.com/thaisportshub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07c0-5.53-4.47-10-10-10S2 6.54 2 12.07c0 5 3.66 9.13 8.44 9.88v-7h-2.54v-2.88h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.88h-2.33v7c4.78-.75 8.44-4.9 8.44-9.88z" />
              </svg>
            </a>
            <a href="https://instagram.com/thaisportshub" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 3.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5.25-.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 8a4 4 0 110 8 4 4 0 010-8z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-gray-400 mt-4 text-sm">© 2025 Thai Sports Hub. All rights reserved.</div>
      </footer>
    </div>
  );
}
