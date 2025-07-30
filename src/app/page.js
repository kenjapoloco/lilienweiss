export default function Home() {
  return (
   <>  
     <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900 mb-3 md:mb-0">
          <span className="text-xl ml-3">リリエンワイス</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#Home" className="mr-5 hover:text-blue-400 duration-300">ホーム</a>
          <a href="#About" className="mr-5 hover:text-blue-400 duration-300">リリエンワイスについて</a>
          <a href="#Music" className="mr-5 hover:text-blue-400 duration-300">過去の音源</a>
          <a href="#Schedule" className="mr-5 hover:text-blue-400 duration-300">スケジュール</a>
          <a href="#Contact" className="hover:text-blue-400 duration-300">コンタクト</a>
        </nav>
      </div>
     </header>
     <section>
      <div>
        <div>
          <h1>
            白百合のように
            <br />
            清く美しく…
          </h1>
          <p>
            リリエンワイス
            <br />
            マンドリン楽団
          </p>
          <p>
            次回の定期演奏会
            <br />
            8月30日 愛知県芸術劇場ホール
          </p>
          <button>詳細はこちら</button>
        </div>
      </div>
     </section>
   </>  
  )
}
