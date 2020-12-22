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
        cursor: pointer;

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
        top: 50%;
        left:50%;
        opacity: 0;
        transform: translate(-50%,-50%);
        transition: .3s ease all;
    }

    li:hover:after {
        width: 4rem;
        height: 4rem;
        border: 2px solid ${detailColor2};
        opacity: 1;
    }

    li:hover img {
        transform: scale(1.3);
    }
}

@media screen and (max-width: 850px) {
    position: unset;
    width: 100%;
    height: unset;
    padding: 0 10rem;
    transform: unset;


    ul {
        display: flex;
        padding: 0;
        align-items: center;
        

        li {
            width: 2.5rem;
            margin: 0;
            margin-right: 3rem;
        }
    }
}

`
