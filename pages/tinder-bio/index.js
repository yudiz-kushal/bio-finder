import dynamic from 'next/dynamic'

const BioList = dynamic(() => import('@shared/components/bioList'))

function TinderBio() {
  return (
    <BioList seo={{ sTitle: "Tinder Bio" }} />
  )
}
export default TinderBio
