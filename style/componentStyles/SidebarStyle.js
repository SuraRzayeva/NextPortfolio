import Styled from 'styled-components'
import { Colors } from '../designSpecs'

const { detailColor2 } = Colors

export const SidebarStyle = Styled.div`

position: absolute;
right: 10rem;
text-align: right;
top: 50%;
transform: translateY(-50%);
z-index: 200;

ul {
    li {
        margin-bottom: 3rem;
        font-weight: 600;
        width: 1.7rem;
        position: relative;
        /* cursor: pointer; */

        img {
            width: 100%;
            transition: .3s ease all;
        }
    }

    li:after {
        content: '';
        width: 0;
        height: 0;
        border-radius: 50%;
        position: absolute;
        top: 20%;
        left:70%;
        opacity: 0;
        transform: translate(-50%,-50%);
        transition: .3s ease all;
        z-index: -1;
        display: none;
    }

    li:hover:after {
        width: 2.3rem;
        height: 2.3rem;
        border: 2px solid ${detailColor2};
        background: ${detailColor2};
        opacity: 1;
   
    }

    li:hover img {
        transform: scale(1.3);
    }
}

@media screen and (max-width: 1000px) {
    position: ${(props) => (props.homeActive ? 'fixed' : 'unset')};
    bottom: 0;
    top: unset;
    right: unset;
    bottom: 5rem;
    display: flex;
    justify-content: ${(props) => (props.homeActive ? 'flex-end' : 'flex-start')}
    width: 100vw;
    padding: 0 5rem;
    transform: unset;


    ul {
        display: flex;
        padding: 0;
        align-items: center;
        width: 35vw;
        justify-content: space-between;
        

        li {
            width: 2rem;
            margin: 0;
        }
    }
}

@media screen and (max-width: 450px) {
    bottom: 5rem;
    padding: 0 3rem;
    ul {
        width: 50vw;

        li {
            width: 1.7rem;
        }
    }
}

@media (pointer: coarse) {

ul {
    li:after {
        display: none;
    }
}
}

`
