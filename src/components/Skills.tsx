import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { 
  SiReact, SiTypescript, SiJavascript, SiHtml5,
  SiTailwindcss, SiPython, SiSpringboot, 
  SiFirebase, SiGithub, SiGithubactions, SiGitlab, SiSelenium,
  SiJquery, SiVitest, SiClaude, SiEclipseide
} from 'react-icons/si';
import { FaJava, FaAws, FaCss3 } from 'react-icons/fa';
import { TbBrandAzure, TbBrandVscode } from 'react-icons/tb';

type Skill = {
  name: string;
  icon: ReactNode;
};

type Category = {
  title: string;
  skills: Skill[];
};

const ICON_SIZE = "w-8 h-8";

export default function Skills() {
  const categories: Category[] = [
    {
      title: "言語",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className={`${ICON_SIZE} text-[#E34F26]`} /> },
        { name: "CSS3", icon: <FaCss3 className={`${ICON_SIZE} text-[#1572B6]`} /> },
        { name: "JavaScript", icon: <SiJavascript className={`${ICON_SIZE} text-[#F7DF1E]`} /> },
        { name: "TypeScript", icon: <SiTypescript className={`${ICON_SIZE} text-[#3178C6]`} /> },
        { name: "Python", icon: <SiPython className={`${ICON_SIZE} text-[#3776AB]`} /> },
        { name: "Java", icon: <FaJava className={`${ICON_SIZE} text-[#007396]`} /> },
      ]
    },
    {
      title: "フレームワーク・ライブラリ",
      skills: [
        { name: "jQuery", icon: <SiJquery className={`${ICON_SIZE} text-[#0769AD]`} /> },
        { name: "React", icon: <SiReact className={`${ICON_SIZE} text-[#61DAFB]`} /> },
        { name: "Tailwind", icon: <SiTailwindcss className={`${ICON_SIZE} text-[#06B6D4]`} /> },
        { name: "Vitest", icon: <SiVitest className={`${ICON_SIZE} text-[#6E9F18]`} /> },
        { name: "Selenium", icon: <SiSelenium className={`${ICON_SIZE} text-[#43B02A]`} /> },
        { name: "Spring Boot", icon: <SiSpringboot className={`${ICON_SIZE} text-[#6DB33F]`} /> },
      ]
    },
    {
      title: "クラウド",
      skills: [
        { name: "Firebase", icon: <SiFirebase className={`${ICON_SIZE} text-[#FFCA28]`} /> },
        { name: "AWS", icon: <FaAws className={`${ICON_SIZE} text-[#FF9900]`} /> },
        { name: "Microsoft Azure", icon: <TbBrandAzure className={`${ICON_SIZE} text-[#0078D4]`} /> },
      ]
    },
    {
      title: "リポジトリ・CI",
      skills: [
        { name: "GitHub", icon: <SiGithub className={`${ICON_SIZE} text-[#181717] dark:text-slate-100`} /> },
        { name: "GitHub Actions", icon: <SiGithubactions className={`${ICON_SIZE} text-[#2088FF]`} /> },
        { name: "GitLab", icon: <SiGitlab className={`${ICON_SIZE} text-[#FC6D26]`} /> },
      ]
    },
    {
      title: "開発環境",
      skills: [
        { name: "VSCode", icon: <TbBrandVscode className={`${ICON_SIZE} text-[#007ACC]`} /> },
        { name: "Cursor", icon: <img src={`${import.meta.env.BASE_URL}icons/cursor.ico`} alt="Cursor" className={`${ICON_SIZE} object-contain`} /> },
        { name: "Devin", icon: <img src={`${import.meta.env.BASE_URL}icons/devin.ico`} alt="Devin" className={`${ICON_SIZE} object-contain`} /> },
        { name: "Claude Code", icon: <SiClaude className={`${ICON_SIZE} text-[#D4A574]`} /> },
        { name: "Eclipse", icon: <SiEclipseide className={`${ICON_SIZE} text-[#2C2255]`} /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Section id="skills" title="スキル">
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-[13px] font-medium tracking-[0.06em] text-slate-500 dark:text-slate-400 uppercase mb-5">
              {category.title}
            </h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {category.skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col items-center gap-3 transition-colors hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="flex items-center justify-center w-8 h-8 shrink-0">
                    {skill.icon}
                  </div>
                  <span className="text-[15px] font-normal text-slate-700 dark:text-slate-200 whitespace-nowrap">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
