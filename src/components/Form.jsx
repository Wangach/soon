import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let handleForm = (e) => {
    e.preventDefault();
    let url = `./backend/api.php`;
    let data = {
      clientName: name,
      clientEmail: email,
      clientMessage: message
    }
    let options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data)
    }

    fetch(url, options)
    .then(res => res.text())
    .then((data) => {
      console.log(data);
    })
    // console.log(
    //   `Your Name is ${name}, your email address is ${email} and you ave sent me a message saying ${message}`
    // );
  };

  return (
    <div className="absolute w-full translate-y-1/4">
      <div className="text-gray-300 mt-0 mx-auto mb-0 bg-selection p-4 w-6/12 rounded-md">
        <h2 className="text-center font-bold uppercase salsa">Contact Form</h2>
        <p className="text-center salsa">Fill in all the fields</p>
      </div>
      <form
        action="./backend/api.php"
        onSubmit={handleForm}
        className="w-6/12 mt-0 mx-auto mb-3 border rounded-sm border-gray-950 p-8 bg-selection text-center myForm"
      >
        <div className="">
          <label className="text-gray-300 block text-center font-bold salsa">
            Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full block rounded-md p-1"
            placeholder="John Doe"
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="text-gray-300 block text-center font-bold salsa">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full block rounded-md p-1"
            placeholder="someone@example.com"
            value={email}
          />
        </div>
        <div className="form-group">
          <label className="text-gray-300 block text-center font-bold salsa">
            Your Message
          </label>
          <textarea
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full block rounded-md p-2"
            placeholder="Say Something..."
            value={message}
          />
        </div>
        <button
          type="submit"
          className="bg-slate-900 text-white font-semibold p-1 rounded-sm mt-2 w-1/4 cursor-pointer"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default Form;
