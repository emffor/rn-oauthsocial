import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.secondary};
`;

export const Content = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.fonts.tertiary_700};
    color: ${({ theme }) => theme.colors.primary};

`;