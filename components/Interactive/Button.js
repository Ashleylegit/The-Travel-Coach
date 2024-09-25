import Link from 'next/link';

function Button({ children, href }) {
  return (
    <Link href={href}>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {children}
      </a>
    </Link>
  );
}

export default Button;