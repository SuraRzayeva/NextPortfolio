import Styled from 'styled-components'

export const WebDesignStyle = Styled.div`

width: 90%;
padding: 0 10rem;
margin: 5rem 0;

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 30rem);
    grid-gap: 1rem;

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        transition: .2s ease all;

        &-1 {
            background: url('/Galleries/WebDesign/1.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        &-2 {
            background: url('/Galleries/WebDesign/2.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        &-3 {
            background: url('/Galleries/WebDesign/8.png'); 
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        &-4 {
            background: url('/Galleries/WebDesign/8.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        &-5 {
            background: url('/Galleries/WebDesign/3.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        &-6 {
            background: url('/Galleries/WebDesign/5.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        &-7 {
            background: url('/Galleries/WebDesign/1.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }

    .item:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
}

@media screen and (min-width: 850px) {
    .grid {
        .item-3 {
            grid-row: 2/4;
        }
        .item-4 {
            grid-row: 1/3;
            grid-column: 3/4;
        }
    }
}

@media screen and (max-width: 850px) {
    width: 100%;
    padding: 0 5rem;

    .grid {
        grid-template-columns: repeat(2, 1fr);       
        grid-template-rows: repeat(4, 20rem);
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
