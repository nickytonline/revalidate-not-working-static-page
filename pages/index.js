import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ category, timestamp}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{category}</h1>
        <p>{timestamp}</p>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const category = await 'some-category';
  console.log(category)

 if (!category) {
  return {
    notFound: true,
    revalidate: 60,
  };
}

  return {
    props: {
      category,
      timestamp: new Date().toJSON(),
    },
    revalidate: 60,
  };
};