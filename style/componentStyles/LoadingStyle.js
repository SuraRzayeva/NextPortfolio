import Styled from 'styled-components'
import { Colors } from '../designSpecs'

export const LoadingStyle = Styled.div`
.ajax-loader{
	position: absolute;
	/* top: ${(props) => (props.full ? '40%' : '25%')};
	left: ${(props) => (props.full ? '40%' : '25%')}; */
  top: 40%;
  left: 40%;
	transform-origin: 50% 50%;
	transform: rotate(70deg) translate(-50%, 0%);
  width: 5rem;
  height: 20rem;

	.paw{
		width: 2.5rem;
		height: 2.5rem;
		animation: 2050ms pawAnimation ease-in-out infinite;
		opacity: 0;
		
		svg{
			width: 100%;
			height: 100%;
		}
		
		.icon{
			fill: ${(props) => (props.lightColor ? Colors.white : Colors.black)};

		}
  }
  .paw1 {
    animation-delay: .5s;
    transform: rotate(-10deg);
  }
  .paw2 {
    animation-delay: .4s;
    transform: rotate(10deg) translate(125%, 0);
  }
  .paw3 {
    transform: rotate(-10deg);
    animation-delay: .3s;
  }
  .paw4 {
    animation-delay: .2s;
    transform: rotate(10deg) translate(125%, 0);
  }
  .paw5 {
    animation-delay: .1s;
    transform: rotate(-10deg);
  }
  .paw6 {
    animation-delay: 0;
    transform: rotate(10deg) translate(125%, 0);
  }

        .no-cssanimations &{
        	opacity: 1;
        }
	}
}

@keyframes pawAnimation {
	0%{
		opacity: 1;
	}
	50%{
		opacity: 0;
	}
	100%{
		opacity: 0;
	}
}

@media screen and (max-width: 850px) {
  .ajax-loader{
    top: 30%;
    left: 40%;
  }
}

`

const Hey = () => {
  return (
    <div className="content">
      <p>'I\'ve had the opportunity to work with the Embassy of France in the last three years and designer these new year cards for them. </p>
      <p>We used the trendy design elements from the year, add some french detail there and voila!</p>
      <p>I absolutely love the drawing the sketch of the embassy building. </p>
      <p>Side note: If you have a partner, enjoy your meal talking with them, theeeen pick a movie and watch it. Here am I, again, giving wonderful life hack recommendations.</p>
      <p>You are welcome! :) </p>
    </div>
  )
}

export default Hey
