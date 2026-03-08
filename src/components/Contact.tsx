import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { FiMail, FiMapPin } from 'react-icons/fi';

type ContactItem = {
  id: string;
  label: string;
  icon: ReactNode;
  text: string;
  href?: string;
};

const TRANSITION_DELAY_STEP = 0.1;

export default function Contact() {
  const contacts: ContactItem[] = [
    {
      id: "email",
      label: "メール",
      icon: <FiMail />,
      text: "shinnosuke.nonaka.work@gmail.com",
      href: "mailto:shinnosuke.nonaka.work@gmail.com",
    },
    {
      id: "location",
      label: "拠点",
      icon: <FiMapPin />,
      text: "Tokyo, Japan",
    },
  ];

  return (
    <Section id="contact" title="お問い合わせ" bgWhite>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center text-[17px] text-slate-600 dark:text-slate-400 mb-14 max-w-2xl leading-relaxed"
        >
          ご質問やご依頼がありましたら、メールよりご連絡ください。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16 max-w-2xl mx-auto">
          {contacts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index + 1) * TRANSITION_DELAY_STEP }}
              className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl flex flex-col items-center text-center gap-3 border border-slate-200/80 dark:border-slate-800/80 transition-colors hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className="w-12 h-12 text-slate-400 dark:text-slate-500 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-[17px] mb-1 text-slate-900 dark:text-white">
                  {item.label}
                </h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[15px] text-primary hover:underline break-all"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p className="text-[15px] text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
