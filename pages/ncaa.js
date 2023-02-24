import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NCAA() {
  const [console, setConsole] = useState('');

  return (
    <main>
      <h1>NCAA</h1>
      <p>
        You've chosen to start in the NCAA. You are a D1 Point Guard Recruit out
        of the University of Michigan.
      </p>
      <Footer />
    </main>
  );
}
