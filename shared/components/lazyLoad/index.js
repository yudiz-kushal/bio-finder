import { useEffect, useState } from "react"
import PropTypes from 'prop-types'

function LazyLoad({ children }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // document.addEventListener('mousemove', () => { load() })
    // document.addEventListener('scroll', () => { load() })
    window.addEventListener('mousemove', load, { passive: true })
    window.addEventListener('scroll', load, { passive: true })

    function load() {
      if (isLoaded) return true
      setIsLoaded(true)
    }
    // return () => {
    //   document.removeEventListener('mousemove', () => { load() })
    //   document.removeEventListener('scroll', () => { load() })
    // }
    return () => {
      window.removeEventListener('mousemove', load)
      window.removeEventListener('scroll', load)
    }
  }, [])

  if (isLoaded) return children
  else return null
}

LazyLoad.propTypes = {
  children: PropTypes.node
}

export default LazyLoad
