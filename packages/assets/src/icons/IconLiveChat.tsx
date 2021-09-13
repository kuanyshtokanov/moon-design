import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.938 10.186c-.08 1.643-.397 3.203-.872 4.353-.952 2.3-3.252 2.875-5.394 3.04-1.269.082-2.379.164-3.41.164-.634 0-1.19 0-1.824-.082-.159 0-.317.082-.476.164L5.79 20.043l-.238-2.464c0-.247-.159-.493-.476-.575-1.27-.493-2.142-1.315-2.617-2.465-.476-1.15-.793-2.71-.873-4.353V9.2c0-1.725.317-3.286.793-4.436.952-2.3 3.252-2.793 5.393-3.039 1.27-.082 2.38-.164 3.41-.164 1.032 0 2.221.082 3.411.164 2.142.246 4.442.74 5.393 3.04.476 1.15.793 2.71.873 4.353.079.41.079.74.079 1.068zm.555-5.997c-.317-.739-.714-1.396-1.19-1.889-.475-.493-1.03-.904-1.665-1.15C17.369.575 16.02.329 14.91.246 13.562.082 12.372 0 11.262 0c-1.19 0-2.3.082-3.648.164-1.11.165-2.459.329-3.728.904A6.36 6.36 0 002.221 2.3c-.555.493-.952 1.15-1.27 1.89C.398 5.503.08 7.228 0 9.117v1.15c.08 1.89.476 3.614.952 4.928.317.822.793 1.561 1.427 2.136.397.41.873.74 1.428.986.08 0 .159.082.159.164l.396 3.614c0 .247.238.411.397.411.079 0 .158 0 .238-.082l4.282-3.04c.08-.081.238-.081.318-.081h1.506c1.19 0 2.3-.083 3.649-.165 1.11-.082 2.458-.328 3.727-.903a8.678 8.678 0 001.666-1.15c.555-.493.952-1.15 1.269-1.89.555-1.314.872-3.039.951-4.928v-1.15c-.079-1.89-.396-3.614-.872-4.929z"
      fill="currentColor"
    />
    <path
      d="M6.107 9.529c0 .283.108.554.302.755.193.2.455.312.729.312.273 0 .536-.112.729-.312.193-.2.302-.472.302-.755 0-.284-.109-.555-.302-.756a1.013 1.013 0 00-.73-.312c-.273 0-.535.112-.728.312-.194.2-.302.472-.302.756zm4.045 0a1.101 1.101 0 00.302.755 1.028 1.028 0 00.729.312 1 1 0 00.729-.312 1.101 1.101 0 000-1.51 1.029 1.029 0 00-.73-.313 1 1 0 00-.728.312 1.072 1.072 0 00-.302.756zm4.124 0c0 .283.108.554.302.755.193.2.455.312.729.312.273 0 .535-.112.729-.312.193-.2.302-.472.302-.755 0-.284-.109-.555-.302-.756a1.013 1.013 0 00-.73-.312c-.273 0-.535.112-.728.312-.194.2-.302.472-.302.756z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconLiveChat =
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
export default IconLiveChat;
