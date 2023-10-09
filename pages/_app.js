import dynamic from 'next/dynamic'
import { Roboto } from '@next/font/google'

import '@assets/scss/main.scss'
// import '@assets/scss/components/header.scss'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
})
const AppLayout = dynamic(() => import('@shared/components/appLayout'))

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </main>
  )
}
