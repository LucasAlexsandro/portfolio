import React from "react";
import * as C from "./Styles";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [info, setInfo] = useState("");
  const [alert, setAlert] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || tel === "" || info === "") {
      alert("Preencha todos os campos");
    }

    const templateParams = {
      from_name: name,
      tel: tel,
      email: email,
      message: info
    }

    emailjs.send("service_yq4b3vk", "template_p2udlw4", templateParams, "cnD_sRYqNff9J_szA")
    .then((response) => {
      alert("Email Enviado Com Sucesso")
      setName("")
      setEmail("")
      setTel("")
      setInfo("")
    }, (err) => {
      console.log("Error: ", err)
    })

  }

  return (
    <>
      <C.ContactContainer>
        <div className="container">
          <div className="row d-flex flex-wrap align-center justify-content-center">
            <div className="col-6">
              <form className="w-100" onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Nome"
                  required
                  className="w-100 p-3 mt-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Telefone"
                  className="w-100 p-3 mt-3"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-100 p-3 mt-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  rows="5"
                  placeholder="Informações"
                  required
                  className="w-100 p-3 mt-3"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                ></textarea>
                <input type="submit" className="w-100 p-3 mt-3" />
                {/* <div
                  className="alert alert-danger mt-5 active-alert"
                  role="alert"
                  active={alert}
                >
                  Algum dado está faltando para o envio de email! por favor
                  preencha todos os campos.
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </C.ContactContainer>
    </>
  );
}
