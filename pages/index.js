import dynamic from 'next/dynamic'

const HomeBanner = dynamic(() => import('@shared/components/homeBanner'))
const HomeSections = dynamic(() => import('@shared/components/homeSections'))

export default function Home() {
  return (
    <div className='container'>
      <HomeBanner />
      <HomeSections />
    </div>
  )
}
