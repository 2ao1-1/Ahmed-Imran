export function Hint({ children, type }) {
  const base =
    'float-right flex items-center flex-wrap gap-1 text-xs text-stone-700';

  const styles = {
    bottom: 'mt-4 hidden justify-end md:block',
    top: 'flex items-center justify-end gap-3  text-xs text-secondary',
    project: 'justify-start float-left ',
  };
  if (type === 'bottom' || type === 'project')
    return (
      <div className={styles[type]}>
        <span className={base}>{children}</span>
      </div>
    );
  if (type === 'top')
    return (
      <div className={styles[type]}>
        <span className={base}>{children}</span>
      </div>
    );

  // if (type === 'showMore')
  //   return (
  //     <span
  //       className={`${className} relative float-right flex items-center gap-3 py-6 text-xs text-stone-700 md:hidden`}
  //     >
  //       {children}
  //     </span>
  //   );
}
