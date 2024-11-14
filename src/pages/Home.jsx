import {useState} from "react";
import AuthBg from "../assets/images/auth.jpg";
import {LoginForm} from "../components/Form";
// import FrenchBank from "../assets/icons/english_logo.svg";

export const Home = () => {
  const [language, setLanguage] = useState("en");
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="hidden md:flex md:w-[50vw] lg:w-[65vw] h-full">
        <img src={AuthBg} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="w-screen md:w-[50vw] lg:w-[35vw] overflow-y-auto">
        <div className="p-4 md:pt-8 md:px-10">
          <button
            onClick={() => {
              if (language === "en") {
                setLanguage("fr");
              } else {
                setLanguage("en");
              }
            }}
            className="underline text-[#1572c5] flex justify-self-end mb-4"
          >
            {language === "en" ? "Français" : "English"}
          </button>

          <div className="flex items-center">
            <div className="max-h-8 my-3 h-8 w-[125px]">
              <svg
                viewBox="0 0 408.6 106.3"
                preserveAspectRatio="xMinYMid meet"
              >
                {language === "en" ? (
                  <title>National Bank</title>
                ) : (
                  <title>Banque Nationale</title>
                )}
                <g>
                  {language === "en" ? (
                    <g>
                      <path
                        className="fill-[#e41c23]"
                        d="M73.3,25 C71.3,25.5 69.9,25.8 68.4,25.2 C67.3,24.8 66.4,23.5 65.6,22.4 L52,3.8 C51.2,2.7 50.3,1.4 49.2,1 C47.8,0.4 46.3,0.8 44.3,1.2 L0.5,13 L0.5,94.5 L44.4,82.8 C46.4,82.4 47.9,82 49.3,82.6 C50.4,83.1 51.3,84.3 52.1,85.4 L65.6,104 C66.4,105.1 67.3,106.3 68.4,106.8 C69.8,107.3 71.3,107 73.3,106.6 L117.1,94.9 L117.1,13.2 L73.3,25 Z"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="167 16.5 167 37.4 166.9 37.4 153.1 13.2 145.5 16.9 145.5 47.9 152.2 47.9 152.2 23.1 152.3 23.1 166.5 47.9 173.7 47.9 173.7 13.2"
                      ></polygon>
                      <path
                        className="fill-[#00324d]"
                        d="M197.9,13.2 L197.9,13.2 L187.8,18.1 L177.2,47.9 L184.8,47.9 L187.2,40.7 L200,40.7 L202.2,47.9 L210.1,47.9 L197.9,13.2 Z M189.2,34.7 L193.6,21 L193.7,21 L198,34.7 L189.2,34.7 Z"
                      ></path>
                      <path
                        className="fill-[#00324d]"
                        d="M339.7,13.2 L339.7,13.2 L329.6,18.1 L319,47.9 L326.6,47.9 L329,40.7 L341.8,40.7 L344,47.9 L351.9,47.9 L339.7,13.2 Z M330.9,34.7 L335.3,21 L335.4,21 L339.7,34.7 L330.9,34.7 Z"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="234.1 13.2 209.4 13.2 205.9 19.3 205.9 19.3 216.4 19.3 216.4 47.9 223.6 47.9 223.6 19.3 230.5 19.3"
                      ></polygon>
                      <polygon
                        className="fill-[#00324d]"
                        points="237 16.7 237 47.9 244.2 47.9 244.2 13.2 244.2 13.2"
                      ></polygon>
                      <path
                        className="fill-[#00324d]"
                        d="M265.7,12.3 C265.4,12.3 265,12.3 264.6,12.3 L252.6,18.2 C250.5,20.9 249,24.9 249,30.6 C249,46.9 261.1,48.9 265.7,48.9 C270.3,48.9 282.4,46.9 282.4,30.6 C282.3,14.2 270.2,12.3 265.7,12.3 Z M265.7,42.7 C261.8,42.7 256.3,40.3 256.3,30.6 C256.3,20.9 261.8,18.5 265.7,18.5 C269.6,18.5 275.1,20.9 275.1,30.6 C275.1,40.3 269.6,42.7 265.7,42.7 Z"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="308.6 16.5 308.6 37.4 308.5 37.4 294.7 13.2 287.1 16.9 287.1 47.9 293.9 47.9 293.9 23.1 294 23.1 308.1 47.9 315.4 47.9 315.4 13.2"
                      ></polygon>
                      <polygon
                        className="fill-[#00324d]"
                        points="380 41.6 362.7 41.6 362.7 13.2 355.5 16.7 355.5 47.9 376.4 47.9"
                      ></polygon>
                      <path
                        className="fill-[#00324d]"
                        d="M168.8,76 C170.2,75.3 173.1,73.9 173.1,68.9 C173.1,65.3 170.9,60 162.4,60 L152.8,60 L145.5,63.6 L145.5,94.7 L160.2,94.7 C167.3,94.7 169.2,93.5 171.2,91.6 C173,89.8 174.2,87.2 174.2,84.4 C174.1,81 173,77.6 168.8,76 Z M152.4,66 L160.7,66 C164,66 166,66.9 166,69.7 C166,72.5 163.7,73.6 160.9,73.6 L152.4,73.6 L152.4,66 L152.4,66 Z M161.3,88.7 L152.4,88.7 L152.4,79.4 L161.6,79.4 C164.2,79.4 166.8,80.6 166.8,83.6 C166.9,87.2 164.8,88.7 161.3,88.7 Z"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="232.5 63.3 232.5 84.2 232.4 84.2 218.6 60 211 63.8 211 94.7 217.8 94.7 217.8 70 217.9 70 232 94.7 239.3 94.7 239.3 60"
                      ></polygon>
                      <path
                        className="fill-[#00324d]"
                        d="M195.7,60 L195.7,60 L185.6,65 L175,94.7 L182.6,94.7 L185,87.5 L197.8,87.5 L200,94.7 L207.9,94.7 L195.7,60 Z M187,81.6 L191.4,67.9 L191.5,67.9 L195.8,81.6 L187,81.6 Z"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="275.2 60.1 263.9 62 252.6 74.2 252.6 60 245.3 63.6 245.3 94.7 252.6 94.7 252.6 83 256 79.5 266.7 94.7 276 94.7 261 74.2"
                      ></polygon>
                    </g>
                  ) : (
                    <g>
                      <path
                        className="fill-[#e41c23]"
                        d="M72.8,24.3c-2,0.5-3.4,0.8-4.9,0.2c-1.1-0.4-2-1.7-2.8-2.8L51.5,3.1c-0.8-1.1-1.7-2.3-2.8-2.8 c-1.5-0.6-2.9-0.2-4.9,0.2L0,12.3v81.6l43.9-11.7c2-0.4,3.5-0.8,4.9-0.2c1.1,0.5,2,1.7,2.8,2.8l13.5,18.6c0.8,1.1,1.7,2.3,2.8,2.8 c1.5,0.5,2.9,0.2,4.9-0.2L116.7,94V12.5L72.8,24.3z"
                      ></path>
                      <path
                        className="fill-[#00324d]"
                        d="M168.2,28.5c1.4-0.7,4.3-2.1,4.3-7.1c0-3.6-2.2-8.9-10.7-8.9h-9.6l-7.3,3.6v31.1h14.7c7.1,0,9-1.2,11-3.1 c1.8-1.8,3-4.4,3-7.2C173.6,33.5,172.5,30.1,168.2,28.5 M151.9,18.5h8.3c3.3,0,5.3,0.9,5.3,3.7c0,2.8-2.3,3.9-5.1,3.9h-8.5V18.5z M160.8,41.2h-8.9v-9.3h9.2c2.6,0,5.2,1.2,5.2,4.2C166.3,39.7,164.3,41.2,160.8,41.2"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="341.2,41.1 341.2,41.1 322,41.1 322,32.1 335.4,32.1 338.9,25.9 322,25.9 322,18.6 336.8,18.6 340.4,12.5 322.7,12.5 314.9,16.3 314.9,47.2 337.7,47.2"
                      ></polygon>
                      <path
                        className="fill-[#00324d]"
                        d="M273.2,42.2c2.1-2.7,3.6-6.7,3.6-12.4c0-16.3-12.1-18.3-16.7-18.3c-0.3,0-0.7,0-1.1,0l-11.9,5.8 c-2.1,2.7-3.6,6.7-3.6,12.4c0,16.3,12.1,18.3,16.7,18.3c2,0,5.6-0.4,8.9-2.3l4.1,3.9l3.8-3.9L273.2,42.2z M268,37.3l-3.7-3.4 l-3.7,3.9l3.5,3.3c-1.3,0.7-2.7,0.9-3.9,0.9c-3.9,0-9.4-2.4-9.4-12.1s5.5-12.1,9.4-12.1c3.9,0,9.4,2.4,9.4,12.1 C269.6,33.1,269,35.5,268,37.3"
                      ></path>
                      <path
                        className="fill-[#00324d]"
                        d="M302,16.1v19.3c0,4.2-2,6.6-7,6.6c-3.4,0-6.2-2.1-6.2-7V12.5h0l-7.4,3.6v19.4c0.1,3.5,0.8,6.3,2.7,8.4 c3.1,3.4,7.8,4.2,11,4.2c8.7,0,14.3-3.9,14.3-13V12.5h0L302,16.1z"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="232,15.8 232,36.7 231.9,36.7 218.1,12.5 210.5,16.2 210.5,47.2 217.2,47.2 217.2,22.5 217.3,22.5 231.5,47.2 238.7,47.2 238.7,12.5"
                      ></polygon>
                      <path
                        className="fill-[#00324d]"
                        d="M195.2,12.5L195.2,12.5l-10.1,4.9l-10.6,29.8h7.6l2.4-7.1h12.8l2.2,7.1h7.9L195.2,12.5z M186.5,34.1l4.4-13.7 h0.1l4.3,13.7H186.5z"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="408.6,87.9 408.6,87.9 389.4,87.9 389.4,78.9 402.7,78.9 406.3,72.8 389.4,72.8 389.4,65.5 404.2,65.5 407.8,59.3 390.1,59.3 382.3,63.2 382.3,94 405.1,94"
                      ></polygon>
                      <polygon
                        className="fill-[#00324d]"
                        points="166.4,62.6 166.4,83.5 166.3,83.5 152.6,59.3 144.9,63.1 144.9,94 151.7,94 151.7,69.3 151.8,69.3 166,94 173.2,94 173.2,59.3"
                      ></polygon>
                      <path
                        className="fill-[#00324d]"
                        d="M197.4,59.3L197.4,59.3l-10.1,4.9L176.7,94h7.6l2.4-7.2h12.8l2.2,7.2h7.9L197.4,59.3z M188.6,80.9l4.4-13.7 h0.1l4.3,13.7H188.6z"
                      ></path>
                      <path
                        className="fill-[#00324d]"
                        d="M339.1,59.3L339.1,59.3L329,64.3L318.4,94h7.6l2.4-7.2h12.8l2.2,7.2h7.9L339.1,59.3z M330.4,80.9l4.4-13.7h0.1l4.3,13.7H330.4z"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="233.5,59.3 208.9,59.3 205.3,65.4 205.3,65.5 215.8,65.5 215.8,94 223.1,94 223.1,65.5 230,65.5"
                      ></polygon>
                      <polygon
                        className="fill-[#00324d]"
                        points="236.4,62.9 236.4,94 243.7,94 243.7,59.3 243.7,59.3"
                      ></polygon>
                      <path
                        className="fill-[#00324d]"
                        d="M265.1,58.4c-0.3,0-0.7,0-1.1,0l-12,5.9c-2.1,2.7-3.6,6.7-3.6,12.4c0,16.3,12.1,18.3,16.7,18.3 c4.6,0,16.7-2,16.7-18.3C281.8,60.4,269.7,58.4,265.1,58.4 M265.1,88.8c-3.9,0-9.4-2.4-9.4-12.1c0-9.7,5.5-12.1,9.4-12.1 c3.9,0,9.4,2.4,9.4,12.1C274.5,86.4,269,88.8,265.1,88.8"
                      ></path>
                      <polygon
                        className="fill-[#00324d]"
                        points="308.1,62.6 308.1,83.5 308,83.5 294.2,59.3 286.6,63.1 286.6,94 293.3,94 293.3,69.3 293.4,69.3 307.6,94 314.8,94 314.8,59.3"
                      ></polygon>
                      <polygon
                        className="fill-[#00324d]"
                        points="379.4,87.8 362.2,87.8 362.2,59.3 354.9,62.9 354.9,94 375.8,94"
                      ></polygon>
                    </g>
                  )}
                </g>
              </svg>
            </div>

            <div className="w-[1px] h-8 bg-[#606773] mr-5 ml-4"></div>
            <p className="max-w-20 text-black">
              {language === "en"
                ? "Powering your ideas"
                : "Réalisons vos idées"}
            </p>
          </div>
        </div>

        <LoginForm language={language} />

        <div className="p-10 bg-[#eef6fb] border-t border-t-[#e1f1ff]">
          <h2
            className="text-xl font-medium font-gilroy mb-4"
            data-test="heading"
          >
            {language === "en"
              ? "First time signing in?"
              : "C’est votre première connexion?"}
          </h2>
          <p className="leading-[1.5] text-[#386c93] tracking-[.5px]">
            {" "}
            {language === "en"
              ? "Create your account to access all our online services with a single password. "
              : "Créez votre compte pour accéder à tous nos services en ligne avec un seul mot de passe."}
          </p>
          <button
            aria-label="Don’t have an account yet? Create your account to access all our online services with a single password."
            type="button"
            className="mt-4 border border-[#1572c5] bg-transparent text-[#1572c5] py-1 px-8 rounded-[1.25rem] min-h-[2.5rem] font-gilroy font-semibold"
            data-test="button"
          >
            {language === "en" ? "Create your account" : "Créer votre compte"}
          </button>
        </div>
      </div>
    </div>
  );
};
