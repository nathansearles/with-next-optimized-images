import Head from "next/head";
import Image from "../components/Image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> with{" "}
          <a href="https://github.com/cyrilwanner/next-optimized-images">
            next-optimized-images.
          </a>
        </h1>

        <div className={styles.image}>
          <Image
            src="photo-1506905925346-21bda4d32df4.jpeg"
            alt="Photo by Samuel Ferrara - https://unsplash.com/photos/1527pjeb6jg"
          />
        </div>

        <p className={styles.description}>Import component</p>
        <pre>
          <code className={styles.code}>
            import Image from "../components/Image";
          </code>
        </pre>

        <p className={styles.description}>Add component</p>
        <pre>
          <code className={styles.code}>
            &lt;Image src="image.jpeg" alt="Alt Tag" /&gt;
          </code>
        </pre>

        <p className={styles.description}>
          Place images into <code className={styles.code}>/public/images</code>
        </p>

        <a
          href="https://github.com/cyrilwanner/next-optimized-images"
          className={styles.card}
        >
          next-optimized-images documentation
        </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
