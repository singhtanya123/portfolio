// import { Link,Router } from 'react-router-dom';

import { useState } from "react";

function Contact() {
  const [ping, setPing] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  const onSubmit = () => {
    if (ping.name === "" || ping.email === "" || ping.message === "") {
      window.alert(`"Empty please all the details`);
    } else setShow(!show);
    setTimeout(function () {
      setPing({
        name: "",
        email: "",
        message: "",
      });
    }, 5000);
  };
  return (
    <fieldset>
      <legend> Contact Me </legend>
      <div className="font padding">
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            // placeholder="Dumpling"
            required
            onChange={(e) => setPing({ ...ping, name: e.target.value })}
            value={ping.name}
          ></input>
        </div>
        <div>
          {" "}
          <label>Email : </label>
          <input
            type="email"
            name="email"
            // placeholder="dumpling@gmail.com"
            required
            onChange={(e) => setPing({ ...ping, email: e.target.value })}
            value={ping.email}
          ></input>
        </div>
        <div>
          <label>Message : </label>
          <input
            type="text"
            name="message"
            // placeholder="Hi I am Dumpling. Nice to see you here."
            required
            onChange={(e) => setPing({ ...ping, message: e.target.value })}
            value={ping.message}
          ></input>
        </div>
        <button
          onClick={() => {
            onSubmit();
          }}
          className="btn"
        >
          Send
        </button>
        {show && ping.name !== "" && (
          <div>
            <h5>Message Sent : </h5>
            <p>
              Hi I am {ping.name}. My email Id is {ping.email}. {ping.message}
            </p>
          </div>
        )}
      </div>
    </fieldset>
  );
}
export default Contact;
