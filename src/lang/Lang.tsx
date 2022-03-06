import { ReactElement } from "react";

interface TextTranslations {
  [key: string]: string;
}

interface ElementTranslations {
  [key: string]: string | ReactElement;
}

type LangContent = {
  text: TextTranslations;
  el: ElementTranslations;
};

interface Lang extends LangContent {
  _code: string;
  _xml_lang_code: string;
  _flag: ReactElement;
  _name: string;
}

export default Lang;
