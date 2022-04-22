import React from 'react';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Title,
  Content,
} from './styles';

export function Dashboard(){
  return (
    <Container>
      <Content>

        <Title>Dashboard</Title>

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