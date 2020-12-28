import Styled from 'styled-components'

export const OverlayStyle = Styled.div`

width: 100vw;
height: 100vh;
position: absolute;
left: 0;
top: 0;
background: rgba(0,0,0,.6);
z-index: 1000;
animation: fadeIn .2s ease forwards;
overflow-y: scroll;

.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    .container {

    width: 140rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rem 0;
    position: relative;

    img {
        width: 80%;
    }
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
