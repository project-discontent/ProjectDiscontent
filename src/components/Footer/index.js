import preact from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */
import style from './style.scss';
import Logo from '../Logo/index';

const Footer = () =>
  <div
    class="footer level has-text-white has-background-dark"
    style={{ padding: "3rem 1.5rem"}}
  >
    <div className="level-left">
      <Logo />
    </div>
    <br/>
    <br/>
    <div className="level-right has-text-weight-bold has-text-centered">
        Follow us: &nbsp;
        <a className="red" href="instagram.com">Instagram</a>
        ,&nbsp;
        <a className="red" href="twitter.com">Twitter</a>
    </div>
  </div>

export default Footer;
