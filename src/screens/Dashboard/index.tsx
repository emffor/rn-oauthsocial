import React from 'react';
import { Button } from '../../components/Form/Button';

import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Content,
} from './styles';

export function Dashboard(){
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleNextPage = () => {
    navigation.navigate('Resume');
  }

  const handleBack = () => {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Content>

        <Title>Dashboard</Title>

        <Button 
          title='Next Page'
          onPress={handleNextPage}
        />

        <Button 
          title='Back Page'
          onPress={handleBack}
        />

      </Content>
    </Container>
  );
}