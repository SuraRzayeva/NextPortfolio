import Styled from 'styled-components'
import { Colors } from '../designSpecs'

const { detailColor2, black } = Colors

export const ProjectLayoutStyle = Styled.div`

width: 100%;

.grid {
    width: 100%;
    opacity: ${(props) => (props.loading == 0 ? 1 : 0)};

.my-masonry-grid { 
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    align-items: flex-start;
    width: auto;
}

 
/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  margin-bottom: 3%;
}


.blog-box {

    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 1rem;
    margin-right: 3rem;
    flex-direction: column;
    cursor: pointer;


        .image-div {

            img {
            width: 100%;
            transition: .2s ease all;
        }

        }

        .post-description {

                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: .1s ease all;
                cursor: pointer;
   

                .post-info {
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;
                    margin-bottom: 5rem;
                    
                    h4 {
                        margin-bottom: 0;
                        font-size: 1.5rem;
                    }

                    p {
                        font-size: 1.4rem;
                        line-height: 1.8rem;
                    }

                    button {
                        border-style: none;
                        background: transparent;
                        font-family: 'Montserrat', sans-serif;
                        color: ${black};
                        font-size: 1.4rem;
                        font-weight: 700;
                        padding: 0;
                        position: relative;
                        cursor: pointer;
                        transition: .2s ease all;
                    }

                    button:after {
                        content: '';
                        width: 0;
                        position: absolute;
                        left: 0;
                        bottom: -.5rem;
                        height: .2rem;
                        background: ${detailColor2};
                        transition: .2s ease all;
                    }

                    button:hover:after {
                        width: 100%;
                    }

                    .tools {
                        margin-bottom: 2rem;
                        font-size: 1.3rem;
                        font-weight: 700;
                        
                        span {
                            font-size: 1.3rem;
                            font-weight: 500;
                            font-style: italic;
                        }
                    }

                }
            }  
    }
           
}

@media screen and (max-width: 450px) {
    pointer-events: none;
}

`
