import Styled from 'styled-components'

export const FooterStyle = Styled.div`

position: absolute;
bottom: 0;
left: 10rem;

p {
    font-size: 1.3rem;
}

@media screen and (max-width: 850px) {
    position: unset;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

`
