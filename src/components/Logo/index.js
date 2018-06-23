import preact from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */

import style from './style';

const anchorLink = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });

const Logo = () =>
  <a
    class="navbar-item  has-text-white navbar__logo is-size-6"
    onClick={anchorLink}
    href="/"
  >
    <figure class="pd-logo">
      <div class="slant">PROJECT</div>
      <br/>
      <div class="slant">DISCONTENT</div>
    </figure>
  </a>

export default Logo;
