import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const TRANSITION_DELAY_STEP = 0.06;
const SCROLL_DURATION = 500;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-24 md:py-32 lg:py-40 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: TRANSITION_DELAY_STEP * 0 }}
          className="mb-3"
        >
          <span className="text-[13px] tracking-[0.08em] text-slate-500 dark:text-slate-400 font-medium">
            Front-End Engineer
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: TRANSITION_DELAY_STEP * 1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white mb-5 tracking-tight"
        >
          Shinnosuke Nonaka
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: TRANSITION_DELAY_STEP * 2 }}
          className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          コードの読みやすさと、UI の使いやすさを大事にするフロントエンドエンジニアです。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: TRANSITION_DELAY_STEP * 3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="projects"
            smooth
            duration={SCROLL_DURATION}
            offset={-50}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white text-[15px] font-medium rounded-full cursor-pointer hover:bg-primary-hover transition-colors"
          >
            プロジェクトを見る
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
