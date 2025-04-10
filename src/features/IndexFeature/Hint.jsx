export function Hint({ children, type }) {
  if (type === 'bottom')
    return (
      <div className="mt-4 hidden justify-end md:block">
        <span className="float-right flex items-center gap-1 text-xs text-stone-700">
          {children}
        </span>
      </div>
    );
}
