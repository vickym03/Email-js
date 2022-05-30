//website: https://dashboard.emailjs.com/sign-in
//user mail: vickymisrael03@gmail.com
//password: vicky123

import { init, send } from "emailjs-com";
import React, { useState } from "react";

function FormData() {
  const [data, setData] = useState({
    fromname: "",
    toname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log("data", data);
  };

  const save = (val) => {
    val.preventDefault();
    init("DNMOEEuAi90c9Ui4S");

    console.log("val", val);
    send(
      "service_mf06mp6", //service
      "template_0hd7ein", //templet
      {
        fromname: data.fromname,
        message: data.message,
        phone: data.phone,
        email: data.email,
        toname:data.tomail
      }
    )
      .then((res) => {
        console.log("SuccessFully sent", res.status, res.text);
      })
      .catch((err) => {
        console.log("FAILED", err);
      });
    setData({ fromname: "", toname: "", email: "", phone: "", message: "" });
  };

  //   const save = (val) => {
  //     val.preventDefault();
  //     console.log("val", val);
  //     send(
  //       "service_mf06mp6", //service
  //       "template_0hd7ein", //templet
  //       data,
  //       "DNMOEEuAi90c9Ui4S" //public key
  //     )
  //       .then((res) => {
  //         console.log("SuccessFully sent", res.status, res.text);
  //       })
  //       .catch((err) => {
  //         console.log("FAILED", err);
  //       });
  //     setData({ fromname: "", toname: "", email: "", message: "" });
  //   };
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="card col-lg-4">
            <div className="card-header bg-dark text-light">
              <h4> Email JS</h4>
            </div>
            <div className="card-body">
              <form onSubmit={save}>
                <input
                  type="text"
                  required
                  placeholder="From Name"
                  onChange={handleChange}
                  value={data.fromname}
                  name="fromname"
                />
                <input
                  type="text"
                  required
                  placeholder="To Name"
                  onChange={handleChange}
                  value={data.toname}
                  className="mt-2"
                  name="toname"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  onChange={handleChange}
                  value={data.email}
                  className="mt-2"
                  name="email"
                />
                <input
                  type="number"
                  required
                  placeholder="number"
                  onChange={handleChange}
                  value={data.phone}
                  name="phone"
                  className="mt-2"
                />
                <textarea
                  cols="25"
                  rows="3"
                  required
                  placeholder="message.."
                  onChange={handleChange}
                  value={data.message}
                  className="mt-2"
                  name="message"
                ></textarea>

                <div>
                  <button className="btn btn-success mt-4">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {JSON.stringify(data)}
    </div>
  );
}

export default FormData;
