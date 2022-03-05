import SocialRow from 'components/SocialRow'
import { ReactComponent as Signature } from 'assets/svg/signature.svg'
import { useContext } from 'react'
import LangContext from 'contexts/LangContext'

const Footer: React.FC = () => {
  const lang = useContext(LangContext)
  return (
    <div className="text-decoration-none me-2 mt-3 text-center">
      <SocialRow
        className="ms-2 h3"
        iconClassName="fill-white opacity-50 opacity-100-hover transition-all"
      />
      <Signature className="mt-4 opacity-50" style={{ fill: '#ffffff' }} />
      <div className="mt-4 text-light opacity-50">{lang.el.view_sourcecode_in_github}</div>
    </div>
  )
}

export default Footer
