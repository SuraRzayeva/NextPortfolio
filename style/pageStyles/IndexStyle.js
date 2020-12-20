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
    font-size: 14px;
    cursor: pointer;
    color: ${black};
  }


  .line {
    width: 100%;
    height: 5px;
    background: ${detailColor2};
    border-radius: 10px;
    position: relative;


    .circle {
      position: absolute;
      right: -15px;
      top: 0;
      width: 0;
      height: 0;
      border-radius: 50%;
      transition: .2s ease all;
      animation: rotateCircle 3s 1s ease infinite;
      backface-visibility: visible;
      z-index: 10;
    } 

  }
  :hover .circle {
      background: transparent;
      border: 2px solid ${black};
      width: 100px;
      height: 100px;
      right: -20px;
      top: -55px;
      cursor: pointer;
    }
}

@keyframes rotateCircle {
  from {
    transform: rotate(0);
  }   to {
    transform: rotateY(360deg);
  }
}

`
