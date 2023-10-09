import dynamic from 'next/dynamic'

const BioDetail = dynamic(() => import('@shared/components/bioDetail'))

function TinderBioDetail() {
  return (
    <BioDetail seo={{ sTitle: "Bio Detail" }} />
  )
}
export default TinderBioDetail
