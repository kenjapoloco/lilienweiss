export default function Home() {
  return (
   <>  
     <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-1 flex-col md:flex-row items-center">
        <a href="#" className="font-extrabold text-red-500 mt-2 mb-2 md:mb-0 md:mt-0">
          <span className="text-4xl ml-3">リリエンワイス</span>
        </a>
        <nav className="md:ml-auto text-sm lg:mr-3">
          <a href="#Home" className="mr-4 hover:text-blue-400 duration-300">ホーム</a>
          <a href="#About" className="mr-4 hover:text-blue-400 duration-300">リリエンワイスについて</a>
          <a href="#Music" className="mr-4 hover:text-blue-400 duration-300">過去の音源</a>
          <a href="#Schedule" className="mr-4 hover:text-blue-400 duration-300">今後の予定</a>
          <a href="#Contact" className="hover:text-blue-400 duration-300">連絡</a>
        </nav>
      </div>
     </header>

     <section className="text-gray-700" id="home">
      <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold text text-gray-50 mp-3">
            白百合のように
            <br />
            清く美しく…
          </h1>
          <p className="mb-8 leading-relaxed text-4xl font-extrabold text text-gray-50 p-3">
            マンドリンアンサンブル
            <br />
            リリエンワイス
          </p>
          <p className="text-4xl font-extrabold text text-red-700 p-3">
            次回の定期演奏会
            <br />
            8月30日 愛知県芸術劇場ホール
          </p>
          <button href="#" className="text-white font-bold bg-green-500 py-2 px-3.5 border-0 rounded text-lg hover:bg-green-600 duration-300">詳細はこちら</button>
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
           <img src="img/image.jpg" alt="something" width={800} height={1300} />
        </div>
      </div>
     </section>
   </>  
  )
}