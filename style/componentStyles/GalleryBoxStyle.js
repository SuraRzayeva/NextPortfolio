import Styled from 'styled-components'

export const GalleryBoxStyle = Styled.div`

        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 1rem;
        
        :hover .overlay{
            opacity: 1;
        }

        .overlay {
                position: absolute;
                width: 100%;
                height: 60%;
                bottom: 0;
                left:0;
                z-index: 10;
                background: linear-gradient(to top, rgba(0,0,0,.6), transparent);
                display: flex;
                justify-content: space-around;
                align-items: flex-end;
                opacity: 0;
                transition: .1s ease all;
                cursor: pointer;

                .title {
                    width: 90%;
                    height: 40%;
                    display: flex;
                    align-items: center;
                    
                    h4 {
                        margin-left: 4rem;
                        color: white;
                        font-size: 1.5rem;
                    }

                }

                .zoom {
                    width: 10%;
                    height: 40%;
                    display: flex;
                    align-items: center;

                   img {
                        width: 50%;

                    }
                }

`
