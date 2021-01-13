import { CursorStyle } from '../../style/componentStyles/CursorStyle'
import { useEffect, useRef } from 'react'

const Cursor = () => {
  const cursorRef = useRef()

  useEffect(() => {
    document.addEventListener('click', () => {
      const cursor = document.querySelector('.dot')
      cursor.classList.add('animated')
      setTimeout(() => {
        cursor.classList.remove('animated')
      }, 500)
    })

    document.addEventListener('mousedown', () => {
      cursorRef.current.style.width = '1rem'
      cursorRef.current.style.height = '1rem'
    })

    document.addEventListener('mouseup', () => {
      cursorRef.current.style.width = '4rem'
      cursorRef.current.style.height = '4rem'
    })

    document.addEventListener('mousemove', (event) => {
      const mouseX = event.pageX
      const mouseY = event.pageY
      cursorRef.current.style.top = `${mouseY}px`
      cursorRef.current.style.left = `${mouseX}px`
    })
  }, [])

  return (
    <CursorStyle ref={cursorRef} className="ref-div">
      <div className="dot-wrapper">
        <div className="dot"></div>
      </div>
    </CursorStyle>
  )
}

export default Cursor
