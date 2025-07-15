import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat font-sans">
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
      <header className="relative z-20 w-full backdrop-blur-md bg-white/60 border-b border-gray-200 shadow-sm sticky top-0">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
          {/* โลโก้ + ชื่อเว็บ */}
          <div className="flex items-center gap-3">
            <Image
              src="/image/123.jpg"
              alt="Thai Sports Hub Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold text-gray-800">Thai Sports Hub</span>
          </div>

          {/* เมนูนำทาง */}
          <nav className="hidden sm:flex gap-6 text-gray-700 font-medium">
            <a href="#news" className="hover:text-blue-600 transition">
              ข่าวล่าสุด
            </a>
            <a href="#table" className="hover:text-green-600 transition">
              ตารางคะแนน
            </a>
            <a href="#gallery" className="hover:text-red-600 transition">
              ภาพกีฬา
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col gap-12 items-center sm:items-start w-full max-w-5xl mx-auto px-6 sm:px-12 py-10 bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl mt-12">
        {/* โลโก้ใหญ่หน้าเว็บ */}
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden shadow-md">
            <Image
              src="/image/123.jpg"
              alt="Football icon"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Thai Sports Hub
          </h1>
        </div>

        {/* ข่าวล่าสุด */}
        <section id="news" className="w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-blue-700 flex items-center gap-3">
            <span>🏆</span> ข่าวล่าสุด
          </h2>
          <div className="flex flex-col gap-5">
            {[
              "บุรีรัมย์ ยูไนเต็ด ชนะ เมืองทอง 3-1 ศึกไทยลีกสุดมันส์!",
              "แมนเชสเตอร์ ซิตี้ เตรียมดวลลิเวอร์พูลสุดสัปดาห์นี้",
              "โค้ชทีมชาติไทยเผยรายชื่อล่าสุดชุดคัดเลือกบอลโลก",
            ].map((news, i) => (
              <article
                key={i}
                className="flex items-start gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-blue-600 text-2xl mt-1">📰</div>
                <p className="text-gray-800 text-lg font-medium leading-relaxed">{news}</p>
              </article>
            ))}
          </div>
        </section>

        {/* วิดีโอ YouTube (ปรับให้สมส่วน 16:9) */}
        <section id="video" className="w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-purple-700 flex items-center gap-3">
            <span>🎥</span> คลิปวิดีโอไฮไลต์
          </h2>
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
          <h2 className="text-2xl font-bold mb-4 text-green-700">📊 ตารางคะแนนพรีเมียร์ลีก</h2>
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
                { rank: 5, team: "ท็อตแน่ม ฮ็อตสเปอร์", played: 30, win: 16, draw: 8, lose: 6, points: 56 },
                { rank: 6, team: "แมนยูไนเต็ด", played: 30, win: 15, draw: 9, lose: 6, points: 54 },
                { rank: 7, team: "เอฟเวอร์ตัน", played: 30, win: 12, draw: 9, lose: 9, points: 45 },
                { rank: 8, team: "เลสเตอร์ ซิตี้", played: 30, win: 11, draw: 10, lose: 9, points: 43 },
                { rank: 9, team: "วูล์ฟแฮมป์ตัน", played: 30, win: 10, draw: 11, lose: 9, points: 41 },
                { rank: 10, team: "คริสตัล พาเลซ", played: 30, win: 9, draw: 10, lose: 11, points: 37 },
              ].map(({rank, team, played, win, draw, lose, points}, i) => (
                <tr
                  key={rank}
                  className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-green-100`}
                >
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

        {/* แกลเลอรีภาพกีฬา ปรับแต่งใหม่ให้สวยขึ้น */}
        <section id="gallery" className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-red-600">📸 ไฮไลต์ภาพกีฬา</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[3, 2, 1].map((num) => (
              <div
                key={num}
                className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-2xl hover:shadow-[0_10px_30px_rgba(255,0,0,0.5)] transition-shadow duration-500 transform hover:scale-110 cursor-pointer"
              >
                <Image
                  src={`/image/${num === 1 ? "1.png" : `${num}.jpg`}`}
                  alt={`Match Highlight ${num}`}
                  fill
                  className="object-cover"
                />
                {/* Overlay สีแดงโปร่งใสเวลา hover */}
                <div className="absolute inset-0 bg-red-600 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* ปุ่มเพิ่มเติม */}
        <div className="flex gap-4 flex-col sm:flex-row mt-4">
          <a
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            href="#"
          >
            ดูข่าวทั้งหมด
          </a>
          <a
            className="rounded-full border-2 border-gray-400 px-6 py-3 text-gray-700 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
            href="#"
          >
            ตารางคะแนนทั้งหมด
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-300 mt-10 pb-6 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-t-xl">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* ช่องทางติดต่อ */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-2">ติดต่อเรา</h3>
            <p>
              อีเมล:{" "}
              <a
                href="mailto:contact@thaisportshub.com"
                className="underline hover:text-white"
              >
                contact@thaisportshub.com
              </a>
            </p>
            <p>
              โทร:{" "}
              <a href="tel:+66812345678" className="underline hover:text-white">
                +66 81 234 5678
              </a>
            </p>
          </div>

          {/* โซเชียลมีเดีย */}
          <div className="flex gap-8 text-gray-400">
            {/* Facebook */}
            <a
              href="https://facebook.com/thaisportshub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.07c0-5.53-4.47-10-10-10S2 6.54 2 12.07c0 5 3.66 9.13 8.44 9.88v-7h-2.54v-2.88h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.88h-2.33v7c4.78-.75 8.44-4.9 8.44-9.88z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/thaisportshub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 3.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5.25-.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 8a4 4 0 110 8 4 4 0 010-8z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-gray-400 mt-4 text-sm">
          © 2025 Thai Sports Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
