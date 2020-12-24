import Styled from 'styled-components'
import { Colors } from '../designSpecs'
const { black, detailColor, detailColor2 } = Colors

export const IndexStyle = Styled.div`

*:active, *:focus {
  outline: none;
}

width: 100%;
height: 100vh;
transition: 0.3s ease all;
overflow: hidden;
margin: 0 auto;
padding: 0 10rem;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
opacity: ${(props) => (props.menuActive ? 0.3 : 1)};

.hero {
  width: 80%;
  .hero-text {
    font-size: 15rem;
    color: ${black};
    line-height: 14rem;
    font-weight: 800;
    padding: 0;
    margin: 0; 
  }
}

.line-block {
  width: 60%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  button {
    border-style: none;
    background: transparent;
    margin: 0;
    padding: 0;
    margin-bottom: 10%;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
    color: ${black};
  }


  .line {
    width: 100%;
    height: .5rem;
    background: ${detailColor2};
    border-radius: 1rem;
  }

}


@media screen and (max-width: 850px) {

padding: 0 5rem;

.hero {
  .hero-text {
    font-size: 9rem;
    line-height: 9rem;
  }
}
.line-block {
  width: 75%;
}
}

@media screen and (max-width: 450px) {

.hero {
  .hero-text {
    font-size: 6rem;
    line-height: 6rem;
  }
}
.line-block {
  width: 90%;
}
}

`
