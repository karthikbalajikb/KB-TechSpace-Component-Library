import React from 'react';
import styled from 'styled-components';
import Text from '@kb-techspace-org/text';

interface Props {
  label: string;
}

const Button: React.FC<Props> = ({ label }) => {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  );
};

export default Button;

const Container = styled.button`
  background-color: rgb(255, 51, 101);
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  padding: 9px 36px;
`;
