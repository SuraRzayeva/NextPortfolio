import Styled from 'styled-components'
import { Colors } from '../designSpecs'
const { detailColor2 } = Colors

export const WebDesignStyle = Styled.div`

width: 90%;
padding: 0 10rem;
margin: 5rem 0;

.grid {
    display: grid;
    grid-template-columns: repeat(3, 40rem);
    grid-template-rows: repeat(3, 25rem);
    grid-gap: 1rem;

    /* .item-3 {
            grid-row: 2/4;
        }
        .item-4 {
            grid-row: 1/3;
            grid-column: 3/4;
        }
    } */
}

/* @media screen and (min-width: 150px) {
    .grid {
        .item-3 {
            grid-row: 2/4;
        }
        .item-4 {
            grid-row: 1/3;
            grid-column: 3/4;
        }
    }
} */

@media screen and (max-width: 1400px) {
    .grid {
    display: grid;
    grid-template-columns: repeat(3, 30rem);
    grid-template-rows: repeat(3, 18rem);
    grid-gap: 1rem;
    }
}

@media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 5rem;

    .grid {
        grid-template-columns: repeat(2, 1fr);       
        grid-template-rows: repeat(4, 23rem);
    }
}

@media screen and (max-width: 450px) {
    padding: 0 3rem;
    .grid {
        grid-template-columns: repeat(1, 1fr);
        pointer-events: none;
    }
}
`
