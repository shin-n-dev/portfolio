import { motion } from 'framer-motion';
import Section from './Section';
import { FiCheckCircle } from 'react-icons/fi';

const TRANSITION_DELAY_STEP = 0.05;

export default function About() {
  const experiences: string[] = [
    "Web サイト制作",
    "社内向けタスク管理ツール開発",
    "大手運送会社向け業務システム再構築",
    "自社チャットシステムにおける RPA 構築",
  ];

  const strengths: string[] = [
    "要件のすり合わせから実装・テストまでの一気通貫での担当",
    "共通コンポーネント設計による効率と品質の両立",
    "コードレビュー・オンボーディングによるチームの開発基盤の支援",
    "レスポンシブ・使いやすさを踏まえた UI 実装",
  ];

  return (
    <Section id="about" title="自己紹介" bgWhite>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <p className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">
            フロントエンド中心に、約 5 年の開発経験があります。Web アプリや業務システムの開発、RPA 構築などに携わってきました。
          </p>

          {/* 大切にしていること（特徴） */}
          <div>
            <h4 className="text-[13px] font-medium tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-4">
              大切にしていること
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span><strong className="text-slate-800 dark:text-slate-100 font-medium">コード</strong> — 意図が明確で、チームで読み継ぎやすいコードを書く。過度に技巧的にはしない。</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: TRANSITION_DELAY_STEP }}
                className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span><strong className="text-slate-800 dark:text-slate-100 font-medium">コミュニケーション</strong> — ステークホルダーに合わせて説明し、齟齬なく進める。</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: TRANSITION_DELAY_STEP * 2 }}
                className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span><strong className="text-slate-800 dark:text-slate-100 font-medium">ユーザー視点</strong> — 利用シーンを想像して設計し、使い手の負荷を減らす。</span>
              </motion.li>
            </ul>
          </div>

          {/* 主な経験 */}
          <div>
            <h4 className="text-[13px] font-medium tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-4">
              主な経験
            </h4>
            <ul className="space-y-2">
              {experiences.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * TRANSITION_DELAY_STEP }}
                  className="flex items-center gap-3 text-[15px] text-slate-600 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 得意なこと */}
          <div>
            <h4 className="text-[13px] font-medium tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-4">
              得意なこと
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * TRANSITION_DELAY_STEP }}
                  className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-300"
                >
                  <FiCheckCircle className="text-primary mt-0.5 shrink-0 text-base" />
                  <span>{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
