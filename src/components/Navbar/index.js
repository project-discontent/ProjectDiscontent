import preact from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */

import Logo from '../Logo/index';
import style from './style.scss';


const colorClass = (y) => {
  const intro = document.querySelector('#intro')
  const services = document.querySelector('#services')
  const team = document.querySelector('#team')

  return team && y > team.offsetTop - 64 ? 'bg-white'
    : services && y > services.offsetTop - 64 ? 'bg-red'
    : intro && y > intro.offsetTop - 64 ? 'bg-purple'
    : ''
}

class Navbar extends preact.Component {
  state = {
    scrollY: 0
  }

  componentDidMount = () =>
    window.addEventListener("scroll", this.handleScroll)
  componentWillUnmount = () =>
    window.removeEventListener("scroll", this.handleScroll)

  handleScroll = () => {
    this.setState({ scrollY })
  }


  render() {
    return <nav
        class={`navbar is-transparent is-fixed-top ${colorClass(scrollY)}`}
        style={{ top: 0 - scrollY > -40 ? 0 - scrollY : -40 }}
      >

      <div class="container is-fluid">

        <Logo />

        <div class="navbar-start">
          <a class="navbar-item has-text-weight-bold has-text-white" to="#about">
            Services
          </a>

          <a class="navbar-item has-text-weight-bold has-text-white" to="#team">
            Team
          </a>
        </div>


        <div class="navbar-end">
          <div class="navbar-item">
            <a
              class="navbar__link button is-size-7 "
              href="#collab">
              Work with us
            </a>
          </div>
        </div>
      </div>
    </nav>
  }
}

export default Navbar;
