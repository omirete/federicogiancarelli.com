import { useContext } from "react";
import AudioPlayer from "components/AudioPlayer";
import LangContext from "contexts/LangContext";
import { ReactComponent as SignatureLine } from "assets/svg/signature_line.svg";
import { ReactComponent as IconChevronCompactDown } from "assets/icons/chevron_compact_down.svg";
import SocialRow from "components/SocialRow";
import profile_picture from "assets/img/profile.png";

const Header: React.FC = () => {
  const lang = useContext(LangContext);
  return (
    <div className="mt-4 d-flex flex-column flex-fill">
      <AudioPlayer
        title={lang.text.press_play_and_listen_to_me}
        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        className="text-white bg-white bg-opacity-25 rounded w-100 mt-4"
      >
        <div className="d-flex flex-row align-items-center">
          <img
            src={profile_picture}
            alt="perfil"
            // width="100px"
            height="100px"
            className="rounded shadow-sm"
          />
          <div className="ms-2 flex-fill">
            <h5 className="mb-0 d-flex flex-row flex-nowrap align-items-center">
              {lang.text.my_own_full_name}
            </h5>
            <h6 className="mb-1">{lang.el.profile_card_subtitle}</h6>
            <p className="mb-0">{lang.text.profile_card_job_title}</p>
          </div>
        </div>
      </AudioPlayer>
      <div className="flex-fill d-flex flex-column justify-content-center">
        <SignatureLine
          className="w-100 mt-5 text-center align-center mt-3 fill-white opacity-75"
          style={{ height: "2.5ch" }}
        />
        <SocialRow className="h3 text-decoration-none ms-2 me-2 mt-3 text-center" />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4 mb-5 pb-5 mb-md-3 pb-md-3">
        <div className="text-light opacity-75 text-center">
          {lang.text.scroll_down_to_see_more}
        </div>
        <IconChevronCompactDown
          className="d-block fill-light opacity-50 h1"
          style={{ width: "1em", height: "1em" }}
        />
      </div>
    </div>
  );
};

export default Header;
