import { createGlobalStyle } from 'styled-components'
import { Colors } from './designSpecs'

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    list-style: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: ${Colors.black};
    cursor: none;
}

html {
    font-size: 62.5%;
}

body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
    background-color: ${Colors.white};
    overflow-x: hidden;
    overflow-y: ${(props) => (props.overlay ? 'hidden' : 'scroll')};
    user-select: none;
}

button {
    border-style: none;
    font-family: 'Montserrat', sans-serif;
    color: ${Colors.black};
}

img {
    pointer-events: none;
}

@media screen and (min-width: 1800px) {
    html {
        font-size: 70%;
    }
}


@media screen and (max-width: 1300px) {
    
    html {
        font-size: 59%;
    }
}

@media screen and (max-width: 850px) {
    
    html {
        font-size: 55%;
    }
}

@media screen and (max-width: 450px) {
    
    html {
        font-size: 50%;
    }
}
`

export default GlobalStyle
