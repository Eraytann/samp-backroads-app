import { pageLinks, SocialLinks } from "../data";
import SocialLink from "./SocialLink"; 

const Footer = () => {
  return (
    <>
     <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link)=>{
          const {id, href, text} = link;
          return(
        <li key={id}>
          <a href={href} className="footer-link">{text}</a>
        </li>
        );
      })}
      </ul>
      <ul className="footer-icons">
        {SocialLinks.map((link)=>{   //Props ile class'ta componente ayrıldı
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
    </>
  )
}

export default Footer;

