import Styled from 'styled-components'

export const OverlayStyle = Styled.div`

width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
background: rgba(0,0,0,.6);
z-index: 1000;
animation: fadeIn .2s ease forwards;


.container {
    width: 70%;

    img {
        width: 100%;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}
`
