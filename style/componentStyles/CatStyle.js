import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const CatStyle = Styled.div`

position: absolute;
top: -10rem;
right: 0;
.container {
  /* background: ${Colors.blackOpa}; */
  height: 10rem;
  position: relative;
  width: 10rem;
}

.artboard {
  height: 100%;
  position: relative;
  width: 100%;
}

.cat {
  position: absolute;
  bottom: 0;
  left: 6rem;
  z-index: 3;
}
.cat__head {
  -webkit-animation: head 10s infinite;
          animation: head 10s infinite;
  background: ${Colors.black};
  border-radius: 10px 10px 0 0;
  height: 20px;
  position: relative;
  transition: transform 0.5s;
  width: 22px;
  z-index: 2;
}
.cat__eye {
  background: ${Colors.detailColor2};
  border-radius: 3px;
  height: 4px;
  left: 0;
  width: 4px;
  position: absolute;
  top: 7px;
}
.cat__eyes {
  position: absolute;
  z-index: 1;
}
.cat__eye-left {
  -webkit-animation: eye-left 10s infinite;
          animation: eye-left 10s infinite;
}
.cat__eye-right {
  -webkit-animation: eye-right 10s infinite;
          animation: eye-right 10s infinite;
}
.cat__ears {
  position: absolute;
  top: -5px;
  width: 100%;
}
.cat__ear-left {
  -webkit-animation: ear-left 10s infinite;
          animation: ear-left 10s infinite;
  border-bottom: 12px solid ${Colors.black};
  border-right: 15px solid transparent;
  height: 0;
  position: absolute;
  top: 0;
  transition: transform 0.5s;
  width: 0;
}
.cat__ear-right {
  -webkit-animation: ear-right 10s infinite;
          animation: ear-right 10s infinite;
  border-bottom: 12px solid ${Colors.black};
  border-left: 15px solid transparent;
  border-bottom-left-radius: 15px;
  height: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.5s;
  width: 0;
}
.cat__body {
  -webkit-animation: body 10s infinite;
          animation: body 10s infinite;
  background: ${Colors.black};
  border-radius: 0px 20px 10px 0;
  height: 35px;
  position: relative;
  width: 35px;
}
.cat__body:before {
  -webkit-animation: body-two 10s infinite;
          animation: body-two 10s infinite;
  background: ${Colors.black};
  bottom: 0;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 50%;
}
.cat__tail {
  -webkit-animation: tail 10s infinite ease-in-out;
          animation: tail 10s infinite ease-in-out;
  bottom: 0;
  right: 0;
  position: absolute;
}
.cat__tail .line-one, .cat__tail .line-two {
  background-color: ${Colors.black};
  border-radius: 100%;
  height: 5px;
  transform-origin: center right;
  width: 5px;
}
.cat__tail .line-one {
  -webkit-animation: tail-one 10s infinite ease-in-out;
          animation: tail-one 10s infinite ease-in-out;
}
 .cat__tail .line-two {
  -webkit-animation: tail-two 10s infinite ease-in-out;
          animation: tail-two 10s infinite ease-in-out;
}

@-webkit-keyframes tail {
  5% {
    transform: translate(-20px, 0);
  }
  40% {
    transform: translate(-20px, 0);
  }
  50% {
    transform: translate(-5px, 0);
  }
  100% {
    transform: translate(-5px, 0);
  }
}

@keyframes tail {
  5% {
    transform: translate(-20px, 0);
  }
  40% {
    transform: translate(-20px, 0);
  }
  50% {
    transform: translate(-5px, 0);
  }
  100% {
    transform: translate(-5px, 0);
  }
}
@-webkit-keyframes tail-one {
  0% {
    transform: translate(0, 2px);
  }
  5% {
    transform: translate(2px, 0);
  }
  40% {
    transform: translate(2px, 0);
  }
  50% {
    transform: translate(0, 1px);
  }
  100% {
    transform: translate(0, 1px);
  }
}
@keyframes tail-one {
  0% {
    transform: translate(0, 2px);
  }
  5% {
    transform: translate(2px, 0);
  }
  40% {
    transform: translate(2px, 0);
  }
  50% {
    transform: translate(0, 1px);
  }
  100% {
    transform: translate(0, 1px);
  }
}
@-webkit-keyframes tail-two {
  0% {
    transform: translate(0, 2px) rotate(0);
  }
  5% {
    transform: translate(3px, 1px) rotate(15deg);
  }
  30% {
    transform: translate(3px, 1px) rotate(15deg);
  }
  40% {
    transform: translate(3px, 1px) rotate(-5deg);
  }
  50% {
    transform: translate(0, 4px) rotate(15deg);
  }
  60% {
    transform: translate(0, 3px) rotate(-15deg);
  }
  70% {
    transform: translate(0, 4px) rotate(15deg);
  }
  80% {
    transform: translate(0, 3px) rotate(-15deg);
  }
  85% {
    transform: translate(0, 3px) rotate(5deg);
  }
  90% {
    transform: translate(0, 3px) rotate(-2.5deg);
  }
  95% {
    transform: translate(0, 3px) rotate(1deg);
  }
  100% {
    transform: translate(0, 3px) rotate(0);
  }
}
@keyframes tail-two {
  0% {
    transform: translate(0, 2px) rotate(0);
  }
  5% {
    transform: translate(3px, 1px) rotate(15deg);
  }
  30% {
    transform: translate(3px, 1px) rotate(15deg);
  }
  40% {
    transform: translate(3px, 1px) rotate(-5deg);
  }
  50% {
    transform: translate(0, 4px) rotate(15deg);
  }
  60% {
    transform: translate(0, 3px) rotate(-15deg);
  }
  70% {
    transform: translate(0, 4px) rotate(15deg);
  }
  80% {
    transform: translate(0, 3px) rotate(-15deg);
  }
  85% {
    transform: translate(0, 3px) rotate(5deg);
  }
  90% {
    transform: translate(0, 3px) rotate(-2.5deg);
  }
  95% {
    transform: translate(0, 3px) rotate(1deg);
  }
  100% {
    transform: translate(0, 3px) rotate(0);
  }
}

@-webkit-keyframes body {
  5% {
    border-radius: 15px 20px 10px 0;
  }
  30% {
    border-radius: 15px 20px 10px 0;
  }
  35% {
    border-radius: 0 20px 10px 0;
  }
}
@keyframes body {
  5% {
    border-radius: 15px 20px 10px 0;
  }
  30% {
    border-radius: 15px 20px 10px 0;
  }
  35% {
    border-radius: 0 20px 10px 0;
  }
}
@-webkit-keyframes body-two {
  5% {
    height: 50%;
    transform: translateX(-4px);
  }
  30% {
    height: 50%;
    transform: translateX(-4px);
  }
  35% {
    height: 100%;
    transform: translateX(0);
  }
}
@keyframes body-two {
  5% {
    height: 50%;
    transform: translateX(-4px);
  }
  30% {
    height: 50%;
    transform: translateX(-4px);
  }
  35% {
    height: 100%;
    transform: translateX(0);
  }
}
@-webkit-keyframes eye-left {
  0% {
    transform: rotateY(0) translateX(2px);
  }
  30% {
    transform: rotateY(0) translateX(2px);
  }
  35% {
    transform: rotateY(90deg) translateX(-4px);
  }
  75% {
    transform: rotateY(90deg) translateX(-4px);
  }
  80% {
    transform: rotateY(0) translateX(2px);
  }
  100% {
    transform: rotateY(0) translateX(2px);
  }
}
@keyframes eye-left {
  0% {
    transform: rotateY(0) translateX(2px);
  }
  30% {
    transform: rotateY(0) translateX(2px);
  }
  35% {
    transform: rotateY(90deg) translateX(-4px);
  }
  75% {
    transform: rotateY(90deg) translateX(-4px);
  }
  80% {
    transform: rotateY(0) translateX(2px);
  }
  100% {
    transform: rotateY(0) translateX(2px);
  }
}
@-webkit-keyframes eye-right {
  0% {
    transform: rotateY(0) translateX(10px);
  }
  30% {
    transform: rotateY(0) translateX(10px);
  }
  35% {
    transform: rotateY(90deg) translateX(-4px);
  }
  75% {
    transform: rotateY(90deg) translateX(-4px);
  }
  80% {
    transform: rotateY(0) translateX(10px);
  }
  100% {
    transform: rotateY(0) translateX(10px);
  }
}
@keyframes eye-right {
  0% {
    transform: rotateY(0) translateX(10px);
  }
  30% {
    transform: rotateY(0) translateX(10px);
  }
  35% {
    transform: rotateY(90deg) translateX(-4px);
  }
  75% {
    transform: rotateY(90deg) translateX(-4px);
  }
  80% {
    transform: rotateY(0) translateX(10px);
  }
  100% {
    transform: rotateY(0) translateX(10px);
  }
}
@-webkit-keyframes ear-left {
  0% {
    transform: scaleX(-1) translateX(-6px);
  }
  30% {
    transform: scaleX(-1) translateX(-6px);
  }
  35% {
    transform: scaleX(1) translateX(0);
  }
  75% {
    transform: scaleX(1) translateX(0);
  }
  80% {
    transform: scaleX(-1) translateX(-6px);
  }
  100% {
    transform: scaleX(-1) translateX(-6px);
  }
}
@keyframes ear-left {
  0% {
    transform: scaleX(-1) translateX(-6px);
  }
  30% {
    transform: scaleX(-1) translateX(-6px);
  }
  35% {
    transform: scaleX(1) translateX(0);
  }
  75% {
    transform: scaleX(1) translateX(0);
  }
  80% {
    transform: scaleX(-1) translateX(-6px);
  }
  100% {
    transform: scaleX(-1) translateX(-6px);
  }
}
@-webkit-keyframes ear-right {
  0% {
    transform: translate(-9px, 1px);
  }
  30% {
    transform: translate(-9px, 1px);
  }
  35% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 0);
  }
  80% {
    transform: translate(-9px, 1px);
  }
  100% {
    transform: translate(-9px, 1px);
  }
}
@keyframes ear-right {
  0% {
    transform: translate(-9px, 1px);
  }
  30% {
    transform: translate(-9px, 1px);
  }
  35% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 0);
  }
  80% {
    transform: translate(-9px, 1px);
  }
  100% {
    transform: translate(-9px, 1px);
  }
}
@-webkit-keyframes head {
  5% {
    transform: translate(-4px, 20px);
  }
  30% {
    transform: translate(-4px, 20px);
  }
  35% {
    transform: translate(0, 0);
  }
}
@keyframes head {
  5% {
    transform: translate(-4px, 20px);
  }
  30% {
    transform: translate(-4px, 20px);
  }
  35% {
    transform: translate(0, 0);
  }
}

`
