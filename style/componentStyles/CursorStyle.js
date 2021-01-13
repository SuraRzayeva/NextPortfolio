import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const CursorStyle = Styled.div`
width: 4rem;
height: 4rem;
border: 2px solid ${Colors.black};
background: transparent;
border-radius: 50%;
position: absolute;
z-index: 3000;
pointer-events: none;
transform: translate(-50%, -50%);
transition: width .2s, height .2s;

.dot-wrapper {
    width: 100%;
    height: 100%;
    background: transparent;
    position: relative;
}

.dot {

    width: 2rem;
    height: 2rem;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}



.animated {
    border: 3px solid ${Colors.detailColor2};
    animation: cursorAnim .5s forwards;
}



@keyframes cursorAnim {
    0% {
        width: 2rem;
        height: 2rem;
    } 100% {
       width: 10rem;
       height: 10rem;
       opacity: 0;
    } 
}

@media (pointer: coarse) {
    border: unset;
}
`
