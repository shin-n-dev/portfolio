import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  bgWhite?: boolean;
};

export default function Section({ id, title, children, className = '', bgWhite = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16 ${bgWhite ? 'bg-white dark:bg-dark-surface' : 'bg-light-bg dark:bg-dark-bg'} ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight mb-10 md:mb-12 text-center text-slate-900 dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
