import { useContext } from 'react'
import ActionButton from 'components/ActionButton'
import LangContext from 'contexts/LangContext'
import {ReactComponent as IconDownload} from 'assets/icons/download.svg'
// import {ReactComponent as IconBoxArrowRight} from 'assets/icons/box_arrow_right.svg'
import {ReactComponent as IconAutomatica} from 'assets/icons/logo_automatica.svg'
import {ReactComponent as IconTuturno} from 'assets/icons/logo_tuturno.svg'
import {ReactComponent as IconBook} from 'assets/icons/book.svg'
import {ReactComponent as IconLinkedin} from 'assets/icons/linkedin.svg'

const ActionButtons: React.FC = () => {
  const lang = useContext(LangContext)
  const btnClasses = "btn btn-dark border-0 bg-white bg-opacity-25 bg-opacity-75-hover text-dark-hover text-white mb-3 shadow-sm fill-light fill-dark-hover"
  const iconClasses = 'fill-inherit transition-all'
  return (
    <div className="d-flex flex-column mt-4">
      <ActionButton
        href={lang.text.url_cv}
        download={lang.text.url_cv}
        className={btnClasses}
        text={lang.text.download_my_cv}
        icon={<IconDownload className={iconClasses} />}
        role="button"
        target="_blank"
      />
      <ActionButton
        href={lang.text.url_linkedin}
        className={btnClasses}
        text={lang.text.lets_connect_in_linkedin}
        icon={<IconLinkedin className={iconClasses} />}
        role="button"
        target="_blank"
      />
      <ActionButton
        href={lang.text.url_automatica}
        className={btnClasses}
        text={lang.text.visit_website_automatica}
        icon={<IconAutomatica className={iconClasses} />}
        role="button"
        target="_blank"
      />
      <ActionButton
        href={lang.text.url_tuturno}
        className={btnClasses}
        text={lang.text.visit_website_tuturno}
        icon={<IconTuturno className={iconClasses} />}
        role="button"
        target="_blank"
      />
      <ActionButton
        href="https://www.facebook.com/media/set/?set=a.1283579088452718.1073741836.779742635503035"
        className={btnClasses}
        text={lang.text.read_more_about_experience_germany}
        icon={<IconBook className={iconClasses} />}
        role="button"
        target="_blank"
      />
    </div>
  )
}

export default ActionButtons
