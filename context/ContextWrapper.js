import { useState } from 'react'
import Context from './Context'

const ContextWrapper = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false)
  const [englishActive, setEnglishActive] = useState(true)
  const [homeActive, setHomeActive] = useState(false)
  const [uiuxActivePage, setUiuxActivePage] = useState(1)
  const [graphicActivePage, setGraphicActivePage] = useState(1)
  const [blogActivePage, setBlogActivePage] = useState(1)
  const [projectsActivePage, setProjectsActivePage] = useState(1)
  const [overlay, setOverlay] = useState({
    status: false,
    data: '',
  })

  return (
    <Context.Provider value={{ menuActive, setMenuActive, englishActive, setEnglishActive, homeActive, setHomeActive, uiuxActivePage, setUiuxActivePage, graphicActivePage, setGraphicActivePage, blogActivePage, setBlogActivePage, projectsActivePage, setProjectsActivePage, overlay, setOverlay }}>
      {children}
    </Context.Provider>
  )
}

export default ContextWrapper
