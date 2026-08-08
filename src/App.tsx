import React from 'react'
import { Archive, Github } from 'lucide-react'

const CANONICAL_PROFILE_URL = 'https://github.com/KAFKA2306/KAFKA2306'

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
        <section className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
          <div className="mb-6 flex items-center gap-3 text-amber-300">
            <Archive aria-hidden="true" size={28} />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Legacy prototype</span>
          </div>

          <h1 className="mb-5 text-4xl font-bold">aboutkafka は旧プロフィールUIです</h1>
          <p className="mb-4 text-lg leading-8 text-slate-300">
            この画面は2024年に作成したプロフィール試作です。現在の活動、主要プロジェクト、公開先を示す正準プロフィールではありません。
          </p>
          <p className="mb-8 leading-7 text-slate-400">
            固定されたフォロワー数、古いプロジェクト一覧、確認できていない連絡先を表示し続けないため、旧コンテンツの公開を停止しました。
          </p>

          <a
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
            href={CANONICAL_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github aria-hidden="true" size={20} />
            現在の正準プロフィールを開く
          </a>
        </section>
      </div>
    </main>
  )
}

export default App
