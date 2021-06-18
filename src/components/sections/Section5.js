import decoration from "../../assets/images/Decoration.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Section5 = () => {
  const [sendSuccessful, setSendSuccessful] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
        reset({ name: "", email: "", message: "" });
        return setSendSuccessful(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    sendEmail(data);
  };
  const test = () => {
    console.log(errors.email && errors.email?.type)
  }

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
        <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              Wpisz swoje imię
              <input
                {...register("name", {
                  required: true,
                  maxLength: 30,
                  minLength: 4,
                })}
                placeholder="Twoje imię"
                className={errors.name?.type && "error"}
              />
              {errors.name && <span>Podane imię jest nieprawidłowe!</span>}
            </label>
            <label>
              Wpisz swój email
              <input
                className={errors.email?.type && "error"}
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                placeholder="Twój email"
              />
              {errors.email && <span>Podany email jest nieprawidłowy</span>}
            </label>
          </div>
          <label>
            Wpisz swoją wiadomość
            <textarea
              className={errors.message?.type && "error"}
              {...register("message", { required: true, minLength: 120 })}
            />
            {errors.message && (
              <span>Wiadomość musi mieć conajmniej 120 znaków!</span>
            )}
          </label>
          <div>
            <button type="submit" onClick={test}>Wyślij</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section5;
