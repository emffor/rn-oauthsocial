import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 50%;
    background-color: ${({theme}) => theme.colors.background_secondary};

    align-items: center;
    padding: 18px;
    
    margin-top: 15px;

    border-radius: 50px;
   
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_600};
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.primary};
`;