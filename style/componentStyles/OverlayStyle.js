import Styled from 'styled-components'

export const OverlayStyle = Styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
left: 0;
background: rgba(0,0,0,.6);
z-index: 1000;
animation: fadeIn .2s ease forwards;
overflow: scroll;

.container {
    width: 60%;
    position: absolute;
    top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;



    img {
        width: 100%;
        height: auto;
        margin: 10rem 0;
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
