import React from 'react';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = ({ secondaryColor, ...rest }: any) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      opacity={0.1}
      d="M97.933 123.366H48.053C44.486 123.366 41.615 120.466 41.615 116.928V37.12C41.615 33.553 44.515 30.682 48.053 30.682H97.933C101.5 30.682 104.371 33.582 104.371 37.12V116.928C104.371 120.495 101.5 123.366 97.933 123.366Z"
      fill="currentColor"
    />
    <path
      d="M110.2 134.125C107.851 134.125 106.633 132.675 105.676 131.515C104.719 130.355 104.11 129.688 102.863 129.688C101.616 129.688 101.007 130.355 100.05 131.515C99.0931 132.675 97.8751 134.125 95.5261 134.125C93.1771 134.125 91.9591 132.675 91.0021 131.515C90.0451 130.355 89.4361 129.688 88.1891 129.688C86.9421 129.688 86.3331 130.355 85.3761 131.515C84.4191 132.675 83.2011 134.125 80.8521 134.125C78.5031 134.125 77.2851 132.675 76.3281 131.515C75.3711 130.355 74.7621 129.688 73.5151 129.688C72.2681 129.688 71.6591 130.355 70.7021 131.515C69.7451 132.675 68.5271 134.125 66.1781 134.125C63.8291 134.125 62.6111 132.675 61.6541 131.515C60.6971 130.355 60.0881 129.688 58.8411 129.688C58.2321 129.688 57.7391 129.195 57.7391 128.586C57.7391 127.977 58.2321 127.484 58.8411 127.484C61.1901 127.484 62.4081 128.934 63.3651 130.094C64.3221 131.254 64.9311 131.921 66.1781 131.921C67.4251 131.921 68.0341 131.254 68.9911 130.094C69.9481 128.934 71.1661 127.484 73.5151 127.484C75.8641 127.484 77.0821 128.934 78.0391 130.094C78.9961 131.254 79.6051 131.921 80.8521 131.921C82.0991 131.921 82.7081 131.254 83.6651 130.094C84.6221 128.934 85.8401 127.484 88.1891 127.484C90.5381 127.484 91.7561 128.934 92.7131 130.094C93.6701 131.254 94.2791 131.921 95.5261 131.921C96.7731 131.921 97.3821 131.254 98.3391 130.094C99.2961 128.934 100.514 127.484 102.863 127.484C105.212 127.484 106.43 128.934 107.387 130.094C108.344 131.254 108.953 131.921 110.2 131.921C111.447 131.921 112.056 131.254 113.013 130.094C113.97 128.934 115.188 127.484 117.537 127.484C118.146 127.484 118.639 127.977 118.639 128.586C118.639 129.195 118.146 129.688 117.537 129.688C116.29 129.688 115.681 130.355 114.724 131.515C113.767 132.675 112.549 134.125 110.2 134.125Z"
      fill="currentColor"
    />
    <path
      d="M117.537 108.714C117.204 108.714 116.935 108.445 116.935 108.112V101.036C116.935 100.703 117.204 100.434 117.537 100.434C117.87 100.434 118.139 100.703 118.139 101.036V108.112C118.139 108.445 117.87 108.714 117.537 108.714Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M58.812 108.714C58.4791 108.714 58.21 108.445 58.21 108.112V52.635C58.21 48.6191 61.4951 45.334 65.511 45.334H110.867C114.883 45.334 118.168 48.6191 118.168 52.635V65.685C118.168 66.0178 117.899 66.287 117.566 66.287C117.233 66.287 116.964 66.0179 116.964 65.685V52.635C116.964 49.2849 114.246 46.567 110.896 46.567H65.482C62.1318 46.567 59.414 49.2849 59.414 52.635V108.112C59.414 108.445 59.1448 108.714 58.812 108.714Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M112.375 46.567C112.042 46.567 111.773 46.2979 111.773 45.965V43.5C111.773 41.5449 110.189 39.926 108.199 39.926H68.1499C66.1949 39.926 64.5759 41.5098 64.5759 43.5V45.965C64.5759 46.2979 64.3068 46.567 63.9739 46.567C63.6411 46.567 63.3719 46.2979 63.3719 45.965V43.5C63.3719 40.8762 65.5261 38.722 68.1499 38.722H108.199C110.823 38.722 112.977 40.8762 112.977 43.5V45.965C112.977 46.2979 112.708 46.567 112.375 46.567Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M117.537 129.166C116.928 129.166 116.435 128.673 116.435 128.064V115.159C116.435 114.55 116.928 114.057 117.537 114.057C118.146 114.057 118.639 114.55 118.639 115.159V128.064C118.639 128.673 118.146 129.166 117.537 129.166Z"
      fill="currentColor"
    />
    <path
      d="M58.812 129.166C58.203 129.166 57.71 128.673 57.71 128.064V115.159C57.71 114.55 58.203 114.057 58.812 114.057C59.421 114.057 59.914 114.55 59.914 115.159V128.064C59.914 128.673 59.421 129.166 58.812 129.166Z"
      fill="currentColor"
    />
    <path
      d="M61.393 115.913H58.812C58.203 115.913 57.71 115.42 57.71 114.811C57.71 114.202 58.203 113.709 58.812 113.709H61.393C62.002 113.709 62.495 114.202 62.495 114.811C62.495 115.391 62.002 115.913 61.393 115.913Z"
      fill="currentColor"
    />
    <path
      d="M110.084 115.913H105.212C104.603 115.913 104.11 115.42 104.11 114.811C104.11 114.202 104.603 113.709 105.212 113.709H110.084C110.693 113.709 111.186 114.202 111.186 114.811C111.186 115.391 110.693 115.913 110.084 115.913ZM100.34 115.913H95.468C94.859 115.913 94.3659 115.42 94.3659 114.811C94.3659 114.202 94.859 113.709 95.468 113.709H100.34C100.949 113.709 101.442 114.202 101.442 114.811C101.442 115.391 100.949 115.913 100.34 115.913ZM90.596 115.913H85.724C85.115 115.913 84.622 115.42 84.622 114.811C84.622 114.202 85.115 113.709 85.724 113.709H90.596C91.205 113.709 91.698 114.202 91.698 114.811C91.727 115.391 91.205 115.913 90.596 115.913ZM80.881 115.913H76.009C75.4 115.913 74.907 115.42 74.907 114.811C74.907 114.202 75.4 113.709 76.009 113.709H80.881C81.49 113.709 81.983 114.202 81.983 114.811C81.983 115.391 81.49 115.913 80.881 115.913ZM71.137 115.913H66.265C65.656 115.913 65.163 115.42 65.163 114.811C65.163 114.202 65.656 113.709 66.265 113.709H71.137C71.746 113.709 72.239 114.202 72.239 114.811C72.239 115.391 71.746 115.913 71.137 115.913Z"
      fill="currentColor"
    />
    <path
      d="M117.537 115.913H114.956C114.347 115.913 113.854 115.42 113.854 114.811C113.854 114.202 114.347 113.709 114.956 113.709H117.537C118.146 113.709 118.639 114.202 118.639 114.811C118.639 115.391 118.146 115.913 117.537 115.913Z"
      fill="currentColor"
    />
    <path
      d="M88.16 82.005C82.666 82.005 78.22 77.5318 78.22 72.065C78.22 66.5991 82.6941 62.125 88.16 62.125C93.6539 62.125 98.1 66.5982 98.1 72.065C98.1 77.5318 93.6539 82.005 88.16 82.005ZM88.16 63.329C83.3308 63.329 79.424 67.2359 79.424 72.065C79.424 76.8941 83.3308 80.801 88.16 80.801C92.9891 80.801 96.896 76.8941 96.896 72.065C96.896 67.2359 92.9891 63.329 88.16 63.329Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M103.327 97.23C102.994 97.23 102.725 96.9609 102.725 96.628C102.725 88.6089 96.2082 82.092 88.1891 82.092C80.1699 82.092 73.6531 88.6089 73.6531 96.628C73.6531 96.9609 73.384 97.23 73.0511 97.23C72.7182 97.23 72.4491 96.9609 72.4491 96.628C72.4491 87.9432 79.5332 80.859 88.2181 80.859C96.8941 80.859 103.973 87.9287 103.987 96.6015C103.942 96.9699 103.646 97.23 103.327 97.23Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M123.83 97.846C115.826 97.846 109.33 91.35 109.33 83.346C109.33 75.342 115.826 68.846 123.83 68.846C131.834 68.846 138.33 75.342 138.33 83.346C138.33 91.35 131.834 97.846 123.83 97.846ZM123.83 71.079C117.073 71.079 111.563 76.589 111.563 83.346C111.563 90.103 117.073 95.613 123.83 95.613C130.587 95.613 136.097 90.103 136.097 83.346C136.126 76.589 130.616 71.079 123.83 71.079Z"
      fill="currentColor"
    />
    <path
      d="M117.972 90.335C117.682 90.335 117.392 90.219 117.189 90.016C116.754 89.581 116.754 88.885 117.189 88.45L128.934 76.705C129.369 76.27 130.065 76.27 130.5 76.705C130.935 77.14 130.935 77.836 130.5 78.271L118.755 90.016C118.523 90.219 118.262 90.335 117.972 90.335Z"
      fill="currentColor"
    />
    <path
      d="M129.717 90.335C129.427 90.335 129.137 90.219 128.934 90.016L117.189 78.271C116.754 77.836 116.754 77.14 117.189 76.705C117.624 76.27 118.32 76.27 118.755 76.705L130.5 88.45C130.935 88.885 130.935 89.581 130.5 90.016C130.268 90.219 130.007 90.335 129.717 90.335Z"
      fill="currentColor"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const Component = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);

const NoBets: React.FC<any> = props => {
  const theme = useTheme();
  return <Component secondaryColor={theme.color.bulma[100]} {...props} />;
};

NoBets.defaultProps = {
  verticalAlign: 'middle',
};
export default NoBets;
