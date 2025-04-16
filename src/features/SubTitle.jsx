/**
 * A component that renders a subtitle with specific styling.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The text to display as the subtitle.
 * @return {JSX.Element} The rendered subtitle element.
 */

export default function SubTitle({ title, type }) {
  const base = 'text-secondary ';
  const styles = {
    menu: `${base} text-xs`,
    sub: 'font-headline text-2xl',
    head: 'font-headline text-2xl md:text-8xl',
    page: 'mb-2 hidden text-end text-xs text-secondary sm:block',
  };

  if (type === 'menu' || type === 'page')
    return <span className={styles[type]}>{title}</span>;

  if (type === 'sub') return <h2 className={styles[type]}>{title}</h2>;

  if (type === 'head') return <h2 className={styles[type]}>{title}</h2>;
}
