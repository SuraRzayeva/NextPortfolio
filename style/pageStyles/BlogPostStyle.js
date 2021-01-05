import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const BlogPostStyle = Styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
padding: 13rem 10rem;
overflow-x: hidden;
opacity: ${(props) => (props.menuActive ? 0.3 : 1)};

.back-btn {
    button {
        background: transparent;
        padding: 0;
        font-weight: 700;
        font-size: 1.4rem;
        cursor: pointer;
        position: relative;
        transition: .2s ease all;
        outline: none;
    }

        button:after {
            content: '';
            width: 0;
            position: absolute;
            left: 0;
            bottom: -.5rem;
            height: .2rem;
            background: ${Colors.detailColor2};
            transition: .2s ease all;
        }

        button:hover:after {
            width: 100%;
        }

}

.container {
    width: 70%;
    align-self: center;
    margin-top: 5rem;

    .date {
        margin: 0;
        padding: 0;

        h4 {
            font-size: 1.8rem;
            margin: 0;
        }
    }
    .title {
        h1 {
            font-size: 10rem;
            margin: 0;
            padding: 0;
            font-weight: 800;
        }
    }
    .content {
        margin-top: 5rem;
        width: 90%;
            p {
                font-size: 1.6rem;
                line-height: 2.4rem;
            }
    
    }
}

@media screen and (max-width: 850px) {
    padding: 13rem 5rem;


    .container {
        width: 100%;
        .title {
            h1 {
                font-size: 8rem;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    padding: 15rem 3rem;
    padding-bottom: 10rem;

    .back-btn {
        button {
            font-size: 1.6rem;
        }
    }

    .container {
        .title {
            h1 {
            font-size: 5rem;
        }
        }

    .content {
        width: 100%;
    }
    
    }
}
`
