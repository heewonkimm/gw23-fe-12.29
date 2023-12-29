import { StyleProvider, px2remTransformer } from '@ant-design/cssinjs';
import { Global, css } from '@emotion/react';

import { App, ConfigProvider } from 'antd';

import '@fortawesome/fontawesome-svg-core/styles.css';

export const colors = {
  success: '#24D164',
  warning: '#F6A723',
  error: '#f44336',
  white: '#fff',
  dim: {
    value: '15, 23, 42',
    opacity: '0.45',
  },
  primary: {
    900: '#1E3A8A',
    800: '#1E40AF',
    700: '#1D4ED8',
    600: '#2563EB',
    500: '#3B82F6',
    400: '#60A5FA',
    300: '#93C5FD',
    200: '#BFDBFE',
    100: '#DBEAFE',
    50: '#EFF6FF',
  },
  greyscale: {
    900: '#0F172A',
    800: '#1E293B',
    700: '#334155',
    600: '#475569',
    500: '#64748B',
    400: '#94A3B8',
    300: '#CBD5E1',
    200: '#E2E8F0',
    100: '#F1F5F9',
    50: '#F8FAFC',
  },
};

const size = {
  font: 16,
};

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: middle;
    font: inherit;
    color: inherit;
  }
  html,
  body {
    height: 100%;
    -webkit-text-size-adjust: none;
  }
  main,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ol,
  ul {
    list-style: none;
    margin: 0;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }
  button {
    cursor: pointer;
    border: 0;
    background: none;
  }
  legend {
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    border: 0;
    white-space: nowrap;
  }
  dialog {
    border: 0;
    margin: 0;
    padding: 0;
    max-width: none;
    max-height: none;
    color: inherit;
    visibility: visible;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
  :focus:not(:focus-visible) {
    outline: 0;
  }
  :focus-visible {
    outline: 0;
    box-shadow: 0 0 2px 2px ${colors.primary['600']};
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }
`;

const fontFace = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: url('/font/Pretendard-Light.subset.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: url('/font/Pretendard-Regular.subset.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: url('/font/Pretendard-SemiBold.subset.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: url('/font/Pretendard-Bold.subset.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: url('/font/Pretendard-ExtraBold.subset.woff2') format('woff2');
  }
`;

const variables = css`
  :root {
    --icon-color: ${colors.greyscale['500']};

    --success-color: ${colors.success};
    --warning-color: ${colors.warning};
    --error-color: ${colors.error};
    --white-color: ${colors.white}; // 배경 기본 흰색
    --dim-color: rgba(${colors.dim.value}, ${colors.dim.opacity});
    --primary-900-color: ${colors.primary['900']};
    --primary-800-color: ${colors.primary['800']};
    --primary-700-color: ${colors.primary['700']};
    --primary-600-color: ${colors.primary['600']}; // 기본 Primary
    --primary-500-color: ${colors.primary['500']};
    --primary-400-color: ${colors.primary['400']};
    --primary-300-color: ${colors.primary['300']};
    --primary-200-color: ${colors.primary['200']};
    --primary-100-color: ${colors.primary['100']};
    --primary-50-color: ${colors.primary['50']};
    --greyscale-900-color: ${colors.greyscale['900']}; // 텍스트 기본 검정색
    --greyscale-800-color: ${colors.greyscale['800']};
    --greyscale-700-color: ${colors.greyscale['700']};
    --greyscale-600-color: ${colors.greyscale['600']};
    --greyscale-500-color: ${colors.greyscale['500']}; // 텍스트 기본 회색
    --greyscale-400-color: ${colors.greyscale['400']}; // 텍스트 비활성화 회색
    --greyscale-300-color: ${colors.greyscale['300']};
    --greyscale-200-color: ${colors.greyscale[
      '200'
    ]}; // 선 기본 회색 (테두리관련)
    --greyscale-100-color: ${colors.greyscale[
      '100'
    ]}; // 선 기본 회색2 (구분선관련)
    --greyscale-50-color: ${colors.greyscale['50']}; // 배경 기본 회색
  }
`;

const base = css`
  html {
    font-size: 62.5%; // 10px
  }

  @media (width <= 1024px) {
    html {
      font-size: 54.6875%; // 8.75px
    }
  }

  body {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  @media print {
    @page {
      size: A4;
    }

    html {
      // zoom: 1;

      &.is-printing {
      }
    }

    .ant-app {
      .ant-layout {
        background-color: transparent;
      }
      .common-header,
      .common-sidebar {
        display: none;
      }

      .wrapper {
        & > .inner {
          margin-left: 0;
        }
      }

      .common-main {
        & > .wrap {
          padding: 0;
        }
      }

      .section {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
`;

const globalStyles = css`
  ${reset}
  ${fontFace}
  ${variables}
  ${base}

  // Antd 재정의
  .ant-app {
    // Button 재정의
    .ant-btn {
      min-width: 9rem;

      &.ant-btn-sm {
        min-width: 7rem;
      }
      &.ant-btn-lg {
        min-width: 11rem;
      }

      &.ant-btn-icon-only {
        min-width: auto;
        &.ant-btn-sm {
          min-width: auto;
        }
        &.ant-btn-lg {
          min-width: auto;
        }
      }

      &:not(.ant-btn-text) {
        & > span {
          vertical-align: baseline;
        }
      }
    }

    // Form 재정의
    .ant-form-item-label > label {
      font-weight: 600;
    }

    // Picker 재정의
    .ant-picker {
      width: 100%;
    }

    // Table 재정의
    .ant-table-wrapper:not(:has(.ant-table-thead)) {
      .ant-table-tbody > tr:first-child th {
        border-radius: 1.2rem 0 0 0;

        border-top: 1px solid var(--greyscale-100-color);

        ~ td {
          border-top: 1px solid var(--greyscale-100-color);
        }
      }
    }
    .ant-table-wrapper:not(:has(.ant-table-foot)) {
      .ant-table-tbody > tr:last-child th {
        border-radius: 0 0 0 1.2rem;
      }
    }
  }
`;

const px2rem = px2remTransformer({
  rootValue: 10,
});

const theme = {
  token: {
    // SeedToken
    colorBgBase: colors.white,
    colorError: colors.error,
    colorInfo: colors.primary['600'],
    colorLink: colors.primary['600'],
    colorPrimary: colors.primary['600'],
    colorSuccess: colors.success,
    colorTextBase: colors.greyscale['900'],
    colorWarning: colors.warning,
    controlHeight: 48,
    borderRadius: 10,
    fontSize: size.font,
    fontFamily: '"Pretendard", sans-serif',

    // MapToken
    colorText: colors.greyscale['900'], // 텍스트 기본 검정색
    colorTextSecondary: colors.greyscale['500'], // 텍스트 기본 회색
    colorTextQuaternary: colors.greyscale['400'], // 텍스트 비활성화 회색 (placeholder, disabled, readonly)
    colorTextTertiary: colors.greyscale['500'], // 텍스트 기본 회색 (추가설명문)
    colorBgMask: `rgba(${colors.dim.value}, ${colors.dim.opacity})`, // 배경 딤
    colorBgSpotlight: 'rgba(15, 23, 42, 0.70)', // 배경 툴팁배경
    colorBorder: colors.greyscale['200'], // 선 기본 회색1 (UI테두리)
    colorBorderSecondary: colors.greyscale['100'], // 선 기본 회색2 (구분선)
    colorBgLayout: colors.greyscale['50'], // 배경 기본 회색 (UI배경)
    colorFillQuaternary: colors.greyscale['50'], // 배경 기본 회색 (UI배경)
    controlHeightLG: 56,

    // AliasToken
    fontWeightStrong: 600,
  },
  // Components Token
  components: {},
  // Antd CSS의 선택자에 ':where(.css-dev-only-do-not-override-해시)'를 접두사로 추가.
  hashed: false,
};

const appConfig = {
  message: {
    duration: 2,
    top: 30,
  },
  notification: {
    duration: 2,
    placement: 'topRight',
  },
};

const Theme = ({ children }) => {
  return (
    <StyleProvider transformers={[px2rem]}>
      <ConfigProvider theme={theme}>
        <App {...appConfig}>
          <Global styles={globalStyles} />
          {children}
        </App>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default Theme;
