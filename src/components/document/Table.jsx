import styled from '@emotion/styled';

const Table = styled.div`
  position: relative;
  margin-top: 2rem;
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);

  & > table {
    // Reset
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: middle;
    font: inherit;
    color: inherit;
    border-collapse: collapse;
    border-spacing: 0;

    caption {
      // Reset
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

    width: 100%;
  }

  & > table > thead > tr > th,
  & > table > tbody > tr > th {
    box-sizing: border-box;
    height: 4rem;
    padding: 0.4rem 1.2rem;
    background-color: var(--gray-color);
    color: var(--black-color);
    text-align: left;
    vertical-align: top;
  }

  & > table > thead > tr > td,
  & > table > tbody > tr > td {
    box-sizing: border-box;
    height: 4rem;
    padding: 0.4rem 1.2rem;
    border-bottom: 1px dotted var(--gray-color);
    font-weight: 400;
    color: var(--black-color);
    text-align: left;
    vertical-align: top;
  }

  & > table > thead > tr:nth-last-of-type(2) > td[rowspan],
  & > table > tbody > tr:nth-last-of-type(2) > td[rowspan] {
    border-bottom: 0;
  }

  & > table > tbody > tr > th {
    border-bottom: 1px dotted var(--gray-color);
    font-weight: 400;
    color: var(--black-color);
  }

  & > table > tbody > tr:last-child > th,
  & > table > tbody > tr:last-child > td {
    border-bottom: 0;
  }

  & > table > thead::after {
    content: '';
    width: 1px;
    height: calc(100% + 2px);
    position: absolute;
    top: -1px;
    right: 0;
    background-color: var(--white-color);
  }

  & > table > thead > tr > th {
    border-right: 1px dotted var(--gray-color);
  }

  & > table > thead + tbody > tr > td {
    border-right: 1px dotted var(--gray-color);
    border-bottom: 1px solid var(--gray-color);
  }

  & > table > thead > tr > th,
  & > table > thead > tr > td,
  & > table > tbody > tr > th,
  & > table > tbody > tr > td {
    text-align: ${({ align }) => (align ? align : 'left')};
  }
`;

export default Table;
