import Link from 'next/link';

export default function Button(props) {
  return (
    <button>
      <Link href={props.link}>Start</Link>
    </button>
  );
}
