import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function Start() {
  const [console, setConsole] = useState('');

  return (
    <main>
      <h1>Start</h1>
      <button onClick={() => setConsole('NCAA')}>
        <h3>Start in NCAA</h3>
      </button>
      <p>Console: {console}</p>
      <br />
      <button>
        <h3>Start in Europe</h3>
      </button>
      <br />
      <Footer />
    </main>
  );
}
