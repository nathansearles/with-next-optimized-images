import Head from "next/head";
import Image from "../components/Image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-optimized-images with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.image}>
          <Image
            src="photo-1506905925346-21bda4d32df4.jpeg"
            alt="Photo by Samuel Ferrara - https://unsplash.com/photos/1527pjeb6jg"
          />
        </div>

        <h1 className={styles.title}>
          Example usage of{" "}
          <a href="https://github.com/cyrilwanner/next-optimized-images">
            next-optimized-images
          </a>{" "}
          with <a href="https://nextjs.org">Next.js</a>
        </h1>

        <p>
          For the edge case that you can't use{" "}
          <a href="https://nextjs.org/docs/api-reference/next/image">
            next/image
          </a>{" "}
          and you're using{" "}
          <a href="https://nextjs.org/docs/advanced-features/static-html-export">
            Static HTML Export
          </a>
        </p>

        <p>
          Open DevTools (control + option + i), select the network tab, and
          resize the browser. Watch as the various images load in.
        </p>

        <h2>Usage</h2>
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
        <div className={styles.resize}>
          <svg width="100%" height="100%" viewBox="0 0 48 48">
            <title>resize</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="resize">
                <polygon
                  id="Rectangle"
                  fill="#000000"
                  points="48 0 48 48 0 48"
                ></polygon>
                <path
                  d="M42.1666667,41.577411 L42.1666667,39.25 C42.1666667,39.0198813 42.3532147,38.8333333 42.5833333,38.8333333 C42.813452,38.8333333 43,39.0198813 43,39.25 L43,42.5833333 C43,42.813452 42.813452,43 42.5833333,43 L39.25,43 C39.0198813,43 38.8333333,42.813452 38.8333333,42.5833333 C38.8333333,42.3532147 39.0198813,42.1666667 39.25,42.1666667 L41.577411,42.1666667 L38.1220388,38.7112945 C37.9593204,38.548576 37.9593204,38.2847573 38.1220388,38.1220388 C38.2847573,37.9593204 38.548576,37.9593204 38.7112945,38.1220388 L42.1666667,41.577411 Z"
                  id="Path"
                  fill="#fafafa"
                  fillRule="nonzero"
                ></path>
                <path
                  d="M28.8333333,29.422589 L28.8333333,31.75 C28.8333333,31.9801186 28.6467853,32.1666667 28.4166667,32.1666667 C28.186548,32.1666667 28,31.9801186 28,31.75 L28,28.4166667 C28,28.186548 28.186548,28 28.4166667,28 L31.75,28 C31.9801186,28 32.1666667,28.186548 32.1666667,28.4166667 C32.1666667,28.6467853 31.9801186,28.8333333 31.75,28.8333333 L29.422589,28.8333333 L32.8779612,32.2887055 C33.0406796,32.451424 33.0406796,32.7152427 32.8779612,32.8779612 C32.7152427,33.0406796 32.451424,33.0406796 32.2887055,32.8779612 L28.8333333,29.422589 Z"
                  id="Path"
                  fill="#fafafa"
                  fillRule="nonzero"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </footer>
    </div>
  );
}
