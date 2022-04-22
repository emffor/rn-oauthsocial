import React from 'react';
import { Button } from '../../components/Form/Button';

import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Content,
} from './styles';

export function Home(){
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleNextPage = () => {
    navigation.navigate('Dashboard');
  }

  const handleBack = () => {
    navigation.navigate('Resume');
  }

  return (
    <Container>
      <Content>

        <Title>Home</Title>

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