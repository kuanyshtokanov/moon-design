import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.793 13.31a.5.5 0 10.106.995l-.106-.995zM26 10.154a.5.5 0 00-1 0h1zm-15.9 4.15a.5.5 0 00.107-.994l-.106.995zM7 10.155a.5.5 0 00-1 0h1zm14.889 11.194a.5.5 0 10-.085.996l.085-.996zM25 24.769a.5.5 0 101 0h-1zm-14.804-2.425a.5.5 0 10-.085-.996l.085.996zM6 24.77a.5.5 0 101 0H6zm3.423-6.807a.5.5 0 100-1v1zm-2.192-1a.5.5 0 000 1v-1zm15.346 0a.5.5 0 000 1v-1zm2.192 1a.5.5 0 100-1v1zM15.5 21.01a.5.5 0 101 0h-1zm1-6.264a.5.5 0 10-1 0h1zm1.923-5.324v1.462h1V9.423h-1zm-4.846 1.462V9.423h-1v1.462h1zM16 7a2.423 2.423 0 012.423 2.423h1A3.423 3.423 0 0016 6v1zm0-1a3.423 3.423 0 00-3.423 3.423h1A2.423 2.423 0 0116 7V6zm5.9 8.305c2.963-.317 4.1-2.73 4.1-4.151h-1c0 1.015-.85 2.905-3.207 3.156l.106.995zm-11.693-.995C7.85 13.06 7 11.17 7 10.154H6c0 1.42 1.137 3.834 4.1 4.15l.107-.994zm11.597 9.034c2.44.209 3.196 1.748 3.196 2.425h1c0-1.272-1.232-3.175-4.111-3.421l-.085.996zm-11.693-.996C7.232 21.594 6 23.498 6 24.769h1c0-.677.755-2.216 3.196-2.425l-.085-.996zm-.688-4.386H7.231v1h2.192v-1zm13.154 1h2.192v-1h-2.192v1zm-9.15-6.577h5.145v-1h-5.144v1zm7.92 2.773v5.496h1v-5.496h-1zm-10.693 5.496v-5.496h-1v5.496h1zM16 25a5.346 5.346 0 01-5.346-5.346h-1A6.346 6.346 0 0016 26v-1zm5.346-5.346A5.346 5.346 0 0116 25v1a6.346 6.346 0 006.346-6.346h-1zm-2.774-8.27a2.774 2.774 0 012.774 2.774h1a3.774 3.774 0 00-3.774-3.773v1zm-5.144-1a3.774 3.774 0 00-3.774 3.774h1a2.774 2.774 0 012.774-2.773v-1zM16.5 21.012v-6.264h-1v6.264h1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SoftwareBug =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
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
export default SoftwareBug;
