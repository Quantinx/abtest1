import { useRef } from "react";

export default function NewsletterForm({ version }) {
  const emailRef = useRef();
  function onClick(e) {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      isTestContent: version,
    };
    console.log(payload);
  }

  return (
    <>
      <h3>Sign up for our Newsletter!!</h3>
      <form>
        <label>
          Email: <input type="text" ref={emailRef}></input>
        </label>
        <button type="submit" onClick={onClick}>
          Sign up!
        </button>
      </form>
    </>
  );
}
