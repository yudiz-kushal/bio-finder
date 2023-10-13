import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

// import style from './style.module.scss'

const IconCopy = dynamic(() => import('@shared/icons/iconCopy'), { ssr: false })
const IconShare = dynamic(() => import('@shared/icons/iconShare'), { ssr: false })

function BioCardFooter({ children, className = '', text, bCardButtonFooter, bButton }) {
  const [isNativeShare, setIsNativeShare] = useState(true)

  console.log({ className })

  useEffect(() => {
    if (navigator.share) {
      setIsNativeShare(true);
    } else {
      setIsNativeShare(false);
    }
  }, []);

  async function handleCopy(e) {
    try {
      e.preventDefault()
      await navigator.clipboard.writeText(text?.aProfileFields?.sDisplayText)
      alert('Copied')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  async function handleShare(e) {
    const shareData = {
      title: document.title,
      url: `${window?.location?.origin}${window?.location?.pathname}`,
      text: text?.aProfileFields?.sDisplayText
    }
    try {
      e.preventDefault()
      await navigator.share(shareData)
      alert('Thanks for Sharing!')
    } catch (err) {
      alert(`Couldn't share ${err}`)
    }
  }

  return (
    <div className={`${className} b-footer d-flex p-2`}>
      <button className={`${bCardButtonFooter} ${bButton}`} title='Copy' onClick={(e) => handleCopy(e)}>
        <IconCopy />
        {/* Copy */}
      </button>
      <button className={`${bCardButtonFooter} ${bButton}`} title='Share' onClick={(e) => handleShare(e)}>
        <IconShare />
        {/* Share */}
      </button>
      {children}
    </div>
  )
}
BioCardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.object
}
export default BioCardFooter
