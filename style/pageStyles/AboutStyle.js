import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const AboutStyle = Styled.div`

opacity: ${(props) => (props.menuActive ? 0.3 : 1)};

width: 100vw;
padding: 15rem 10rem;

.container {
    display: flex;
    width: 90%;
    opacity: ${(props) => (props.loading == 0 ? 1 : 0)};

    .about-text {
        width: 50%;
        height: 100%;

        .profession {
            font-size: 6rem;
            position: relative;
        }

        .profession:before {
            content: 'Developer';
            position: absolute;
            font-weight: 700;
            opacity: .25;
            color: ${Colors.detailColor};
            top: -30%;
            left: 15%;
        }

        .profession:after {
            content: 'Marketer';
            position: absolute;
            font-weight: 700;
            color: ${Colors.detailColor};
            opacity: .25;
            bottom: -35%;
            left: 63%;
        }

        .introduction {
            p {
                font-size: 1.4rem;
                line-height: 2rem;
            }
        }
    }

    .photos {
        width: 50%;
        height: 100%;
        padding-left: 10rem;
        padding-top: 13rem;
        display: flex;
        flex-direction: column;

        img {
            width: 96%;
            margin-bottom: 1rem;
        }
        
        
        .my-masonry-grid { 
                width: 100%;
                display: flex;
                justify-content: center;
                margin: 0;
                padding: 0;
                align-items: flex-start;
                width: auto;
        }


            .my-masonry-grid_column > div { 
                margin-bottom: 3%;
        }
    }
}

@media screen and (max-width: 1200px) {
    padding: 10rem 5rem;
    .container {
        flex-direction: column;

        .about-text {
            width: 90%;
            height: 50%;
        }

        .photos {
            width: 100%;
            height: 50%;
            padding: 0;
            padding-top: 5rem;

        }
    }
}

@media screen and (max-width: 650px) {

.container {
    width: 100%;
 
    
    .about-text {
        width: 100%;
        .profession {
        font-size: 5rem;

            
    }
    }
}
}

@media screen and (max-width: 450px) {
    padding: 15rem 3rem;
    padding-bottom: 5rem;

    .container {
        width: 100%;
     
        
        .about-text {
            width: 100%;
            .profession {
            font-size: 3rem;
                
        }
        }

        .photos {
            

            img {
                width: 100%;
            }
        }
    }
}

`
