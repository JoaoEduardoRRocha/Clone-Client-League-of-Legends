import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <section className="section-container">
        <div className="section-container__login">
          <div className="section-container__auth">
            <svg
              width="63"
              height="30"
              viewBox="0 0 63 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6584 5.11577H8.63989C8.59969 4.80587 8.51719 4.52616 8.39239 4.27663C8.26759 4.02711 8.10259 3.8138 7.89739 3.63672C7.69209 3.45964 7.44859 3.32481 7.16689 3.23224C6.88919 3.13565 6.58129 3.08736 6.24329 3.08736C5.64359 3.08736 5.12639 3.23426 4.69179 3.52805C4.26109 3.82185 3.92909 4.24645 3.69569 4.80185C3.46629 5.35724 3.35159 6.02936 3.35159 6.81818C3.35159 7.6392 3.46829 8.32741 3.70169 8.88281C3.93919 9.4342 4.27119 9.8507 4.69779 10.1325C5.12839 10.4102 5.63749 10.549 6.22509 10.549C6.55519 10.549 6.85499 10.5067 7.12459 10.4222C7.39829 10.3377 7.63779 10.215 7.84299 10.054C8.05229 9.889 8.22339 9.6897 8.35619 9.4563C8.49299 9.2189 8.58759 8.95123 8.63989 8.65341L11.6584 8.67152C11.6061 9.2189 11.4471 9.7582 11.1815 10.2894C10.9199 10.8207 10.5597 11.3056 10.1009 11.7443C9.64199 12.179 9.08259 12.5251 8.42259 12.7827C7.76659 13.0402 7.01399 13.169 6.16479 13.169C5.04589 13.169 4.04379 12.9235 3.15839 12.4325C2.27699 11.9375 1.58069 11.2171 1.06959 10.2713C0.558488 9.3255 0.302887 8.17448 0.302887 6.81818C0.302887 5.45786 0.562488 4.30481 1.08169 3.35902C1.60089 2.41323 2.30309 1.69484 3.18859 1.20383C4.07399 0.712831 5.06609 0.467331 6.16479 0.467331C6.91339 0.467331 7.60559 0.571971 8.24149 0.781251C8.87739 0.986511 9.43679 1.28835 9.91969 1.68679C10.4027 2.0812 10.7951 2.56617 11.0969 3.14169C11.3988 3.71721 11.5859 4.37524 11.6584 5.11577ZM13.3683 13V0.636361H16.3566V10.5732H21.5001V13H13.3683ZM34.235 6.81818C34.235 8.1785 33.9734 9.3316 33.4502 10.2773C32.927 11.2231 32.2187 11.9415 31.3252 12.4325C30.4358 12.9235 29.4376 13.169 28.3309 13.169C27.2201 13.169 26.22 12.9215 25.3305 12.4265C24.4411 11.9315 23.7348 11.2131 23.2116 10.2713C22.6924 9.3255 22.4328 8.17448 22.4328 6.81818C22.4328 5.45786 22.6924 4.30481 23.2116 3.35902C23.7348 2.41323 24.4411 1.69484 25.3305 1.20383C26.22 0.712831 27.2201 0.467331 28.3309 0.467331C29.4376 0.467331 30.4358 0.712831 31.3252 1.20383C32.2187 1.69484 32.927 2.41323 33.4502 3.35902C33.9734 4.30481 34.235 5.45786 34.235 6.81818ZM31.1803 6.81818C31.1803 6.01326 31.0656 5.3331 30.8362 4.7777C30.6108 4.2223 30.2848 3.80173 29.8582 3.51598C29.4356 3.23023 28.9265 3.08736 28.3309 3.08736C27.7393 3.08736 27.2301 3.23023 26.8035 3.51598C26.3769 3.80173 26.0489 4.2223 25.8195 4.7777C25.5941 5.3331 25.4814 6.01326 25.4814 6.81818C25.4814 7.62311 25.5941 8.30327 25.8195 8.85866C26.0489 9.4141 26.3769 9.8346 26.8035 10.1204C27.2301 10.4061 27.7393 10.549 28.3309 10.549C28.9265 10.549 29.4356 10.4061 29.8582 10.1204C30.2848 9.8346 30.6108 9.4141 30.8362 8.85866C31.0656 8.30327 31.1803 7.62311 31.1803 6.81818ZM46.502 0.636361V13H43.9665L39.0464 5.86435H38.968V13H35.9797V0.636361H38.5514L43.4172 7.75994H43.5198V0.636361H46.502ZM48.381 13V0.636361H57.0018V3.06321H51.3693V5.59872H56.5611V8.0316H51.3693V10.5732H57.0018V13H48.381ZM8.54939 20.6751C8.48089 20.4215 8.38029 20.1982 8.24749 20.005C8.11469 19.8078 7.95169 19.6407 7.75849 19.5039C7.56529 19.3671 7.34399 19.2644 7.09449 19.196C6.84489 19.1236 6.57129 19.0874 6.27339 19.0874C5.67379 19.0874 5.15459 19.2322 4.71589 19.522C4.28119 19.8118 3.94519 20.2344 3.70769 20.7898C3.47029 21.3411 3.35159 22.0112 3.35159 22.8001C3.35159 23.5929 3.46629 24.2691 3.69569 24.8285C3.92509 25.3879 4.25709 25.8145 4.69179 26.1083C5.12639 26.4021 5.65359 26.549 6.27339 26.549C6.82079 26.549 7.28359 26.4605 7.66189 26.2834C8.04429 26.1023 8.33399 25.8467 8.53119 25.5167C8.72849 25.1867 8.82709 24.7983 8.82709 24.3516L9.38249 24.418H6.37609V22.2386H11.7067V23.8746C11.7067 24.9814 11.4712 25.9292 11.0004 26.718C10.5335 27.5069 9.88959 28.1126 9.06849 28.5352C8.25149 28.9577 7.31179 29.169 6.24929 29.169C5.07009 29.169 4.03369 28.9135 3.14029 28.4023C2.24679 27.8912 1.55049 27.1628 1.05149 26.217C0.552387 25.2672 0.302887 24.1403 0.302887 22.8363C0.302887 21.8221 0.453788 20.9226 0.755688 20.1378C1.05749 19.349 1.47809 18.6809 2.01739 18.1335C2.56069 17.5862 3.18859 17.1716 3.90089 16.8899C4.61729 16.6082 5.38799 16.4673 6.21309 16.4673C6.92949 16.4673 7.59549 16.57 8.21129 16.7752C8.83109 16.9805 9.37839 17.2702 9.85329 17.6445C10.3323 18.0188 10.7206 18.4635 11.0185 18.9787C11.3163 19.4938 11.5014 20.0593 11.5739 20.6751H8.54939ZM15.7605 29H12.5488L16.7203 16.6364H20.6987L24.8702 29H21.6586L18.7548 19.7514H18.6582L15.7605 29ZM15.3319 24.1342H22.0449V26.4041H15.3319V24.1342ZM26.2013 16.6364H29.902L33.0412 24.2912H33.1861L36.3253 16.6364H40.0259V29H37.1161V21.4055H37.0135L34.0433 28.9215H32.1839L29.2138 21.3633H29.1112V29H26.2013V16.6364ZM41.8898 29V16.6364H50.5106V19.0632H44.8781V21.5987H50.0699V24.0316H44.8781V26.5732H50.5106V29H41.8898ZM59.0649 20.343C59.0247 19.9003 58.8456 19.5562 58.5276 19.3107C58.2137 19.0612 57.7649 18.9364 57.1814 18.9364C56.795 18.9364 56.473 18.9867 56.2155 19.0874C55.9579 19.188 55.7647 19.3268 55.6359 19.5039C55.5071 19.677 55.4407 19.8762 55.4367 20.1016C55.4287 20.2867 55.4649 20.4497 55.5454 20.5906C55.6299 20.7314 55.7506 20.8562 55.9076 20.9648C56.0686 21.0695 56.2617 21.162 56.4871 21.2425C56.7125 21.323 56.9661 21.3935 57.2478 21.4538L58.3103 21.6953C58.922 21.8281 59.4613 22.0052 59.9282 22.2266C60.3991 22.4479 60.7935 22.7115 61.1114 23.0174C61.4334 23.3233 61.6769 23.6754 61.8419 24.0739C62.0069 24.4723 62.0914 24.919 62.0954 25.4141C62.0914 26.1948 61.8942 26.8649 61.5038 27.4244C61.1134 27.9838 60.552 28.4124 59.8195 28.7102C59.0911 29.008 58.2117 29.157 57.1814 29.157C56.147 29.157 55.2455 29.002 54.4768 28.6921C53.7081 28.3822 53.1105 27.9113 52.6839 27.2795C52.2573 26.6476 52.0379 25.8487 52.0258 24.8828H54.8873C54.9115 25.2812 55.0181 25.6133 55.2073 25.8789C55.3965 26.1445 55.656 26.3458 55.9861 26.4826C56.3201 26.6194 56.7065 26.6879 57.1452 26.6879C57.5476 26.6879 57.8897 26.6335 58.1714 26.5249C58.4572 26.4162 58.6765 26.2653 58.8295 26.0721C58.9824 25.8789 59.0609 25.6576 59.0649 25.408C59.0609 25.1746 58.9884 24.9754 58.8476 24.8104C58.7067 24.6413 58.4894 24.4964 58.1956 24.3757C57.9058 24.2509 57.5355 24.1362 57.0848 24.0316L55.7929 23.7298C54.7223 23.4843 53.8792 23.0878 53.2634 22.5405C52.6476 21.9891 52.3418 21.2446 52.3458 20.3068C52.3418 19.5421 52.547 18.872 52.9616 18.2965C53.3761 17.721 53.9496 17.2723 54.6821 16.9503C55.4146 16.6283 56.2497 16.4673 57.1874 16.4673C58.1453 16.4673 58.9764 16.6303 59.6807 16.9563C60.389 17.2783 60.9384 17.7311 61.3287 18.3146C61.7191 18.8982 61.9184 19.5743 61.9264 20.343H59.0649Z"
                fill="#EB002A"
              />
            </svg>

            <h1 className="section-container__sign-in">Sign in</h1>
            <input
              className="section-container__input-username"
              type="text"
              placeholder="USERNAME"
            />
            <input
              className="section-container__input-password"
              type="password"
              placeholder="PASSWORD"
            />
          </div>

          <form typeof="submit">
            <button className="section-container__btn-login">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="52" height="52" rx="16" fill="#F5F5F5" />
                <path
                  d="M36.3667 25.3666C36.2873 25.1621 36.1684 24.9752 36.0167 24.8166L27.6833 16.4833C27.5279 16.3279 27.3435 16.2047 27.1404 16.1206C26.9374 16.0365 26.7198 15.9932 26.5 15.9932C26.0562 15.9932 25.6305 16.1695 25.3167 16.4833C25.1613 16.6387 25.038 16.8232 24.9539 17.0262C24.8698 17.2293 24.8265 17.4469 24.8265 17.6667C24.8265 18.1105 25.0028 18.5361 25.3167 18.85L30.8167 24.3333H18.1667C17.7246 24.3333 17.3007 24.5089 16.9882 24.8215C16.6756 25.134 16.5 25.558 16.5 26C16.5 26.442 16.6756 26.8659 16.9882 27.1785C17.3007 27.4911 17.7246 27.6666 18.1667 27.6666H30.8167L25.3167 33.15C25.1605 33.3049 25.0365 33.4893 24.9518 33.6924C24.8672 33.8955 24.8237 34.1133 24.8237 34.3333C24.8237 34.5533 24.8672 34.7712 24.9518 34.9743C25.0365 35.1774 25.1605 35.3617 25.3167 35.5166C25.4716 35.6729 25.6559 35.7969 25.859 35.8815C26.0621 35.9661 26.28 36.0096 26.5 36.0096C26.72 36.0096 26.9379 35.9661 27.141 35.8815C27.3441 35.7969 27.5284 35.6729 27.6833 35.5166L36.0167 27.1833C36.1684 27.0248 36.2873 26.8379 36.3667 26.6333C36.5334 26.2275 36.5334 25.7724 36.3667 25.3666Z"
                  fill="#919191"
                />
              </svg>
            </button>
          </form>

          <div className="section-container__create-account">
            <p>CREATE ACCOUNT</p>
          </div>
          <p className="section-container__text">
            This app is made by João Eduardo and Matheus Mattana, two League
            fans who have no connection to the original product
          </p>
        </div>

        <div className="section-container__wallpeaper">p</div>
      </section>
    </>
  );
};

export default Login;
