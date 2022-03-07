import Lang from "./Lang";
import { ReactComponent as IconFlagUK } from "assets/twemoji/flag_uk.svg";
import { ReactComponent as IconRocket } from "assets/twemoji/rocket-non-official.svg";

const en: Lang = {
  _code: "en",
  _xml_lang_code: "en-US",
  _flag: <IconFlagUK className="d-block" style={{ width: "1em" }} />,
  _name: "English",
  text: {
    ariaLabel_language_selector: "See site in english",
    profile_card_subtitle: "Entrepreneur 🚀",
    profile_card_job_title: "Business Analyst at Kardex",
    scroll_down_to_see_more: "Scroll down to see more",
    my_own_first_name: "Federico",
    my_own_last_name: "Giancarelli",
    my_own_full_name: "Federico Giancarelli",
    profile: "Profile",
    about_me: "About me",
    about_1:
      "My happiness is built upon my family, the challenges I'm presented with and the things I learn.",
    about_2:
      "I'm constantly seeking to incorporate new skills and I am forever thrilled when I get to use them at work and in my projects.",
    about_5:
      "We live in the future, and that is why technology is one of my main tools. With it I create paths that always lead me to acomplish my goals.",
    about_6:
      "I have lived, studied and worked in Argentina, Germany, Switzerland and Spain. These experiences have been absolutely enriching for me in plenty of ways, but the thing I value the most is having been able to get in touch with people and cultures from around the world. This alone has made me a better person.",
    // about_6_extra: 'Durante un año viví en Stuttgart, Alemania, en donde estudié y trabajé para MAHLE, una empresa de la industria automotriz y otro en Suiza (Zúrich), en donde estudié y trabajé',
    url_recording: "recordings/en.m4a",
    url_linkedin: "https://www.linkedin.com/in/fgiancarelli/?locale=en_US",
    url_automatica: "https://automaticaconsultora.com/en",
    url_tuturno: "https://tuturno.com.ar",
    url_cv: "CV/Federico_Giancarelli_English.pdf",
    download_my_cv: "Download my CV",
    visit_website_automatica: "Visit Automatica's website",
    visit_website_tuturno: "Visit Tuturno's website",
    read_more_about_experience_germany: "Read more about my time in Germany",
    lets_connect_in_linkedin: "Let's connect in LinkedIn!",
    press_play_and_listen_to_me:
      "Press the play button and listen to my voice!",
  },
  el: {
    profile_card_subtitle: <span>Entrepreneur <IconRocket style={{width: '1em', height: '1em'}} /></span>,
    view_sourcecode_in_github: (
      <p>
        Source code available in{" "}
        <a
          href="https://github.com/omirete/federicogiancarelli.com"
          target="_blank"
          rel="noreferrer"
          className="link-dark"
        >
          <b>GitHub</b>
        </a>
        !
      </p>
    ),
    about_3: (
      <span>
        There is always a simpler way of doing things. That is why I started{" "}
        <a
          href="https://automaticaconsultora.com"
          target="_blank"
          rel="noreferrer"
          className="link-dark"
        >
          Automatica
        </a>
        , a consulting company for modernization and automation.
      </span>
    ),
    about_4: (
      <span>
        Together with my brother we have developed{" "}
        <a
          href="https://tuturno.com.ar"
          target="_blank"
          rel="noreferrer"
          className="link-dark"
        >
          Tuturno
        </a>
        , a web platform for managing bookings/appointments for the gym, health
        centers, hair salons and much more!
      </span>
    ),
  },
};

export default en;
