import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

var teste;
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText, Info, InfoText } from './styles';
export default function Menu({ translateY }){
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Code>
                <QRCode 
                    value="http://facebook.github.io/react-native/"
                    size={80}
                    color="#FFFFFF"
                    backgroundColor="#8B10AE"
                />
            </Code>
            <Info>
                <InfoText style={{fontWeight:'bold'}}>Banco 260 - Nu Pagamentos S.A</InfoText>
                <InfoText>Agencia <InfoText style={{ fontWeight:'bold'}}>0001</InfoText></InfoText>
                <InfoText>Conta <InfoText style={{ fontWeight: 'bold' }}>1234567-8</InfoText></InfoText>
            </Info>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF"/>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"/>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"/>
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF"/>
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={()=> {}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}