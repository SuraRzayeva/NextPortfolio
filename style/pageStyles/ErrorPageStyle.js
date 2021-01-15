import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const ErrorPageStyle = Styled.div`

width: 100vw;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
overflow-x: hidden;

.container {
    display: flex;
    align-items: center;

    .line {
        height: 5rem;
        width: 2px;
        background: ${Colors.detailColor2};
        margin: 0 2rem;
    }

    .text {
        p {
            font-size: 1.4rem;
            font-weight: 600;
        }
    }
}
`
