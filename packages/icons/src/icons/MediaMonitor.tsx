import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      d="M10.5 24a.5.5 0 000 1v-1zm11 1a.5.5 0 000-1v1zM9.632 8h12.737V7H9.632v1zM25 10.622v6.648h1v-6.648h-1zm-2.631 9.27H9.632v1h12.737v-1zM7 17.27v-6.648H6v6.648h1zm2.632 2.622c-.753 0-1.267-.001-1.652-.053-.371-.05-.548-.138-.668-.259l-.706.709c.337.336.76.476 1.241.541.467.063 1.06.062 1.785.062v-1zM6 17.27c0 .721-.001 1.313.062 1.78.065.48.206.902.544 1.239l.706-.709c-.121-.12-.21-.295-.26-.664C7.003 18.532 7 18.02 7 17.27H6zm19 0c0 .75-.001 1.262-.053 1.646-.05.37-.138.544-.259.664l.706.709c.338-.337.48-.759.544-1.24.063-.466.062-1.058.062-1.78h-1zm-2.631 3.622c.724 0 1.317 0 1.784-.062.482-.064.904-.205 1.241-.541l-.706-.709c-.12.12-.297.21-.668.259-.385.052-.9.053-1.651.053v1zm0-12.892c.752 0 1.266.001 1.651.053.371.05.547.138.668.258l.706-.708c-.337-.337-.76-.477-1.241-.541-.467-.063-1.06-.062-1.784-.062v1zM26 10.622c0-.722.001-1.313-.062-1.78-.065-.48-.206-.902-.544-1.239l-.706.708c.121.12.21.296.26.665.05.384.052.896.052 1.646h1zM9.632 7c-.724 0-1.318-.001-1.785.062-.482.064-.904.204-1.241.541l.706.708c.12-.12.297-.209.668-.258C8.365 8 8.88 8 9.632 8V7zM7 10.622c0-.75.001-1.262.053-1.646.05-.37.138-.544.259-.665l-.706-.708c-.338.337-.48.759-.544 1.24C5.999 9.308 6 9.9 6 10.621h1zm6 10.047v3.76h1v-3.76h-1zm5.117 0v3.82h1v-3.82h-1zM10.5 25h11v-1h-11v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaMonitor =
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
export default MediaMonitor;
