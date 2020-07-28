import * as React from 'react';
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
    <g filter="url(#filter0_d)">
      <path
        opacity={0.1}
        d="M97.933 123.366H48.053C44.486 123.366 41.615 120.466 41.615 116.928V37.12C41.615 33.553 44.515 30.682 48.053 30.682H97.933C101.5 30.682 104.371 33.582 104.371 37.12V116.928C104.371 120.495 101.5 123.366 97.933 123.366Z"
        fill="currentColor"
      />
      <path
        d="M110.2 134.125C107.851 134.125 106.633 132.675 105.676 131.515C104.719 130.355 104.11 129.688 102.863 129.688C101.616 129.688 101.007 130.355 100.05 131.515C99.093 132.675 97.875 134.125 95.526 134.125C93.177 134.125 91.959 132.675 91.002 131.515C90.045 130.355 89.436 129.688 88.189 129.688C86.942 129.688 86.333 130.355 85.376 131.515C84.419 132.675 83.201 134.125 80.852 134.125C78.503 134.125 77.285 132.675 76.328 131.515C75.371 130.355 74.762 129.688 73.515 129.688C72.268 129.688 71.659 130.355 70.702 131.515C69.745 132.675 68.527 134.125 66.178 134.125C63.829 134.125 62.611 132.675 61.654 131.515C60.697 130.355 60.088 129.688 58.841 129.688C58.232 129.688 57.739 129.195 57.739 128.586C57.739 127.977 58.232 127.484 58.841 127.484C61.19 127.484 62.408 128.934 63.365 130.094C64.322 131.254 64.931 131.921 66.178 131.921C67.425 131.921 68.034 131.254 68.991 130.094C69.948 128.934 71.166 127.484 73.515 127.484C75.864 127.484 77.082 128.934 78.039 130.094C78.996 131.254 79.605 131.921 80.852 131.921C82.099 131.921 82.708 131.254 83.665 130.094C84.622 128.934 85.84 127.484 88.189 127.484C90.538 127.484 91.756 128.934 92.713 130.094C93.67 131.254 94.279 131.921 95.526 131.921C96.773 131.921 97.382 131.254 98.339 130.094C99.296 128.934 100.514 127.484 102.863 127.484C105.212 127.484 106.43 128.934 107.387 130.094C108.344 131.254 108.953 131.921 110.2 131.921C111.447 131.921 112.056 131.254 113.013 130.094C113.97 128.934 115.188 127.484 117.537 127.484C118.146 127.484 118.639 127.977 118.639 128.586C118.639 129.195 118.146 129.688 117.537 129.688C116.29 129.688 115.681 130.355 114.724 131.515C113.767 132.675 112.549 134.125 110.2 134.125Z"
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
        d="M112.375 46.567C112.042 46.567 111.773 46.2979 111.773 45.965V43.5C111.773 41.5449 110.189 39.926 108.199 39.926H68.1501C66.195 39.926 64.5761 41.5098 64.5761 43.5V45.965C64.5761 46.2979 64.3069 46.567 63.9741 46.567C63.6412 46.567 63.3721 46.2979 63.3721 45.965V43.5C63.3721 40.8762 65.5262 38.722 68.1501 38.722H108.199C110.823 38.722 112.977 40.8762 112.977 43.5V45.965C112.977 46.2979 112.708 46.567 112.375 46.567Z"
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
        d="M110.084 115.913H105.212C104.603 115.913 104.11 115.42 104.11 114.811C104.11 114.202 104.603 113.709 105.212 113.709H110.084C110.693 113.709 111.186 114.202 111.186 114.811C111.186 115.391 110.693 115.913 110.084 115.913ZM100.34 115.913H95.4681C94.8591 115.913 94.3661 115.42 94.3661 114.811C94.3661 114.202 94.8591 113.709 95.4681 113.709H100.34C100.949 113.709 101.442 114.202 101.442 114.811C101.442 115.391 100.949 115.913 100.34 115.913ZM90.5961 115.913H85.7241C85.1151 115.913 84.6221 115.42 84.6221 114.811C84.6221 114.202 85.1151 113.709 85.7241 113.709H90.5961C91.2051 113.709 91.6981 114.202 91.6981 114.811C91.7271 115.391 91.2051 115.913 90.5961 115.913ZM80.8811 115.913H76.0091C75.4001 115.913 74.9071 115.42 74.9071 114.811C74.9071 114.202 75.4001 113.709 76.0091 113.709H80.8811C81.4901 113.709 81.9831 114.202 81.9831 114.811C81.9831 115.391 81.4901 115.913 80.8811 115.913ZM71.1371 115.913H66.2651C65.6561 115.913 65.1631 115.42 65.1631 114.811C65.1631 114.202 65.6561 113.709 66.2651 113.709H71.1371C71.7461 113.709 72.2391 114.202 72.2391 114.811C72.2391 115.391 71.7461 115.913 71.1371 115.913Z"
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
        d="M103.327 97.23C102.994 97.23 102.725 96.9609 102.725 96.628C102.725 88.6089 96.2084 82.092 88.1892 82.092C80.1701 82.092 73.6532 88.6089 73.6532 96.628C73.6532 96.9609 73.3841 97.23 73.0512 97.23C72.7184 97.23 72.4492 96.9609 72.4492 96.628C72.4492 87.9432 79.5334 80.859 88.2182 80.859C96.8942 80.859 103.973 87.9287 103.987 96.6015C103.942 96.9699 103.646 97.23 103.327 97.23Z"
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
    </g>
    <defs>
      <filter
        id="filter0_d"
        x={-4}
        y={0}
        width={182}
        height={182}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
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
