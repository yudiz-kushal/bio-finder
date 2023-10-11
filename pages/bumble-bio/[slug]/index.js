import dynamic from 'next/dynamic'

const BioDetail = dynamic(() => import('@shared/components/bioDetail'))

function BumbleBioDetail() {
    return (
        <BioDetail seo={{ sTitle: "Bio Detail" }} />
    )
}
export default BumbleBioDetail
