import "../css/form.css";

function Form() {
  return (
    <>
      <section className="form-section">
        <h1>Send us a message</h1>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" placeholder="Full Name" name="fname" required />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
          <input type="submit" value="Send" />
        </form>
      </section>
    </>
  );
}

export default Form;
