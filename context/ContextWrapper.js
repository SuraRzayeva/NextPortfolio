import { useState } from 'react'
import Context from './Context'

const ContextWrapper = ({ children, overlay, setOverlay, preLoad, setPreLoad }) => {
  const [menuActive, setMenuActive] = useState(false)
  const [englishActive, setEnglishActive] = useState(true)
  const [homeActive, setHomeActive] = useState(false)
  const [blogActive, setBlogActive] = useState(false)
  const [uiuxActivePage, setUiuxActivePage] = useState(1)
  const [graphicActivePage, setGraphicActivePage] = useState(1)
  const [blogActivePage, setBlogActivePage] = useState(0)
  const [projectsActivePage, setProjectsActivePage] = useState(1)

  return (
    <Context.Provider
      value={{
        menuActive,
        setMenuActive,
        englishActive,
        setEnglishActive,
        homeActive,
        setHomeActive,
        uiuxActivePage,
        setUiuxActivePage,
        graphicActivePage,
        setGraphicActivePage,
        blogActivePage,
        setBlogActivePage,
        projectsActivePage,
        setProjectsActivePage,
        overlay,
        setOverlay,
        blogActive,
        setBlogActive,
        preLoad,
        setPreLoad,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextWrapper
