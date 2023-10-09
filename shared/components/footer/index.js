import Link from 'next/link'
// import style from './style.module.scss'

function Footer() {
  return (
    <footer className="m-footer mt-4 mt-md-5 py-4">
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 text-center text-md-end'>
            <div className="mf-links">
              <Link prefetch={false} href="/disclaimer" title="Disclaimer">Disclaimer</Link>
              <Link prefetch={false} href="/privacy-policy" title="Privacy Policy">Privacy Policy</Link>
            </div>
          </div>
          <div className='col-md-6 order-md-first text-center text-md-start'>
            © {new Date().getFullYear()} BioFinder. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
