import Heading from '@/components/document/Heading';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const Header = styled.header`
  margin-bottom: 5rem;

  & ${Heading} {
    margin-bottom: 0;
  }
`;

const Main = styled.main``;

const Footer = styled.footer`
  margin-top: 10rem;
`;

const Inner = styled.div`
  min-width: 1000px;

  @media (width <= 1024px) {
    min-width: 800px;
  }
`;

const globalStyles = css`
  @media print {
    html.is-printing {
      zoom: 0.7;
      font-size: 62.5%;

      .section:not(:has(.is-printing-target)) {
        display: none;
      }
    }
  }
`;

const document = css`
  --white-color: #fff;
  --black-color: #000;
  --gray-color: #e2e3e9;
  --red-color: red;
  --green-color: green;
  --blue-color: blue;

  width: 100%;
  padding: 5rem 5rem 10rem;
  background-color: #fff;
  border: 1px solid var(--black-color);
  font-family: 'Pretendard', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  overflow-x: auto;

  @media print {
    html.is-printing & {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 2px);
      min-height: calc(100% + ((30 / 70) * 100%));
      background-color: #fff;
      z-index: 9999;

      & ~ * {
        display: none;
      }

      .break-before-page {
        break-before: page;
      }
      .break-after-page {
        break-after: page;

        * {
          break-before: auto !important;
          break-after: auto !important;
          page-break-before: auto !important;
          page-break-after: auto !important;
          margin: 0 !important;
        }
      }
      .break-before {
        break-before: always;
      }
      .break-after {
        break-after: always;
      }
      .void-before {
        break-before: void;
      }
      .void-after {
        break-after: void;
      }
    }
  }
`;

const Document = ({ children, ...props }) => (
  <article {...props} css={document}>
    <Global styles={globalStyles} />
    {children}
  </article>
);

Document.Header = Header;
Document.Inner = Inner;
Document.Main = Main;
Document.Footer = Footer;

export default Document;
