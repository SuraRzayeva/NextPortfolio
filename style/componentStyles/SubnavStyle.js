import Styled from 'styled-components'
import { Colors } from '../designSpecs'

const { detailColor2 } = Colors

export const SubnavStyle = Styled.div`

width: 100%;
margin-top: 15rem;
padding: 0 10rem;

ul {
    display: flex;
    padding: 0; 
    
    li {
        margin-right: 10rem;
        font-size: 1.3rem;
        font-weight: 600;
        /* cursor: pointer; */
        position: relative;
        transition: .2s ease all;
    }

    li:after {
        content: '';
        width: 0;
        position: absolute;
        left: 0;
        bottom: -.5rem;
        height: .2rem;
        background: ${detailColor2};
        transition: .2s ease all;
    }

    .web:after {
        width: ${(props) => (props.uiuxActivePage === 1 ? '100%' : 0)}
    }

    .app:after {
        width: ${(props) => (props.uiuxActivePage === 2 ? '100%' : 0)}
    }

    .icon:after {
        width: ${(props) => (props.uiuxActivePage === 3 ? '100%' : 0)}
    }

    .svg:after {
        width: ${(props) => (props.uiuxActivePage === 4 ? '100%' : 0)}
    }

    .marketing:after {
        width: ${(props) => (props.graphicActivePage === 1 ? '100%' : 0)}
    }

    .illustration:after {
        width: ${(props) => (props.graphicActivePage === 2 ? '100%' : 0)}
    }

    .character:after {
        width: ${(props) => (props.graphicActivePage === 3 ? '100%' : 0)}
    }

    .lineart:after {
        width: ${(props) => (props.graphicActivePage === 4 ? '100%' : 0)}
    }

    .all-posts:after {
        width: ${(props) => (props.blogActivePage === 0 ? '100%' : 0)}
    }

    .professional:after {
        width: ${(props) => (props.blogActivePage === 1 ? '100%' : 0)}
    }

    .philosophical:after {
        width: ${(props) => (props.blogActivePage === 2 ? '100%' : 0)}
    }

    .development:after {
        width: ${(props) => (props.projectsActivePage === 1 ? '100%' : 0)}
    }

    .design:after {
        width: ${(props) => (props.projectsActivePage === 2 ? '100%' : 0)}
    }

    li:hover:after {
        width: 100%;
    }
}

@media screen and (max-width: 850px) {
    padding:0 5rem;

    ul {
        width: 100%;
        
        li {
            margin: 0;
            font-size: 1.5rem;
            margin-right: 5rem;
            span {
                display: none;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    padding:0 3rem;
}

@media screen and (max-width: 350px) {
    padding:0 2rem;
}
`
