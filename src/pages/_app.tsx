import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
}
