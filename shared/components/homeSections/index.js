import dynamic from 'next/dynamic'

import allRoutes from '@shared/utils/allRoutes';

const Advertisement = dynamic(() => import('@shared/components/advertisement'))
const HomeBio = dynamic(() => import('@shared/components/homeBio'))

function HomeSections() {
  return (
    <div className='row'>
      <div className='col-lg-9'>
        <HomeBio title="Tinder Bio" link={allRoutes.tinder} />
        <HomeBio title="Bumble Bio" link={allRoutes.bumble} className='mt-4' />
      </div>
      <div className="col-lg-3 d-none d-lg-block">
        <Advertisement />
      </div>
    </div>
  )
}

export default HomeSections