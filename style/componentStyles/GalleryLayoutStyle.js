import Styled from 'styled-components'
import { Colors } from '../designSpecs'

const { black, shadow1, blackOpa } = Colors

export const GalleryLayoutStyle = Styled.div`

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
  background: grey;
  margin-bottom: 3%;
}


.gallery-box {

    width: 97%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 1rem;
    margin-right: 3rem;
    background: gray;

        img {
            width: 100%;
            box-shadow: 0 0 10px ${Colors.detailColorOpa};
        }
        
        :hover .overlay{
            opacity: 1;
        }

        .overlay {
                position: absolute;
                min-width: 100%;
                max-width: 100%;
                height: 60%;
                bottom: 0;
                left:0;
                z-index: 10;
                background: linear-gradient(to top, ${Colors.detailColor}, transparent);
                display: flex;
                justify-content: space-around;
                align-items: flex-end;
                opacity: 0;
                transition: .1s ease all;
                cursor: pointer;
                padding: 0 3rem;

                .title {
                    width: 90%;
                    height: 6rem;
                    display: flex;
                    align-items: center;
                    
                    h4 {
                        color: white;
                        font-size: 1.5rem;
                    }

                }

                .zoom {
                    width: 10%;
                    height: 6rem;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                   img {
                        width: 70%;

                    }
                }


            }  
    }
           
}

@media screen and (max-width: 450px) {
    pointer-events: none;
}

`
