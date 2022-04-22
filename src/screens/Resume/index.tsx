import React from 'react';
import { Button } from '../../components/Form/Button';

import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Content,
} from './styles';

export function Resume(){
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  
  const handleNextPage = () => {
    navigation.navigate('Home');
  }

  const handleBack = () => {
    navigation.navigate('Dashboard');
  }


  return (
    <Container>
      <Content>

        <Title>Resume</Title>

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