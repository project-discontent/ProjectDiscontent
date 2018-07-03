import preact from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */


const TextInput = ({ label }) =>
  <div class="field">
    <label class="white label is-size-7">{label}</label>
    <div class="control">
      <input
        class="input is-size-7 is-radiusless"
        type="text"
      />
    </div>
  </div>

const TextArea = ({ label }) =>
  <div class="field">
    <label class="white label is-size-7">{label}</label>
    <div class="control">
      <input
        class="textarea is-size-7 is-radiusless"
        type="textarea"
      />
    </div>
  </div>

const ContactForm = () =>
  <form class="container" action="" style={{ maxWidth: 420 }}>
    <TextInput label="Full Name" />
    <br/>
    <TextInput label="Email" />
    <br/>
    <TextInput label="Organization's website (optional)" />
    <br/>
    <TextArea label="Brief description of your need (optional)"/>
    <br/>
    <div class="has-text-centered">
      <a class="is-danger has-text-dark button is-size-7 ">
        Send →
      </a>
    </div>
  </form>

export default ContactForm;
