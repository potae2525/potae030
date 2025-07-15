import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-100 via-white to-gray-50 font-sans">
      {/* Background */}
      <Image
        src="/image/20.jpg"
        alt="Background"
        fill
        quality={100}
        sizes="100vw"
        style={{ objectFit: "cover", filter: "brightness(0.75) saturate(1.2)" }}
        priority
      />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-gray-300 shadow-md transition-colors duration-500 hover:bg-white/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-5 select-none cursor-default">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500 hover:ring-blue-700 transition-transform duration-300 transform hover:scale-110">
              <Image
                src="/image/123.jpg"
                alt="Thai Sports Hub Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-3xl font-extrabold text-blue-900 tracking-wide drop-shadow-md">
              Thai Sports Hub
            </span>
          </div>

          <nav className="hidden sm:flex gap-12 text-gray-700 font-semibold tracking-wide">
            {[
              { href: "#news", label: "ข่าวล่าสุด", emoji: "📰", color: "blue" },
              { href: "#table", label: "ตารางคะแนน", emoji: "📊", color: "green" },
              { href: "#gallery", label: "ภาพกีฬา", emoji: "📸", color: "red" },
            ].map(({ href, label, emoji, color }) => (
              <a
                key={href}
                href={href}
                className={`flex items-center gap-2 relative group text-gray-700 hover:text-${color}-600 transition ease-in-out duration-300`}
              >
                <span className="text-xl">{emoji}</span>
                {label}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-${color}-400 via-${color}-600 to-${color}-400 group-hover:w-full transition-all duration-300 rounded`}
                />
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-20 items-center sm:items-start bg-white bg-opacity-90 backdrop-blur-lg border border-gray-300 rounded-3xl shadow-3xl mt-20">
        {/* Big Logo and Title */}
        <div className="flex items-center gap-8 select-none cursor-default">
          <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl ring-8 ring-blue-600 hover:ring-blue-700 transition-transform duration-500 transform hover:scale-110">
            <Image
              src="/image/123.jpg"
              alt="Football Icon"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-7xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg">
            Thai Sports Hub
          </h1>
        </div>

        {/* About Section */}
        <section className="w-full bg-gradient-to-br from-white via-blue-50 to-white p-12 rounded-3xl shadow-xl border border-blue-200 hover:shadow-2xl transition-shadow duration-500">
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <div className="flex-shrink-0 bg-blue-200 p-5 rounded-full shadow-lg animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-700"
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
            <div>
              <h2 className="text-4xl font-extrabold text-blue-900 mb-4 select-text">
                เกี่ยวกับเรา
              </h2>
              <p className="text-gray-800 leading-relaxed max-w-4xl text-lg">
                <span className="font-semibold text-blue-700">Thai Sports Hub</span> คือเว็บไซต์ศูนย์รวมข่าวสารกีฬาไทยและต่างประเทศ
                ครอบคลุมทั้งฟุตบอล บาสเกตบอล และกีฬาอื่นๆ ที่นี่คุณจะได้พบกับคลิปไฮไลต์เด็ดๆ
                ตารางคะแนนล่าสุด และภาพบรรยากาศการแข่งขันทั้งหมดในที่เดียว!
              </p>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section id="news" className="w-full">
          <h2 className="text-4xl font-extrabold mb-8 text-blue-700 border-b-4 border-blue-300 pb-4 select-none drop-shadow-md">
            🏆 ข่าวล่าสุด
          </h2>
          <div className="flex flex-col gap-8">
            {[
              "บุรีรัมย์ ยูไนเต็ด ชนะ เมืองทอง 3-1 ศึกไทยลีกสุดมันส์!",
              "แมนเชสเตอร์ ซิตี้ เตรียมดวลลิเวอร์พูลสุดสัปดาห์นี้",
              "โค้ชทีมชาติไทยเผยรายชื่อล่าสุดชุดคัดเลือกบอลโลก",
            ].map((news, i) => (
              <article
                key={i}
                className="flex items-start gap-6 bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-500 cursor-pointer select-text ring-1 ring-transparent hover:ring-blue-400"
              >
                <div className="text-blue-600 text-4xl mt-1 animate-bounce">📰</div>
                <p className="text-gray-900 text-xl font-semibold leading-relaxed">
                  {news}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Video Highlights */}
        <section id="video" className="w-full">
          <h2 className="text-4xl font-extrabold mb-8 text-purple-700 border-b-4 border-purple-300 pb-4 select-none drop-shadow-md">
            🎥 คลิปวิดีโอไฮไลต์
          </h2>
          <div className="aspect-video w-full max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden hover:shadow-4xl transition-shadow duration-700">
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

        {/* Premier League Table */}
        <section id="table" className="w-full">
          <h2 className="text-3xl font-extrabold mb-8 text-green-700 border-b-4 border-green-300 pb-4 select-none drop-shadow-md">
            📊 ตารางคะแนนพรีเมียร์ลีก
          </h2>
          <table className="w-full text-left border-collapse rounded-3xl overflow-hidden bg-white shadow-2xl ring-1 ring-gray-300">
            <thead className="bg-green-50 text-green-800">
              <tr>
                <th className="py-4 px-8 text-lg">อันดับ</th>
                <th className="px-8 text-lg">ทีม</th>
                <th className="px-8 text-lg">แข่ง</th>
                <th className="px-8 text-lg">ชนะ</th>
                <th className="px-8 text-lg">เสมอ</th>
                <th className="px-8 text-lg">แพ้</th>
                <th className="px-8 text-lg">คะแนน</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 font-semibold text-lg">
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
                <tr
                  key={rank}
                  className={`${
                    i % 2 === 0 ? "bg-green-50" : "bg-white"
                  } hover:bg-green-100 transition-colors duration-300 cursor-pointer`}
                >
                  <td className="py-4 px-8">{rank}</td>
                  <td className="px-8">{team}</td>
                  <td className="px-8">{played}</td>
                  <td className="px-8">{win}</td>
                  <td className="px-8">{draw}</td>
                  <td className="px-8">{lose}</td>
                  <td className="px-8 font-semibold">{points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Gallery */}
        <section id="gallery" className="w-full">
          <h2 className="text-3xl font-extrabold mb-8 text-red-600 border-b-4 border-red-400 pb-4 select-none drop-shadow-md">
            📸 ไฮไลต์ภาพกีฬา
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[3, 2, 1].map((num) => (
              <div
                key={num}
                className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(255,0,0,0.8)] transition-shadow duration-700 transform hover:scale-110 cursor-pointer"
              >
                <Image
                  src={`/image/${num === 1 ? "1.png" : `${num}.jpg`}`}
                  alt={`Match Highlight ${num}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-red-600 bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex gap-6 flex-col sm:flex-row mt-14">
          <a
            className="rounded-full bg-gradient-to-r from-blue-700 to-blue-600 text-white px-10 py-4 shadow-2xl hover:from-blue-800 hover:to-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-3xl select-none"
            href="#news"
          >
            ดูข่าวทั้งหมด
          </a>
          <a
            className="rounded-full border-2 border-gray-400 px-10 py-4 text-gray-900 bg-white shadow-md hover:bg-gray-100 hover:text-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none"
            href="#table"
          >
            ตารางคะแนนทั้งหมด
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 text-center text-gray-300 mt-20 pb-10 bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-t-3xl select-none shadow-inner">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h3 className="text-white font-semibold mb-4 text-lg">ติดต่อเรา</h3>
            <p className="text-gray-300">
              อีเมล:{" "}
              <a
                href="mailto:contact@thaisportshub.com"
                className="underline hover:text-white"
              >
                contact@thaisportshub.com
              </a>
            </p>
            <p className="text-gray-300">
              โทร:{" "}
              <a href="tel:+66812345678" className="underline hover:text-white">
                +66 81 234 5678
              </a>
            </p>
          </div>

          <div className="flex gap-10 text-gray-400">
            <a
              href="https://facebook.com/thaisportshub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.07c0-5.53-4.47-10-10-10S2 6.54 2 12.07c0 5 3.66 9.13 8.44 9.88v-7h-2.54v-2.88h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.88h-2.33v7c4.78-.75 8.44-4.9 8.44-9.88z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/thaisportshub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 3.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5.25-.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 8a4 4 0 110 8 4 4 0 010-8z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-gray-400 mt-6 text-sm select-none">
          © 2025 Thai Sports Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
