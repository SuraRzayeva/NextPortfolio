import Styled from 'styled-components'

export const SubpageLayout = Styled.div`

width: 90%;
padding: 0 10rem;
margin: 5rem 0;
overflow-x: hidden;

@media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 5rem;
}

@media screen and (max-width: 450px) {
    padding: 0 3rem;
}


`
