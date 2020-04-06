import React from 'react';
import styled from 'styled-components/native';

const OtherScreen = () => {
  return (
    <Container>
      <Title>OtherScreen Screen</Title>
      <Description>This is just for placeholder</Description>
    </Container>
  );
};

export default OtherScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: blue;
`;

const Description = styled.Text`
  font-size: 14px;
  color: grey;
`;
