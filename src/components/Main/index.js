import preact from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */

import Navbar from '../Navbar/index';
import style from "./style.scss";

const App = () =>
  <div>
    <Navbar/>

    <section id="intro" class="section hero has-background-dark">
      <div class="pd__hero--top hero-body">
        <div class="pd__hero-text">
          <h4 class="barlow white header slant is-size-6-mobile">
            WE ARE
          </h4>
          <h1 class="condensed red header slant is-size-3-mobile">
            DISCONTENT
          </h1>
        </div>

        <p class="pd__tagline">
          Project Discontent is a volunteer organization that helps to spread the reach of causes for justice and equality
        </p>

        <div class="pd__cta red">
          Work with us
          <br/>
          ↓
        </div>
      </div>
    </section>

    <section id="services" className="section hero has-background-danger">
      <div class="pd__hero-text">
        <h4 class="barlow white header slant is-size-6-mobile">
          BUT WE ARE ALSO
        </h4>
        <h1 class="condensed purple header slant is-size-3-mobile">
          EMPOWERED
        </h1>
      </div>

      <p class="pd__tagline">
        We believe in the power of awareness and advocacy--and we want to help those organizations, initiatives, and movements that lack the resources to get the word out.
      </p>

      <br/>
      <br/>
      <br/>

      <div className="container">
        <div class="tile is-ancestor">

          <div class="tile is-parent is-6">
            <div class="tile is-child is-6">
              <strong class="purple header is-size-4 condensed">
                SERVICES
              </strong>
              <p class="purple subtitle is-size-6">
                We specialize in digital microcampaigns serving specific, impactful goals.
              </p>
            </div>
          </div>

          <div class="tile is-parent is-vertical is-3">
            <div class="tile is-child">
              <strong class="white is-size-6">WRITING</strong>
              <p class="purple subtitle is-size-6">
                Text text text about what we make
              </p>
            </div>

            <div class="tile is-child">
              <strong class="white is-size-6">DESIGN</strong>
              <p class="purple subtitle is-size-6">
                Text text text about what we make
              </p>
            </div>

            <div class="tile is-child">
              <strong class="white is-size-6">PHOTOGRAPHY</strong>
              <p class="purple subtitle is-size-6">
                Text text text about what we make
              </p>
            </div>
          </div>

          <div class="tile is-parent is-vertical is-3">
            <div class="tile is-child">
              <strong class="white is-size-6">VIDEO</strong>
              <p class="purple subtitle is-size-6">
                Text text text about what we make
              </p>
            </div>

            <div class="tile is-child">
              <strong class="white is-size-6">WEB</strong>
              <p class="purple subtitle is-size-6">
                Text text text about what we make
              </p>
            </div>
            <div class="tile is-child">
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>

        <div className="tile is-ancestor">
          <div class="tile is-parent is-6">
            <div class="tile is-child is-6">
              <strong class="purple header is-size-4 condensed">
                WE'RE FIRED UP ABOUT
              </strong>
            </div>
          </div>

          <div class="tile is-parent is-vertical is-3">
            <strong class="tile is-child white is-size-6">
              Police Accountability
            </strong>
            <strong class="tile is-child white is-size-6">
              Criminal Justice Reform
            </strong>
            <strong class="tile is-child white is-size-6">
              Environmental Justice
            </strong>
          </div>
          <div class="tile is-parent is-vertical is-3">
            <strong class="tile is-child white is-size-6">
              Education
            </strong>
            <strong class="tile is-child white is-size-6">
              Immigration
            </strong>
            <strong class="tile is-child white is-size-6">
              GOTV
            </strong>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </section>

    <section id="team" className="section hero has-background-white" style={{ height: "500vh"}}>
      <div class="pd__hero-text">
        <h1 class="condensed red header slant is-size-3-mobile">
          LET'S MAKE
        </h1>
        <h1 class="condensed red header slant is-size-3-mobile">
          A CHANGE
        </h1>
      </div>
    </section>


  </div>


export default App;
