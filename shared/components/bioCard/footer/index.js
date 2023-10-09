import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

// import style from './style.module.scss'

const IconCopy = dynamic(() => import('@shared/icons/iconCopy'), { ssr: false })
const IconShare = dynamic(() => import('@shared/icons/iconShare'), { ssr: false })

function BioCardFooter({ children, className = '', text }) {
  const [isNativeShare, setIsNativeShare] = useState(true)

  useEffect(() => {
    if (navigator.share) {
      setIsNativeShare(true)
    } else {
      setIsNativeShare(false)
    }
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      alert('Copied')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  async function hadleShare() {
    const title = document.title
    const url = `${window?.location?.origin}${window?.location?.pathname}`
    try {
      await navigator
        .share({
          title,
          url,
          text
        })
      // alert('Thanks for Sharing!')
    } catch (err) {
      console.error('share error', err)
      // alert(`Couldn't share ${err}`)
    }
  }

  return (
    <div className={`${className} b-footer d-flex`}>
      <button className="b-button" title='Copy' onClick={handleCopy}>
        <IconCopy />
        Copy
      </button>
      <button className="b-button" title='Share' onClick={hadleShare}>
        <IconShare />
        Share
      </button>
      {children}
    </div>
  )
}
BioCardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string
}
export default BioCardFooter
