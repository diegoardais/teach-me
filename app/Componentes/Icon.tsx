import icons from '../Constants/icons';

interface IconProps {
  className: string;
  name: string;
}

export default function Icon({ className, name }: IconProps) {
  const definition = icons.get(name);

  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={definition} />
    </svg>
  );
}
