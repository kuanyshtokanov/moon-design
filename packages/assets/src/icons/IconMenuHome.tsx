import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 5.5l-.008-4.003A1.5 1.5 0 0 0 5.494 0C4.362 0 3.303.075 2.318.227a2.5 2.5 0 0 0-2.092 2.09A20.624 20.624 0 0 0 0 5.5C0 6.327.67 7 1.5 7H5.5a1.5 1.5 0 0 0 1.498-1.5zm8.779-3.184A2.5 2.5 0 0 0 13.688.227 21.004 21.004 0 0 0 10.505 0a1.5 1.5 0 0 0-1.5 1.497L9 5.498c0 .83.671 1.501 1.5 1.501h4.007a1.5 1.5 0 0 0 1.5-1.5 20.592 20.592 0 0 0-.227-3.183zM9.999 5.5l.006-4a.5.5 0 0 1 .5-.499c1.086 0 2.096.072 3.031.215a1.5 1.5 0 0 1 1.255 1.254c.145.942.217 1.951.215 3.03a.5.5 0 0 1-.5.5h-4.008a.5.5 0 0 1-.5-.5zm-7.53-4.284A1.5 1.5 0 0 0 1.215 2.47 19.633 19.633 0 0 0 1 5.499a.5.5 0 0 0 .498.5h4.003a.5.5 0 0 0 .498-.499l-.007-4a.5.5 0 0 0-.498-.5c-1.083 0-2.092.072-3.025.215zm11.067 13.568a1.5 1.5 0 0 0 1.255-1.254 19.6 19.6 0 0 0 .215-3.03.5.5 0 0 0-.5-.5h-4.008a.5.5 0 0 0-.5.499l.007 4.001a.5.5 0 0 0 .5.5c1.086 0 2.096-.073 3.031-.216zM9 10.499l.006 4.002a1.5 1.5 0 0 0 1.5 1.497c1.135 0 2.196-.075 3.183-.227a2.5 2.5 0 0 0 2.091-2.09c.154-.993.229-2.055.227-3.183a1.5 1.5 0 0 0-1.5-1.499h-4.007a1.5 1.5 0 0 0-1.5 1.5zm-3.007 4l.007-4a.5.5 0 0 0-.498-.5H1.498a.5.5 0 0 0-.498.5 19.63 19.63 0 0 0 .215 3.03 1.5 1.5 0 0 0 1.254 1.254c.933.143 1.942.215 3.025.215a.5.5 0 0 0 .498-.499zm-5.766-.817a2.5 2.5 0 0 0 2.092 2.09c.985.15 2.044.226 3.176.226a1.5 1.5 0 0 0 1.498-1.497L7 10.5a1.5 1.5 0 0 0-1.498-1.501H1.499A1.5 1.5 0 0 0 0 10.499a20.62 20.62 0 0 0 .226 3.183z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
const IconMenuHome = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);
export default IconMenuHome;
