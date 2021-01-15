import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const BlogPostStyle = Styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
padding: 13rem 10rem;
padding-bottom: 5rem;
overflow-x: hidden;
opacity: ${(props) => (props.menuActive ? 0.3 : 1)};
overflow-x: hidden;

.back-btn {
    opacity: ${(props) => (props.loading == 0 ? 1 : 0)};
    button {
        background: transparent;
        padding: 0;
        font-weight: 700;
        font-size: 1.4rem;
        /* cursor: pointer; */
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
    opacity: ${(props) => (props.loading == 0 ? 1 : 0)};
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
        display: flex;
        flex-direction: column;
            p {
                font-size: 1.6rem;
                line-height: 2.4rem;
            }

            h1 {
                font-size: 2rem;
                line-height: 3rem;
            }

            img {
                width: 80%;
                display: inline;
                margin: 2rem 0;
                align-self: center;
            }
    }
         .back-top {      
             margin-top: 3rem;      
                button {
                
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
        .content {
            margin-top: 2rem;
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
        margin-top: 1rem;
        img {
            width: 100%;
        }
    }
    
    }
}
`
