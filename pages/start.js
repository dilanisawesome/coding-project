import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Start() {
  const [console, setConsole] = useState('');

  return (
    <main>
      <h1>Start</h1>
      <button onClick={() => setConsole('NCAA')}>
        <Link href="/ncaa">
          <h3>Start in NCAA</h3>
        </Link>
      </button>
      <br />
      <button onClick={() => setConsole('Europe')}>
        <h3>Start in Europe</h3>
      </button>
      <p>Console: {console}</p>
      <br />
      <Footer />
    </main>
  );
}
