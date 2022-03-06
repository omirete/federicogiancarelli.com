import { ReactElement, useContext } from 'react'
import LangContext from 'contexts/LangContext'
import { ReactComponent as IconBooks } from 'assets/twemoji/books.svg'
import { ReactComponent as IconBoyLaptop } from 'assets/twemoji/boy_laptop.svg'
import { ReactComponent as IconSatellite } from 'assets/twemoji/satellite.svg'
import { ReactComponent as IconRocket } from 'assets/twemoji/rocket-non-official.svg'
import { ReactComponent as IconFountain } from 'assets/twemoji/fountain.svg'
import { ReactComponent as IconWorld } from 'assets/twemoji/world.svg'

const About: React.FC = () => {
  const lang = useContext(LangContext)

  const iconStyles = { width: '2ch' }
  const aboutContent = [
    { icon: <IconFountain style={iconStyles} />, text: lang.text.about_1 },
    { icon: <IconBooks style={iconStyles} />, text: lang.text.about_2 },
    { icon: <IconRocket style={iconStyles} />, text: lang.el.about_3 },
    { icon: <IconBoyLaptop style={iconStyles} />, text: lang.el.about_4 },
    { icon: <IconSatellite style={iconStyles} />, text: lang.text.about_5 },
    { icon: <IconWorld style={iconStyles} />, text: lang.text.about_6 },
  ]
  const iconClasses =
    'd-flex align-items-center justify-content-center h1 px-3 m-0 py-0 transition-all'
  const CardIcon: React.FC<{ icon: string | ReactElement }> = ({ icon }) => (
    <div className={iconClasses} style={{ minWidth: '15%' }}>
      {icon}
    </div>
  )
  return (
    <div className="mt-3">
      <h1 className="text-center text-light opacity-50">{lang.text.about_me}</h1>
      {aboutContent.map((card, i) => (
        <div className="d-flex flex-row flex-nowrap mt-5 pt-4 justify-content-center">
          {i % 2 === 0 && (
            <CardIcon icon={card.icon} />
          )}
          <div
            className={`
                transition-all
                border-${i % 2 !== 0 ? 'end' : 'start'}
                border-3 border-white
                rounded-${i % 2 !== 0 ? 'start' : 'end'}
                text-${i % 2 !== 0 ? 'end' : 'start'}
                px-2 py-1
                shadow-sm shadow-hover
                w-100
                bg-white bg-opacity-25
                text-white
              `}
          >
            {card.text}
          </div>
          {i % 2 !== 0 && (
            <CardIcon icon={card.icon} />
          )}
        </div>
      ))}
    </div>
  )
}

export default About
