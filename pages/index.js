import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../components/Button.js';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>PATH TO THE NBA</h1>
        <Link href="/start">
          <Button text="Start" />
        </Link>
      </main>
    </div>
  );
}
