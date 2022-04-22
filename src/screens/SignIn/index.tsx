import React, { useContext } from 'react';

import LogoSvg from '../../assets/logo.svg';
import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';

import { SigInSocialButton } from '../../components/Form/SigInSocialButton';

import { AuthContext } from '../../utils/AuthContext';

import {
  Container,
  Header,
  Footer,
  Title,
  SubTitle,
  TitleWrapper,
  FooterWrapper
} from './styles';


export function SignIn(){
  const data = useContext(AuthContext);
  console.log(data);
  

  return (
    <Container>
      <Header>
        <LogoSvg 
          width={120}
          height={120}
        />


      </Header>

        <Footer>

          <TitleWrapper>
            <Title>Login Account</Title>

            <SubTitle>
              Faça seu login com {'\n'} 
              suas redes sociais.
            </SubTitle>
          </TitleWrapper>

          <FooterWrapper>

          <SigInSocialButton 
            title="Entrar com Google"
            svg={GoogleSvg}
          />

          <SigInSocialButton 
            title="Entrar com Apple"
            svg={AppleSvg}
          />

        </FooterWrapper>

        </Footer>
        
    </Container>
  );
}