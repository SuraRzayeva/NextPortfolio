import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const ContactStyle = Styled.div`

opacity: ${(props) => (props.menuActive ? 0.3 : 1)};
width: 100vw;
padding: 10rem;

.title {
    
            font-size: 6rem;
            margin: 0;
            position: relative;
        

    :before {
            content: "Wanna work?";
            position: absolute;
            font-weight: 700;
            color: ${Colors.detailColor};
            opacity: .25;
            top: -30%;
            left: 15%;
        }

    :after {
            content: 'Happy to hear from you';
            position: absolute;
            font-weight: 700;
            opacity: .25;
            color: ${Colors.detailColor};
            bottom: -35%;
            left: 10%;
        }
}

.container {
    display: flex;
    width: 90%;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    align-items: center;

    .contact-text {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;

       .text {
           width: 95%;

        p {
            font-size: 1.4rem;
            line-height: 2rem;
        }

        ul {
            padding: 0;

            li {
                font-size: 1.4rem;
                margin-bottom: .5rem;
                user-select: all;

                span {
                    font-weight: 700;
                }
            }
        }
       }

        
    }

    .form {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .success-msg {
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            p {
                color: #4BB543;
                font-weight: 600;
                font-size: 1.2rem;
            }
        }

        .error-msg {
                position: absolute;
                top: -10%;
                left: 10%;

                p {
                    color: tomato;
                    font-weight: 600;
                    font-size: 1.2rem;
                }
            }

        form {
            display: flex;
            flex-direction: column;
            width: 80%;
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
                border-bottom:1px ${(props) => (props.error ? 'tomato' : Colors.black)} solid;
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
                border-bottom:1px ${(props) => (props.error ? 'tomato' : Colors.black)} solid;
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

        .form {
            .error-msg {
                top: 0;
                left: 1.3rem;
            }
        }
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
    padding: 10rem 5rem;;


    .title {
        :after {
            font-size: 4rem;
        }
    }
}

@media screen and (max-width: 450px) {
    padding: 15rem 3rem;



    .container {
        .contact-text {
            .text {
                width: 100%;
            }
        }
    }

    .title {
       font-size: 3rem;

       :after {
           font-size: 2rem;
       }
    }
}
`
