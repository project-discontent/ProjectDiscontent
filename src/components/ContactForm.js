import preact from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */


const TextInput = ({ name, label, onChange }) =>
  <div class="field">
    <label class="white label is-size-7">{label}</label>
    <div class="control">
      <input
        class="input is-size-7 is-radiusless"
        name={name}
        onChange={onChange}
        type="text"
      />
    </div>
  </div>

const TextArea = ({ name, label, onChange }) =>
  <div class="field">
    <label class="white label is-size-7">{label}</label>
    <div class="control">
      <input
        class="textarea is-size-7 is-radiusless"
        name={name}
        onChange={onChange}
        type="textarea"
      />
    </div>
  </div>

class ContactForm extends preact.Component {
  state = {
    name: "",
    website: "",
    needs: "",
  }

  setField = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  submit = (e) => {
    e.preventDefault();
    const { name, website, needs } = this.state;
    const subject = encodeURIComponent(`Project Query | ${name} | ${website}`);
    window.location.href = `mailto:project.discontent@gmail.com?subject=${subject}&body=${needs}`;
  }

  render () {
    return (
      <form class="container" action="" onSubmit={this.onSubmit} style={{ maxWidth: 420 }}>
        <TextInput
          label="Full Name"
          name="name"
          onChange={this.setField}
         />
        <br/>
        <TextInput
          label="Organization's website (optional)"
          name="website"
          onChange={this.setField}
        />
        <br/>
        <TextArea
          label="Brief description of your need (optional)"
          name="needs"
          onChange={this.setField}
        />
        <br/>
        <div class="has-text-centered">
          <button
            class="is-danger has-text-dark button is-size-7"
            onClick={this.submit}
            type="submit"
          >
            Send →
          </button>
        </div>
      </form>
    )
  }
}


export default ContactForm;
