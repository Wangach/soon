import React from "react";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btnValue, setBtnVal] = useState(<FontAwesomeIcon icon={faPaperPlane} />);

  let handleForm = (e) => {
    e.preventDefault();
    let url = `http://localhost:80/api/api.php`;
    let data = {
        clientName: name,
        clientEmail: email,
        clientMessage: message
      }
    axios.post(url, data)
    .then((response) => {
      if(response.data.includes('successfully')){
        alert('Message Has Been Sent Successfully!');
        setName("");
        setEmail("");
        setMessage("");
        setBtnVal(<FontAwesomeIcon icon={faPaperPlane} />);
      }else{
        alert('There Has Been An Error!');
        setBtnVal(<FontAwesomeIcon icon={faPaperPlane} />);
      }
    })
    .catch((err) => err)
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
            required
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
            required
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
        onClick={() => setBtnVal("Submitting...")}
          type="submit"
          className="bg-slate-900 text-sky-500 font-semibold p-1 rounded-sm mt-2 w-1/4 cursor-pointer"
        >
          {btnValue}
        </button>
      </form>
    </div>
  );
};

export default Form;
