import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

import {
    Container,
    Title,
    ImageContainer
} from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    svg: React.FC<SvgProps>;
}

export function SigInSocialButton({title, svg: Svg,...rest} : Props){
  return (
    <Container {...rest}>
        <ImageContainer>
            <Svg 
                width={30}
                height={30}
            />
        </ImageContainer>

        <Title>{title}</Title>
    </Container>
  );
}