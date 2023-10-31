import React from 'react'
import { footer } from '../Data'
import { Link } from 'react-router-dom'
import MobileScreenFooter from './MobileScreenFooter'
import { useGlobalContext } from '../UserContext/UserContext'

const Footer = () => {
const {content} = useGlobalContext();
  return (
    <>
    <div className="">
      <footer>
        <div id="footer">
          {content?.map((item, index) => {
            return <div className="footer_container" key={index}>
              <h1>The Earls Court Development Company</h1>
              <div className="footer_section">
                {item?.footerLinks?.map((link, index) => {
                  return <div key={index} className='link_section'>
                    <div className="">
                      <p>{link?.title}</p>
                      {link?.links?.map((item2, index) => {
                        return <Link key={index} className='footer_links' to={item2?.url}>{item2?.label}</Link>
                      })}
                    </div>
                  </div>
                })}
              </div>
              <p className='signUp_btn'>{item?.signUpBtn}</p>
            </div>
          })}
          <p className='copyRights'>{content?.[0]?.footerPrivacyTitle}</p>
    
        </div>
      </footer>
    </div>
    <div className="footer-overlay">
      <MobileScreenFooter />
    </div>
    </>
  )
}

export default Footer

// {footer?.map((item, index) => {
//   return <div className="footer_container" key={index}>
//     <h1>{item?.title}</h1>
//     <div className="footer_section">
//       {item?.link_section?.map((link, index) => {
//         return <div key={index} className='link_section'>
//           <div className="">
//             <p>{link?.title}</p>
//             {link?.links?.map((item2, index) => {
//               return <Link key={index} className='footer_links' to={item2?.url}>{item2?.label}</Link>
//             })}
//           </div>
//         </div>
//       })}
//     </div>
//     <p className='signUp_btn'>{item?.signUp}</p>
//   </div>
// })}