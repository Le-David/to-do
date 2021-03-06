import Head from "next/head"
import { Container } from "./components/Container"
import { TodoComponent } from "./components/TodoComponent"
import { Header } from "./components/Header"
import styles from "../styles/Home.module.sass"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TO-DO list</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <main className={styles.main}>
        <Container>
          <Header />
        </Container>
        <Container>
          <TodoComponent />
        </Container>
      </main>
    </div>
  )
}
