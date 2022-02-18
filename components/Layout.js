import Head from "next/head"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="max-w-5xl mx-auto shadow-xl rounded min-h-screen bg-gray-50">
      <Head>
        <title>Moralis IO tutorial</title>
        <meta name="description" content="A basic tutorial of Moralis IO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  )
}
