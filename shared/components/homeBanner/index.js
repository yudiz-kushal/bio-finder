import Image from "next/image";
import dynamic from 'next/dynamic'

import style from './style.module.scss'
import banner from '@assets/images/banner-1.png'

const Heading = dynamic(() => import('@shared/components/heading'))
const BfButton = dynamic(() => import('@shared/components/bfButton'))

function HomeBanner() {
	return (
		<section className={`${style.banner} py-5`}>
			<div className="row align-items-center">
				<div className="col-lg-6">
					<Heading tag="h1">Find perfect Bio</Heading>
					<p className="mb-0 mt-4 mt-lg-5">Free, Tranding, 1900+ bios for any kind of person.</p>
					<BfButton className='mt-3 mt-md-4'>Find More</BfButton>
				</div>
				<div className="col-lg-6 text-end d-none d-lg-block">
					<Image src={banner} className="h-auto" alt="Banner" />
				</div>
			</div>
		</section>
	)
}
export default HomeBanner