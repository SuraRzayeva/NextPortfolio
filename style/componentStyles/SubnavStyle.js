import Styled from 'styled-components'
import { Colors } from '../designSpecs'

const { detailColor2 } = Colors

export const SubnavStyle = Styled.div`

width: 100%;
margin-top: 15rem;
padding: 0 10rem;

ul {
    display: flex;
    padding: 0;
    
    li {
        margin-right: 10rem;
        font-size: 1.3rem;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        transition: .2s ease all;
    }

    li:after {
        content: '';
        width: 0;
        position: absolute;
        left: 0;
        bottom: -.5rem;
        height: .2rem;
        background: ${detailColor2};
        transition: .2s ease all;
    }

    li:hover:after {
        width: 100%;
    }
}

@media screen and (max-width: 850px) {
   

    ul {
        width: 100%;
        justify-content: space-between;
        li {
            margin: 0;
            font-size: 1rem;
            span {
                display: none;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    padding:0 5rem;
}

@media screen and (max-width: 350px) {
    padding:0 2rem;
}
`
