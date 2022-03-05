import React from 'react'
import en from 'lang/en'
import es from 'lang/es'
import de from 'lang/de'
import Lang from 'lang/Lang'

const LangContext = React.createContext(en)

export const availableLanguages: Array<Lang> = [en, es, de]

export default LangContext
