import dynamic from 'next/dynamic'

const HomeBio = dynamic(() => import('@shared/components/homeBio'))

function RelatedBio() {
  return (
    <div className="mt-4">
      <HomeBio title="Related Bio" />
    </div>
  )
}

export default RelatedBio
