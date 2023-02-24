import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NCAA() {
  const [console, setConsole] = useState('');

  return (
    <main>
      <h1>NCAA</h1>
      <Footer />
    </main>
  );
}
