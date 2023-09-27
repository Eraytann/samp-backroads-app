import logo from '../images/logo.svg';
import {SocialLinks } from '../data';
import PageLinks from './PageLinks';

const Navbar = () => {
  return (
    <>
     <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/*<!-- left this comment on purpose -->*/}
        {/*2.metod Veriler componentten çekiliyor */}
        <PageLinks />

        <ul className="nav-icons">
          {SocialLinks.map((link)=>{
            const {id,href,icon}=link;  //Props ile çekiliyor
            return(
              <li key={id}>
                <a href={href} rel='noreferrer' target="_blank" className="nav-icon">
                  <i className={icon}></i>
              </a>
            </li>
            )
          })}
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar