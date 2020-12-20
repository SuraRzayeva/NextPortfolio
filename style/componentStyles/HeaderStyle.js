import Styled from 'styled-components'
import { Colors } from '../designSpecs'

const { black, white, detailColor2, shadow1, shadow2 } = Colors

export const HeaderStyle = Styled.div`

*:active, *:focus {
  outline: none;
}

z-index: 100;
position: absolute;
width: 100%;
padding-top: 3rem;
top: 0;
left: 0;
display: flex;
transition: 0.3s ease all;

.logo-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10rem;



    .title {
        text-transform: uppercase;
        font-weight: 700;
        padding: 0;
        margin: 0;
        color: ${black};
  }

    .profession {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.2rem;
        color: ${black};

        .line-break {
            display: none;
        }
  }
}

.nav-section {
  width: 50%;
  height: 100%;
  display: flex;
  padding-right: 10rem;
  align-items: center;
  justify-content: flex-end;

    button {
        width: 5rem;
        background: transparent;
        border-style: none;
        margin-right: 2rem;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 600;

        h4{
            position: relative;
            padding: 0;
            margin: 0;
            font-size: 1.6rem;
        }

        h4:after {
            content: '';
            width: 0;
            position: absolute;
            left: 0;
            bottom: -1rem;
            height: .3rem;
            background: ${detailColor2};
            transition: .2s ease all;
        }

        :hover h4:after {
            width: 100%;
        }
    }

    .burger-menu {
        width: 3rem;
        height: 3rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-bottom: 1rem;
        cursor: pointer;

        .line {
            width: 80%;
            height: .6rem;
            margin-top: .4rem;
            background: ${black};
            border-radius: 0.25rem;
        }
        .line2 {
            width: 50%;
        }
    }
}

//------------------------------------------------------------------------------------------------------ media queries

@media screen and (max-width: 450px) {
    .logo-section {
        padding-left: 5rem;

        .profession {

            .line-break {
                display: inline;
            
            }
        }
    }
    
    .nav-section {
        padding-right: 5rem;

        button {
            margin-right: 1rem;
        }
    }
}

`
