import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const MainButtonStyle = Styled.button`

font-size: 1.4rem;
font-weight: 700;
color: ${Colors.black};
background: transparent;
padding: 0;
position: relative;
transition: .2s ease all;
/* cursor: pointer; */
outline: none;

:after {
    content: '';
    width: 0;
    position: absolute;
    left: 0;
    bottom: -.5rem;
    height: .2rem;
    background: ${Colors.detailColor2};
    transition: .2s ease all;
}

:hover:after {
    width: 100%;
}

`
