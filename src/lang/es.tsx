import Lang from "./Lang";
import { ReactComponent as IconFlagSpain } from "assets/twemoji/flag_spain.svg";
import { ReactComponent as IconRocket } from "assets/twemoji/rocket-non-official.svg";

const es: Lang = {
  _code: "es",
  _xml_lang_code: "es-ES",
  _flag: <IconFlagSpain className="d-block" style={{ width: "1em" }} />,
  _name: "Español",
  text: {
    ariaLabel_language_selector: "Mira el sitio en español",
    profile_card_subtitle: "Emprendedor 🚀",
    profile_card_job_title: "Business Analyst en Kardex",
    scroll_down_to_see_more: "Desplázate hacia abajo para ver más",
    my_own_first_name: "Federico",
    my_own_last_name: "Giancarelli",
    my_own_full_name: "Federico Giancarelli",
    profile: "Perfil",
    about_me: "Acerca de mí",
    about_1:
      "Construyo mi felicidad a partir de mi familia, de los desafíos y de las cosas que aprendo.",
    about_2:
      "Constantemente busco incorporar habilidades nuevas y disfruto mucho de poder aplicarlas luego en mi trabajo y en mis proyectos.",
    about_5:
      "Vivimos en el futuro, por lo que la tecnología es una de mis herramientas principales. Con ella me abro caminos para lograr siempre mis objetivos.",
    about_6:
      "He vivido, estudiado y trabajado en Argentina, en Alemania, en Suiza y en España. Estas experiencias me enriquecieron de muchas formas, pero lo que más valoro es haber podido entrar en contacto con personas y culturas de todo el mundo. Eso solo ya me hizo una mejor persona.",
    // about_6_extra: 'Durante un año viví en Stuttgart, Alemania, en donde estudié y trabajé para MAHLE, una empresa de la industria automotriz y otro en Suiza (Zúrich), en donde estudié y trabajé',
    url_recording: "recordings/es.m4a",
    url_linkedin: "https://www.linkedin.com/in/fgiancarelli/?locale=es_ES",
    url_automatica: "https://automaticaconsultora.com/es",
    url_tuturno: "https://tuturno.com.ar",
    url_cv: "CV/Federico_Giancarelli_Español.pdf",
    download_my_cv: "Descarga mi CV",
    visit_website_automatica: "Visita el sitio de Automatica",
    visit_website_tuturno: "Visita el sitio de Tuturno",
    read_more_about_experience_germany:
      "Lee más acerca de mi tiempo en Alemania",
    lets_connect_in_linkedin: "Conectemos en Linkedin!",
    press_play_and_listen_to_me:
      "¡Toca el botón de reproducir para escucharme hablar!",
  },
  el: {
    profile_card_subtitle: (
      <span>
        Emprendedor <IconRocket style={{ width: "1em", height: "1em" }} />
      </span>
    ),
    view_sourcecode_in_github: (
      <p>
        Código disponible en{" "}
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
        Siempre hay una manera más simple de hacer las cosas. Por eso comencé{" "}
        <a
          href="https://automaticaconsultora.com/es"
          target="_blank"
          rel="noreferrer"
          className="link-dark"
        >
          Automatica
        </a>
        , una consultora de modernización y automatización.
      </span>
    ),
    about_4: (
      <span>
        Junto con mi hermano desarrollamos{" "}
        <a
          href="https://tuturno.com.ar"
          target="_blank"
          rel="noreferrer"
          className="link-dark"
        >
          Tuturno
        </a>
        , una plataforma web para gestionar reservas/citas en gimnasios,
        consultorios, peluquerías y mucho más!
      </span>
    ),
  },
};

export default es;
