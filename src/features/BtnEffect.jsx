export default function BtnEffect({ title }) {
  return (
    <span className="group relative inline-block h-5 overflow-hidden transition-colors duration-300">
      <span className="block transform transition-all duration-500 ease-in-out group-hover:-translate-y-full">
        {title}
      </span>
      <span className="absolute left-0 top-full block transform transition-all duration-500 ease-in-out group-hover:translate-y-[-100%]">
        {title}
      </span>
    </span>
  );
}
