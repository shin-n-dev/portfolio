import { motion } from 'framer-motion';
import Section from './Section';

type Experience = {
  period: string;
  title: string;
  description: string;
};

const TRANSITION_DURATION = 0.4;
const TRANSITION_DELAY_STEP = 0.06;

export default function Experience() {
  const experiences: Experience[] = [
    {
      period: "2024.10 - Present",
      title: "自社チャットシステムにおける RPA 構築",
      description: "担当工程：要件定義〜運用・保守\n業務内容：チャット RPA の新規構築・改修"
    },
    {
      period: "2024.07 - 2024.09",
      title: "クラウド会計ソフトのフロントエンド開発",
      description: "担当工程：実装\n業務内容：デザインカンプに基づく UI コンポーネントのコーディング"
    },
    {
      period: "2023.07 - 2024.06",
      title: "大手運送会社向け業務システム再構築",
      description: "担当工程：詳細設計〜テスト\n業務内容：共通部品（入力制御・認証など）の設計・実装"
    },
    {
      period: "2022.03 - 2023.06",
      title: "社内向けタスク管理ツール開発",
      description: "担当工程：詳細設計〜テスト\n業務内容：認証・タスク管理・コメント・日報の各機能を実装"
    },
    {
      period: "2020.09 - 2022.02",
      title: "Web サイト制作",
      description: "担当工程：実装〜運用・保守\n業務内容：デザインカンプに基づくフロントエンド開発"
    }
  ];

  return (
    <Section id="experience" title="経歴">
      <div className="max-w-3xl mx-auto py-4">
        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 space-y-10">
          {experiences.map((exp, index) => {
            const isCurrent = exp.period.includes("Present");
            return (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: TRANSITION_DURATION, delay: index * TRANSITION_DELAY_STEP }}
              className="group relative"
            >
              <div
                className={`absolute -left-[2.375rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 transition-colors ${
                  isCurrent
                    ? "border-primary bg-primary"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 group-hover:border-slate-400 group-hover:bg-slate-300 dark:group-hover:border-slate-500 dark:group-hover:bg-slate-600"
                }`}
              />
              
              <div className="flex flex-col">
                <span className="text-[13px] text-slate-500 dark:text-slate-400 mb-1">
                  {exp.period}
                </span>
                <h3 className="text-[19px] font-semibold mb-2 text-slate-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
