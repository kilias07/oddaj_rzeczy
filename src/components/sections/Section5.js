import decoration from "../../assets/images/Decoration.svg";
import { useState } from "react";

const dummyData = {
  name: "Kamil",
  email: "zbignieJson@gmail.com",
  message:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eum incidunt, quod alias unde autem adipisci iusto vel nihil perspiciatis quas beatae voluptatibus facilis aliquid magnam consectetur provident facere nisi.",
};

const Section5 = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isValidated, setIsValidated] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sendSuccessful, setSendSuccessful] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // const validate = () => {
  //   const { name, email, message } = contactForm;
  //   name.length > 4 &&
  //     setIsValidated((prevState) => ({ ...prevState, name: true }));
  //   email.length > 4
  //     ? setIsValidated((prevState) => ({ ...prevState, email: true }))
  //     : setIsValidated((prevState) => ({ ...prevState, email: false }));
  //   message.length > 10 &&
  //     setIsValidated((prevState) => ({ ...prevState, message: true }));
  // };
  const sendEmail = async (valiatedData) => {
    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(valiatedData),
        }
      );

      if (response.ok) {
        setContactForm(()=> ({name: "", email: "", message: ""}))
        return setSendSuccessful(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const formHandler = (e) => {
    e.preventDefault();
    // validate();
    // if (isValidated.name && isValidated.email && isValidated.message)
    sendEmail(dummyData);
  };

  return (
    <div id="kontakt" className="contact">
      <div className="contact__left"></div>
      <div className="contact__right">
        <h1>Skontaktuj się z nami</h1>
        <img src={decoration} alt="decoration"></img>
        <div className="succes">
          {sendSuccessful ? (
            <>
              <span>Wiadomość została wysłana!</span>
              <span>Wkrótce się skontakujemy</span>
            </>
          ) : null}
        </div>
        <form className="contact__form">
          <div>
            <label>
              Wpisz swoje imię
              <input
                name="name"
                type="text"
                value={contactForm.name}
                placeholder="Twoje imię"
                onChange={changeHandler}
              />
              {isValidated.name === false && (
                <p style={{ color: "red" }}>Podane imię jest nieprawdłowe! </p>
              )}
            </label>
            <label>
              Wpisz swój email
              <input
                name="email"
                type="email"
                value={contactForm.email}
                placeholder="Twój email"
                onChange={changeHandler}
              />
              {isValidated.email === false && (
                <p style={{ color: "red" }}>
                  Podany email jest nieprawidłowy!{" "}
                </p>
              )}
            </label>
          </div>
          <label>
            Wpisz swoją wiadomość
            <textarea
              name="message"
              id=""
              rows="10"
              value={contactForm.message}
              onChange={changeHandler}
            ></textarea>
            {isValidated.message === false && (
              <p style={{ color: "red" }}>
                Wiadomość musi mieć conajmniej 120 znaków!
              </p>
            )}
          </label>
          <div>
            <button type="submit" value="Wyślij" onClick={formHandler} >
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section5;
