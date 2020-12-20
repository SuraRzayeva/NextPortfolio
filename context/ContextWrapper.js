import { useState } from 'react'
import Context from './Context'

const ContextWrapper = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false)
  const [englishActive, setEnglishActive] = useState(true)

  return <Context.Provider value={{ menuActive, setMenuActive, englishActive, setEnglishActive }}>{children}</Context.Provider>
}

export default ContextWrapper
