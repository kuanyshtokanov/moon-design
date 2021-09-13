import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.357 15.524l-.391-1.207 1.02-.743c.01.088.029.175.029.266 0 .65-.254 1.236-.658 1.684zm-2.885.61l1.029-.75 1.027.75a2.49 2.49 0 01-1.027.226 2.49 2.49 0 01-1.03-.226zM7.986 13.84c0-.091.018-.178.027-.266l1.021.743-.39 1.207a2.503 2.503 0 01-.658-1.684zm2.003-2.467l-.395 1.217H8.33a2.514 2.514 0 011.659-1.217zm1.213 2.918l.303.935-.794-.578a.356.356 0 00-.21-.068.357.357 0 00-.212.068l-.794.578.303-.935a.361.361 0 00-.13-.403l-.794-.578h.981c.156 0 .294-.1.342-.248l.304-.936.302.936a.359.359 0 00.342.248h.98l-.792.578a.361.361 0 00-.131.403zm1.468-1.7h-1.264l-.395-1.218a2.514 2.514 0 011.659 1.217zm.903.248c-.005-.016-.02-.021-.026-.036-.434-1.277-1.629-2.203-3.046-2.203-1.419 0-2.614.926-3.048 2.203-.007.015-.021.02-.026.036-.005.016.003.03 0 .047-.094.303-.159.62-.159.954 0 1.064.52 2 1.31 2.59.01.009.012.024.023.032.007.005.017.003.024.007.53.382 1.175.611 1.876.611.7 0 1.343-.23 1.874-.611.008-.004.017-.002.024-.007.011-.008.013-.023.023-.032a3.227 3.227 0 001.31-2.59c0-.334-.065-.65-.159-.954-.003-.017.005-.031 0-.047zm.115-3.019a5.205 5.205 0 00-.68-.458l4.179-7.642h.853l-4.352 8.1zM10.5 18.28a4.44 4.44 0 01-4.43-4.44A4.44 4.44 0 0110.5 9.4a4.44 4.44 0 010 8.88zM3.943 1.72L8.09 9.308a5.147 5.147 0 00-.779.512L2.96 1.72h.982zm4.805 7.288L4.762 1.72h1.095l3.85 7.04a5.095 5.095 0 00-.96.248zm2.91-.185a5.111 5.111 0 00-1.156-.143l-.018.002L6.677 1.72h1.096l3.885 7.103zm1.57-7.103h1.225l-2.93 5.359-.613-1.122 2.318-4.237zM11.93 7.824c.002-.004.008-.006.01-.01l3.331-6.094h1.097L12.48 8.83l-.55-1.006zm7.019-6.648A.357.357 0 0018.64 1h-5.626a.358.358 0 00-.316.186L10.502 5.21 8.3 1.186A.357.357 0 007.985 1H2.36a.361.361 0 00-.317.53l4.718 8.784a5.137 5.137 0 00-1.408 3.526c0 2.845 2.309 5.16 5.148 5.16 2.837 0 5.148-2.315 5.148-5.16a5.138 5.138 0 00-1.41-3.526l4.718-8.783a.361.361 0 00-.008-.355z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsPopular =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default IconSportsPopular;
