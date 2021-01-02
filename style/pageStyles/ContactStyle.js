import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const ContactStyle = Styled.div`

opacity: ${(props) => (props.menuActive ? 0.3 : 1)};
width: 100vw;
height: 95vh;
padding: 15rem 10rem 1rem 10rem;


.container {
    display: flex;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8rem;

    .contact-text {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;

       .text {
           width: 80%;
        h1 {
            font-size: 11rem;
            margin: 0;
        }

        p {
            font-size: 1.4rem;
            line-height: 2rem;
        }
       }

        
    }

    .form {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        form {
            display: flex;
            flex-direction: column;
            width: 85%;
            justify-content: flex-end;
            
            .button {
                display: flex;
                justify-content: flex-end;
                padding: 2rem 0 0 0;
            }

            input {
                height: 4rem;
                margin-bottom: 1rem;
                border-style: none;
                background: transparent;
                border-bottom: 1px ${Colors.black} solid;
                border-left: .3rem transparent solid;
                outline: none;
                color: ${Colors.black};
                font-family: 'Montserrat', sans-serif;
                transition: .2s ease all;
                padding: 1rem;
            }

            input::placeholder, textarea::placeholder {
                color: ${Colors.blackOpa};
            }

            textarea {
                border-style: none;
                background: transparent;
                border-bottom:1px ${Colors.black} solid;
                border-left: .3rem transparent solid;
                outline: none;
                color: ${Colors.black};
                font-family: 'Montserrat', sans-serif;
                resize: none;
                padding: 1rem;
                transition: .2s ease all;
            }
            
            input:focus, input:active, textarea:focus, textarea:active {
                border-bottom: 1px transparent solid;
                border-left: 1rem ${Colors.detailColor2} solid;
            }

        }
    }
}

@media screen and (max-width: 1200px) {


    .container {
        flex-direction: column;
        width: 100%;
        .contact-text {
            width: 100%;
            height: 50%;
        }

        .form {
            width: 100%;
            height: 40%;
            padding: 0;
            padding-top: 5rem;
            justify-content: flex-start;
        }
    }
}

@media screen and (max-width: 850px) {
    padding: 5rem 5rem 0 5rem;
    height: 90vh;
}

@media screen and (max-width: 450px) {
    padding: 10rem 3rem;
    height: unset;
}
`
