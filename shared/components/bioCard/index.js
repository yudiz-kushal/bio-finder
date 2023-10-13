import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { genderOptions } from '@shared/utils'

import gMale from '@assets/images/gender/male.svg'
import gFemale from '@assets/images/gender/female.svg'

// import style from './style.module.scss'

const BioCardFooter = dynamic(() => import('@shared/components/bioCard/footer'))
function BioCard({ text, index }) {
  return (
    <div className="b-card h-100 m-3 red-hover-shadow card-container">
      <Link
        href={`/bio-details/tinder-bio/${index}`}
        prefetch={false}
        className="b-link"
        title={`${text?.aProfileFields?.sDisplayText}`}>
        <div className="position-relative h-100 d-flex flex-column border-black m-card">
          <div className="b-image" key={index}>
            <Image
              src={text?.image}
              alt={`Profile Image ${index + 1}`}
              height={100}
              width={100} />
          </div>
          <div className="b-content position-relative">
            <p className="b-details">
              {genderOptions.map((option, i) => (
                option?.value === +text?.sGender &&
                <label key={i} className='g-image' >
                  <Image src={option.value === 1 ? gMale : gFemale} alt={option.value === 1 ? "Male" : "Female"} /> | <span>{text?.nAge}</span>
                </label>
              ))}
            </p>
            <BioCardFooter text={text} bButton={"b-button"} />
            <p>
              {text?.sHomeCountry && `${text?.sHomeCountry}, `}
              {text?.sHomeState && `${text?.sHomeState}, `}
              {text?.sHomeCity && `${text?.sHomeCity}`}
            </p>
            <p className="b-title mb-0">{`" ${text?.aProfileFields?.sDisplayText} "`}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
BioCard.propTypes = {
  text: PropTypes.object,
}
export default BioCard