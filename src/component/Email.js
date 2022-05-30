
//website: https://dashboard.emailjs.com/sign-in
//user mail: vickymisrael03@gmail.com
//password: vicky123


import { send, init } from "emailjs-com";

const serviceID = "service_mf06mp6";
const templeteID = "template_0hd7ein";
const userID = "user_DNMOEEuAi90c9Ui4S";

const Email = ({ content }) => {
  init(userID);

  const sendData = {
    fromname: content.from_name,
    toname: content.to_name,
    email: content.to_email,
    phone:content.phone,
    message: content.message,

  };

  send(serviceID, templeteID, sendData)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export default {Email};
