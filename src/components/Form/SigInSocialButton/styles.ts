import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    height: ${RFValue(60)}px;

    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 10px;

    align-items: center;
    flex-direction: row;

    margin-top: 15px;
`;

export const ImageContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;

    padding: ${RFValue(16)}px;
    border-color: ${({theme}) => theme.colors.text_detail};
    border-right-width: 1px;
`;

export const Title = styled.Text`
    flex: 1;

    font-family: ${({theme}) => theme.fonts.primary_600};
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.title};

    text-align: center;
`;