import styled from 'styled-components';

type CatsProps = {
  primary: any
}

export const Span = styled.span<CatsProps>`
  cursor: pointer;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.primary ? "red" : "black"}; 
`;

export const Name = styled.p`
  margin: 20px;
  font-size: 30px;
`;

export const Spin = styled.div`
  margin: 100px 45% -50px;
`;