import Styled from 'styled-components'
import { Colors } from '../designSpecs'
const { black, detailColor, detailColor2 } = Colors

export const IndexStyle = Styled.div`

*:active, *:focus {
  outline: none;
}

width: 100%;
height: 100%;
transition: 0.3s ease all;
overflow: hidden;
margin: 0 auto;
padding: 0 10rem;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
opacity: ${(props) => (props.menuActive ? 0.3 : 1)};
overflow-x: hidden;

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
  /* cursor: pointer; */

  .start-here {
    width: 15rem;
    height: 5rem;
    display: flex;
    align-items: flex-end;
    /* cursor: pointer; */
    z-index: 10;
  }


  .line {
    width: 100%;
    height: .5rem;
    background: ${detailColor2};
    border-radius: 1rem;
    position: relative;
    
  }

}


@media screen and (max-width: 850px) {

padding: 0 5rem;

.hero {
  .hero-text {
    font-size: 12rem;
    line-height: 12rem;
  }
}
.line-block {
  width: 75%;
}
}

@media screen and (max-width: 450px) {

  padding: 0 3rem;

.hero {
  .hero-text {
    font-size: 6.5rem;
    line-height: 6.5rem;
  }
}
.line-block {
  width: 90%;
}
}

@media screen and (max-width: 350px) {

padding: 0 3rem;

.hero {
.hero-text {
  font-size: 5rem;
  line-height: 6rem;
}
}
.line-block {
width: 80%;
}
}

@media screen and (max-width: 250px) {

padding: 0 3rem;

.hero {
.hero-text {
  font-size: 3rem;
  line-height: 4rem;
}
}
.line-block {
width: 90%;
}
}

`
