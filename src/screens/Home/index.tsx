import React from 'react';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Title,
  Content,
} from './styles';

export function Home(){
  return (
    <Container>
      <Content>

        <Title>Home</Title>

        <Button 
          title='Next Page'
          onPress={() => {}}
        />

        <Button 
          title='Back Page'
          onPress={() => {}}
        />

      </Content>
    </Container>
  );
}