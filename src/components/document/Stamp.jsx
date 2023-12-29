import styled from '@emotion/styled';

const getColor = color => {
  switch (color) {
    case 'gray':
      return 'var(--gray-color)';
    case 'black':
      return 'var(--black-color)';
    case 'red':
      return 'var(--red-color)';
    case 'green':
      return 'var(--green-color)';
    case 'blue':
      return 'var(--blue-color)';
    default:
      return 'var(--gray-color)';
  }
};

const getSizeStyle = size => {
  switch (size) {
    case 'small':
      return `
        width: 3rem;
        height: 3rem;
        line-height: 2.2rem;
        padding: 0;
        font-size: 1.4rem;
      `;
    case 'medium':
      return `
        width: 5rem;
        height: 5rem;
        line-height: 3.8rem;
        padding: .4rem;
      `;
    default:
      return `
        width: 5rem;
        height: 5rem;
        line-height: 3.8rem;
        padding: .4rem;
      `;
  }
};

const Stamp = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ color }) => getColor(color)};
  border-radius: 50%;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${({ color }) => getColor(color)};
  text-align: center;

  ${({ size }) => getSizeStyle(size)}
`;

export default Stamp;
