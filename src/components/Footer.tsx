export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-slate-200/80 dark:border-slate-800/80 bg-light-bg dark:bg-dark-bg">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Shinnosuke Nonaka. 無断転載・複製を禁じます。
      </p>
    </footer>
  );
}
