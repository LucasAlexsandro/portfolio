import React from "react";
import * as C from "./Styles";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import Email from "../../assets/images/mail.png";
import Phone from "../../assets/images/smartphone.png";
import Location from "../../assets/images/location.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [info, setInfo] = useState("");
  const [alertError, setAlertError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || tel === "" || info === "") {
      setInterval(() => {
        setAlertError(false);
      }, 4000);
      setAlertError(true);
      return;
    }

    // Template de email
    const templateParams = {
      from_name: name,
      tel: tel,
      email: email,
      message: info,
    };

    // Config emailJS
    emailjs
      .send(
        "service_yq4b3vk",
        "template_p2udlw4",
        templateParams,
        "cnD_sRYqNff9J_szA"
      )
      .then(
        (response) => {
          setName("");
          setEmail("");
          setTel("");
          setInfo("");
          setAlertError(false);
          setInterval(() => {
            setAlertSuccess(false);
          }, 4000);
          setAlertSuccess(true);
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }

  return (
    <>
      <C.ContactContainer>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-9 box-container-form">
              <div className="contact-title">
                <span className="subtitle">Contate-me</span>
                <h1 className="mt-4">Vamos criar algo incrível juntos?</h1>
                <span className="mt-3 mw-50">Preencha todos os campos abaixo para que possamos te ajudar.</span>
              </div>
              <form className="w-100" onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Nome"
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
                  className="w-100 p-3 mt-3"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                ></textarea>
                <input type="submit" value="Enviar Agora" className="w-100 p-3 mt-3" />
                <div className="mt-3">
                  {alertError ? (
                    <>
                      <div class="alert alert-danger" role="alert">
                        Ops, Algo deu errado! Por favor, verifique se preencheu
                        todos os campos.
                      </div>
                    </>
                  ) : null}
                </div>
                {alertSuccess ? (
                  <div class="alert alert-success" role="alert">
                    Dados enviados com sucesso! Em breve estarei entrando em contato 😀
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </C.ContactContainer>
    </>
  );
}
