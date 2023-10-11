import dynamic from 'next/dynamic'

const BioList = dynamic(() => import('@shared/components/bioList'))

function BumbleBio() {
    return (
        <BioList seo={{ sTitle: "Bumble Bio" }} />
    )
}
export default BumbleBio
