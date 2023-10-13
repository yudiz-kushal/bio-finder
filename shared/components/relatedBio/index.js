import dynamic from 'next/dynamic'

const HomeBio = dynamic(() => import('@shared/components/homeBio'))

function RelatedBio({ data }) {
  return (
    <div className="mt-4">
      <HomeBio title="Related Bio" data={data} />
    </div>
  )
}

export default RelatedBio
