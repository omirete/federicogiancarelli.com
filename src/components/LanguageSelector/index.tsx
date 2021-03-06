import { Dispatch, Fragment, SetStateAction, useContext } from "react";
import LangContext, { availableLanguages } from "contexts/LangContext";
import Lang from "lang/Lang";

export interface LanguageSelectorProps {
  setLanguage: Dispatch<SetStateAction<string>>;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
  const lang: Lang = useContext(LangContext);
  return (
    <div className="d-flex justify-content-center">
      <div
        className="btn-group ps-1"
        role="group"
        aria-label={lang.text.ariaLabel_language_selector}
      >
        {availableLanguages.map((avLang) => {
          const isActive = lang._code === avLang._code;
          return (
            <Fragment>
              <input
                type="radio"
                className="btn-check"
                id={`btn-lang-${avLang._code}`}
                autoComplete="off"
                checked={isActive}
                onClick={() => setLanguage(avLang._code)}
              />
              <label
                // className="btn btn-sm btn-outline-light border-0 rounded shadow-none me-1"
                className={`
                  transition-all
                  py-1 px-2 me-1
                  bg-white rounded
                  ${isActive ? "bg-opacity-50" : "bg-opacity-0"}
                  bg-opacity-75-hover text-dark-hover
                  text-white small
                  d-flex flex-row flex-nowrap align-items-center
                `}
                htmlFor={`btn-lang-${avLang._code}`}
              >
                <div className="h5 m-0 p-0">{avLang._flag}</div>
                <div className="ms-1 d-none d-sm-block">{avLang._name}</div>
              </label>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
