import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const SingleProjectStyle = Styled.div`

width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
padding: 13rem 10rem;
overflow-x: hidden;
opacity: ${(props) => (props.menuActive ? 0.3 : 1)};


.back-btn {
    opacity: ${(props) => (props.loading == 0 ? 1 : 0)};
    button {
        outline: none;
        background: transparent;
        padding: 0;
        font-weight: 700;
        font-size: 1.4rem;
        /* cursor: pointer; */
        position: relative;
        transition: .2s ease all;
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
    width: 90%;
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
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 3rem;
     }

     .description {
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         padding-right: 3rem;

         p {
            font-size: 1.6rem;
            line-height: 2.2rem;
            margin: .5rem 0;

                span {
                font-weight: 600;
             }
         }

         a {
            text-decoration: none;
        }

         h4 {
             font-size: 1.4rem;
             position: relative;
         }    

         h4::after {
            content: '';
            width: 0;
            position: absolute;
            left: 0;
            bottom: -.5rem;
            height: .2rem;
            background: ${Colors.detailColor2};
            transition: .2s ease all;
        }

        h4:hover:after {
            width: 100%;
        }
        
         .tools {
             margin-top: 1rem;
         }

     }
     .images {
         margin-top: 3rem;
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
