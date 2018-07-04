import preact from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */

import Main from './components/Main/index.js';
import "./stylesheets/main.scss";

const mountNode = document.getElementById('root');
preact.render(<Main />, mountNode, mountNode.lastChild);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

console.log("LOADED")
