import { X } from 'lucide-react';

export default function CloseBtn({ onClick }) {
  return (
    <button className="relative float-end" onClick={onClick}>
      <X />
    </button>
  );
}
