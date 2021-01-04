import Styled from 'styled-components'
import { Colors } from '../designSpecs'

const { black, white, detailColor2, shadow1, shadow2 } = Colors

export const MenuStyle = Styled.div`

*:active, *:focus {
  outline: none;
}

position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: ${(props) => (props.menuActive ? '100;' : '-100; ')}
overflow: hidden;
transition: 0.5s ease all;


.boxes {
  width: 100%;
  height: 100%;
  position: relative;
  transition: .5s ease all;
  pointer-events: ${(props) => (props.menuActive ? 'auto;' : 'none')}
  z-index: ${(props) => (props.menuActive ? '100;' : '-100; ')}


  .box {
    width: 20rem;
    height: 20rem;
    background-color: ${white};
    background: linear-gradient(to right, ${white}, #f5f9fc);
    box-shadow: 1.8rem 1.8rem 3rem ${shadow1}, -1.8rem 1.8rem 3rem ${shadow2};
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;


    h1 {
        font-size: 1.2rem;
        color: ${black};
        backface-visibility: hidden;
        transition: 0.2s all ease;
        position: relative;
    }

    h1:after {
      content: '';
      width: 0;
      position: absolute;
      left: 0;
      bottom: -1rem;
      height: .2rem;
      background: ${detailColor2};
      transition: .2s ease all;
    }

  }

  .box:hover h1:after {
    width: 100%;
  }

  .box-1 {
    top: 5%;
    left: 60%;
    animation: ${(props) => (props.menuActive ? 'box1ToCenter .5s ease forwards;' : 'box1Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menuActive ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menuActive ? 'pointer;' : null)}
  }

  .box-2 {
    top: 15%;
    left: 20%;
    animation: ${(props) => (props.menuActive ? 'box2ToCenter .5s ease forwards;' : 'box2Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menuActive ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menuActive ? 'pointer;' : null)}
  }


  .box-3 {
    top: 70%;
    left: 50%;
    animation: ${(props) => (props.menuActive ? 'box3ToCenter .5s ease forwards;' : 'box3Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menuActive ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menuActive ? 'pointer;' : null)}
 
  }

  .box-4 {
    top: 50%;
    left: 80%;

    animation: ${(props) => (props.menuActive ? 'box5ToCenter .5s ease forwards;' : 'box5Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menuActive ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menuActive ? 'pointer;' : null)}

  }

  .box-5 {
    left: 92%;
    top: -5%;
    animation: ${(props) => (props.menuActive ? 'box6ToCenter .5s ease forwards;' : 'box6Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menuActive ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menuActive ? 'pointer;' : null)}
  }

  .box-6 {
    top: 65%;
    left: 7%;
    animation: ${(props) => (props.menuActive ? 'box4ToCenter .5s ease forwards;' : 'box4Back .5s ease forwards; ')}
    z-index: ${(props) => (props.menuActive ? '100;' : '-100; ')}
    cursor: ${(props) => (props.menuActive ? 'pointer;' : null)}
  }


.box-7 {
  top: -15%;
  left: -9%;
  display: none;
  z-index: -100;
  transition: .5s all ease;
  opacity: ${(props) => (props.menuActive ? '0;' : '1;')}
}
}

//------------------------------------------------------------------------------------------------------ keyframes box1 web + mobile


@keyframes box1ToCenter {
  from {
    top: 5%;
    left: 60%;
    transform: none;
  }
  to {
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box1Back {
  from {
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 5%;
    left: 60%;
    transform: translate(0);
  }
}

@keyframes box1ToCenterM {
  from {
    top: 70%;
    left: 60%;
    transform: none;
  }
  to {
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box1BackM {
  from {
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 70%;
    left: 60%;
    transform: translate(0);
  }
}

//------------------------------------------------------------------------------------------------------ keyframes box2 web + mobile

@keyframes box2ToCenter {
  from {
    top: 15%;
    left: 20%;
    transform: none;
  }
  to {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box2Back {
  from {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 15%;
    left: 20%;
    transform: translate(0);
  }
}


@keyframes box2ToCenterM {
  from {
    top: 65%;
    left: 10%;
    transform: none;
  }
  to {
    top: 30%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}


@keyframes box2BackM {
  from {
    top: 30%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 65%;
    left: 10%;
    transform: none;
  }
}

//------------------------------------------------------------------------------------------------------ keyframes box3 web + mobile

@keyframes box3ToCenter {
  from {
    top: 70%;
    left: 50%;
    transform: none;
  }
  to {
    top: 40%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box3Back {
  from {
    top: 40%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 70%;
    left: 50%;
    transform: translate(0);
  }
}

@keyframes box3ToCenterM {
  from {
    top: 20%;
      left: 80%;
    transform: none;
  }
  to {
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}


@keyframes box3BackM {
  from {
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 20%;
      left: 80%;
    transform: none;

  }
}

//------------------------------------------------------------------------------------------------------ keyframes box4 web + mobile

@keyframes box4ToCenter {
  from {
    top: 65%;
    left: 7%;
    transform: none;
  }
  to {
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box4Back {
  from {
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 65%;
    left: 7%;
    transform: translate(0);
  }
}

@keyframes box4ToCenterM {
  from {
    top: 15%;
    left: 3%;
    transform: none;
  }
  to {
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}



@keyframes box4BackM {
  from {
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 15%;
    left: 3%;
    transform: none;
  }
}

//------------------------------------------------------------------------------------------------------ keyframes box5 web + mobile

@keyframes box5ToCenter {
  from {
    top: 50%;
    left: 80%;
    transform: none;
  }
  to {
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box5Back {
  from {
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 50%;
    left: 80%;
    transform: translate(0);
  }
}

@keyframes box5ToCenterM {
  from {
    top: 90%;
    left: 30%;
    transform: none;
  }
  to {
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box5BackM {
  from {
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 90%;
    left: 30%;
    transform: none;
  }
}

//------------------------------------------------------------------------------------------------------ keyframes box6 web + mobile

@keyframes box6ToCenter {
  from {
    left: 92%;
    top: -5%;
    transform: none;
  }
  to {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}


@keyframes box6Back {
  from {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  to {
    left: 92%;
    top: -5%;
    transform: translate(0);
  }
}

@keyframes box6ToCenterM {
  from {
    top: -5%;
    left: 45%;
    transform: none;
  }
  to {
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box6BackM {
  from {
    top: 70%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -5%;
    left: 45%;
    transform: none;
  }
}

//------------------------------------------------------------------------------------------------------ media queries

@media screen and (max-width: 1250px) {
  .boxes {
    .box {
      width: 180px;
      height: 180px;
    }
  }
}


@media screen and (max-width: 850px) {

  .boxes {

    .box {
      width: 180px;
      height: 180px;
    }

    .box-1 {
      top: 70%;
      left: 60%;
      animation: ${(props) => (props.menuActive ? 'box1ToCenterM .5s ease forwards;' : 'box1BackM .5s ease forwards; ')}

    }

    .box-2 {
      top: 65%;
      left: 10%;
      animation: ${(props) => (props.menuActive ? 'box2ToCenterM .5s ease forwards;' : 'box2BackM .5s ease forwards; ')}
    }

    .box-3 {
      top: 20%;
      left: 80%;
      animation: ${(props) => (props.menuActive ? 'box3ToCenterM .5s ease forwards;' : 'box3BackM .5s ease forwards; ')}
   
    }

    .box-4 {
      top: 90%;
      left: 30%;

      animation: ${(props) => (props.menuActive ? 'box5ToCenterM .5s ease forwards;' : 'box5BackM .5s ease forwards; ')}
    }

    .box-5 {
      top: -5%;
      left: 45%;
      animation: ${(props) => (props.menuActive ? 'box6ToCenterM .5s ease forwards;' : 'box6BackM .5s ease forwards; ')}
    }

    .box-6 {
      top: 15%;
      left: 3%;
      animation: ${(props) => (props.menuActive ? 'box4ToCenterM .5s ease forwards;' : 'box4BackM .5s ease forwards; ')}
    }

    .box-7 {
      top: -8%;
      left: 30%;
      display: none;
    }
  }
}


@media screen and (max-width: 450px) {

  .boxes {
    .box {
      width: 15rem;
      height: 15rem;
      border-radius: 2rem;
        h1 {
          font-size: 1.2rem;
        }   
    }
  }
}


@media screen and (max-width: 320px) {

  .boxes {
    .box {
      width: 10rem;
      height: 10rem;
      border-radius: 2rem;
        h1 {
          font-size: .8rem;
        }
    }
  }
}

@media (pointer:coarse) {

  .close-btn {
    cursor: default;
  }
.boxes {
  .box {
    cursor: default;
    a {
      cursor: default;
    }
  }
}

}
`
