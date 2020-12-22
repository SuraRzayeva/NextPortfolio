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
    font-size: 14px;
    cursor: pointer;
    color: ${black};
  }


  .line {
    width: 100%;
    height: 5px;
    background: ${detailColor2};
    border-radius: 10px;z
  }

  .circle {
      transition: .5s ease all;
      left: ${(props) => `${props.mouseX}px`};
      top: ${(props) => `${props.mouseY}px`};
      position: absolute;
      border: solid 2px ${(props) => (props.borderColor ? detailColor2 : black)};
	    width: ${(props) => `${props.circleSize}rem`}; 
	    height: ${(props) => `${props.circleSize}rem`}; 
      border-radius: 50%;  
    } 
}




`
