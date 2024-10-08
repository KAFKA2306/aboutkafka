import React from 'react'
import { Github, Twitter, Gamepad2, MessageCircle, Code, Database, Globe, BookOpen, Star, FileText } from 'lucide-react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">KAFKA2306</h1>
          <p className="text-xl">VRChat Enthusiast | Developer | Data Analyst</p>
          <div className="mt-4 flex justify-center items-center">
            <Star className="mr-2" size={20} />
            <span>9 Stars</span>
            <span className="mx-2">·</span>
            <span>7 Followers</span>
            <span className="mx-2">·</span>
            <span>18 Following</span>
          </div>
        </header>

        <section className="mb-12 bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-4">VRChat活動家、プログラマー、データアナリストとして活動中。自然科学と工学に興味があり、データ分析やファイナンス関連のプロジェクトに取り組んでいます。</p>
          <p className="mb-4">主な活動：</p>
          <ul className="list-disc list-inside mb-4">
            <li>VRChatでの定期イベント主催（化学のおはなし会、新ケセド島、謎めぐりなど）</li>
            <li>VRCみゅうトーク集会、VRCプロンプト集会、VRCかなえちゃん集会の主催</li>
            <li>ポーカー、ファイナンス、AIに関する記事執筆とプロジェクト開発</li>
          </ul>
        </section>

        <section className="mb-12 bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Skills & Interests</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center"><Code className="mr-2" /> Programming</h3>
              <ul className="list-disc list-inside">
                <li>Python</li>
                <li>C#</li>
                <li>Jupyter Notebook</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center"><Database className="mr-2" /> Technologies</h3>
              <ul className="list-disc list-inside">
                <li>Data Analysis</li>
                <li>Machine Learning</li>
                <li>Financial Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center"><Globe className="mr-2" /> VRChat</h3>
              <ul className="list-disc list-inside">
                <li>Event Organizing</li>
                <li>World Exploration</li>
                <li>Community Building</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center"><BookOpen className="mr-2" /> Other Interests</h3>
              <ul className="list-disc list-inside">
                <li>Finance</li>
                <li>Poker Strategy</li>
                <li>Science Communication</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Projects & Repositories</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">oil (Python)</h3>
              <p>最新のデータ分析ツール。金融市場の動向を分析し、投資戦略の立案をサポート。</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">mstr (Python)</h3>
              <p>機械学習を活用した高度なデータ分析プラットフォーム。ビッグデータから有意義な洞察を導き出します。</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Swiss-Tournament-Manager</h3>
              <p>VRChatのJoinWars用トーナメント管理システム。公平で効率的な大会運営を実現。</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">VRPhotoJourney (C#)</h3>
              <p>VR空間での写真撮影と共有を革新的に改善するプロジェクト。思い出を新次元で記録。</p>
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Recent Articles</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">🃏 ポーカーマスターへの道：6つのボードテクスチャ完全攻略ガイド</h3>
              <p>ポーカー戦略の核心に迫る、ボードテクスチャの徹底解説。勝率向上の秘訣を公開。</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Tesla Optimusロボットと大規模言語モデル統合による市場インパクト</h3>
              <p>最新技術の融合が生み出す、未来の高齢者ケアと医療革命の可能性を探る。</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">#JoinWars 第1回大会 優勝レポート</h3>
              <p>戦略と実践の融合。VRChat大会での勝利を分析し、成功の鍵を解き明かす。</p>
            </li>
          </ul>
        </section>

        <footer className="mt-12 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/KAFKA2306" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
              <Github size={28} />
            </a>
            <a href="https://x.com/kafka_vr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
              <Twitter size={28} />
            </a>
            <a href="https://vrchat.com/home/user/usr_3e36606d-21c3-4be5-b4b5-4bb5f26eefb0" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
              <Gamepad2 size={28} />
            </a>
            <a href="https://discordapp.com/users/kafka.kf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
              <MessageCircle size={28} />
            </a>
            <a href="https://note.com/kafkavr/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
              <FileText size={28} />
            </a>
          </div>
          <p>&copy; 2024 KAFKA2306. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App