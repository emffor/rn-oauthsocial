import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 30%;

    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center;

    padding-top: ${RFValue(20)}px;
`;

export const Footer = styled.View`
    width: 100%;
    height: 70%;

    background-color: ${({ theme }) => theme.colors.secondary};

    border-top-left-radius: 100px;
`;

export const TitleWrapper = styled.View`
    align-items: center;

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(30)}px;

    margin-top: ${RFValue(40)}px;
    
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(16)}px;

    margin-top: ${RFValue(45)}px;
`;

export const FooterWrapper = styled.View`
    padding: 30px;
    margin-top: ${RFValue(40)}px;
`;