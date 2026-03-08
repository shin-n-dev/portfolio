import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { SiReact, SiTypescript, SiJavascript, SiFirebase, SiPython, SiSelenium, SiVitest } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { TbBrandAzure } from 'react-icons/tb';

type Tech = {
  name: string;
  icon: ReactNode;
};

type Project = {
  title: string;
  description: string[];
  tech: Tech[];
  role: string;
};

const TECH_ICON_SIZE = "w-5 h-5";
const TRANSITION_DELAY_STEP = 0.1;

export default function Projects() {
  const projects: Project[] = [
    {
      title: "社内向けタスク管理ツール開発",
      description: [
        "機能検討の段階から参画し、詳細設計〜テストを担当",
        "認証・タスク管理・コメント・日報の各機能を実装",
      ],
      tech: [
        { name: "React", icon: <SiReact className={`${TECH_ICON_SIZE} text-[#61DAFB]`} /> },
        { name: "TypeScript", icon: <SiTypescript className={`${TECH_ICON_SIZE} text-[#3178C6]`} /> },
        { name: "Firebase", icon: <SiFirebase className={`${TECH_ICON_SIZE} text-[#FFCA28]`} /> }
      ],
      role: "フロントエンド設計・実装"
    },
    {
      title: "大手運送会社向け業務システム再構築",
      description: [
        "詳細設計〜テストを担当",
        "入力制御・データフォーマット・認証などの共通部品を実装",
        "共通部品の開発者向け利用ガイドを作成",
      ],
      tech: [
        { name: "React", icon: <SiReact className={`${TECH_ICON_SIZE} text-[#61DAFB]`} /> },
        { name: "TypeScript", icon: <SiTypescript className={`${TECH_ICON_SIZE} text-[#3178C6]`} /> },
        { name: "Vitest", icon: <SiVitest className={`${TECH_ICON_SIZE} text-[#6E9F18]`} /> },
        { name: "AWS", icon: <FaAws className={`${TECH_ICON_SIZE} text-[#FF9900]`} /> },
        { name: "Microsoft Azure", icon: <TbBrandAzure className={`${TECH_ICON_SIZE} text-[#0078D4]`} /> }
      ],
      role: "共通コンポーネント設計・実装"
    },
    {
      title: "自社チャットシステムにおける RPA 構築",
      description: [
        "要件定義〜運用・保守を担当",
        "EC・予約サイト向けチャット RPA の新規構築・改修を実施",
        "新規メンバーのオンボーディングを担当",
      ],
      tech: [
        { name: "JavaScript", icon: <SiJavascript className={`${TECH_ICON_SIZE} text-[#F7DF1E]`} /> },
        { name: "Python", icon: <SiPython className={`${TECH_ICON_SIZE} text-[#3776AB]`} /> },
        { name: "Selenium", icon: <SiSelenium className={`${TECH_ICON_SIZE} text-[#43B02A]`} /> }
      ],
      role: "RPA 構築・改修"
    }
  ];

  return (
    <Section id="projects" title="プロジェクト" bgWhite>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * TRANSITION_DELAY_STEP }}
            className="bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col h-full transition-colors hover:border-slate-300 dark:hover:border-slate-700"
          >
            <div className="p-8 flex flex-col flex-grow text-left">
              <h3 className="text-[20px] font-semibold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-4">
                {project.role}
              </p>
              
              <div className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                <ul className="list-disc list-inside space-y-1.5">
                  {project.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="flex items-center gap-2 text-[13px] text-slate-600 dark:text-slate-300"
                      title={tech.name}
                    >
                      <span className="shrink-0">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
