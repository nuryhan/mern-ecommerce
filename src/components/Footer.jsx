import { Facebook, Instagram, LinkedIn, YouTube, Room, Phone,MailOutline } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection:"column" })}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;  
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:#fff;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 18px;
`
const Center = styled.div`
    flex:1; 
    padding: 20px; 
`
const Right = styled.div`
    flex:1; 
    padding: 20px;
    ${mobile({ fontSize:"14px", backgroundColor: "lightgray" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin:0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>NURYHAN.</Logo>
                <Desc>Lorem ipsum text Lorem ipsum text Lorem ipsum text 
                    Lorem ipsum text Lorem ipsum text Lorem ipsum text 
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <Facebook/>
                    </SocialIcon  >
                    <SocialIcon color="E4405F" >
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="E60023" >
                        <YouTube/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE" >
                        <LinkedIn/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home </ListItem>
                    <ListItem>Cart </ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion </ListItem>
                    <ListItem>Accesories </ListItem>
                    <ListItem>My Account </ListItem>
                    <ListItem>Order Tracking </ListItem>
                    <ListItem>Wishlist </ListItem>
                    <ListItem>Terms </ListItem>
                </List>
            </Center>
            <Right>
                <Title> Contact </Title>
                <ContactItem> 
                    <Room style={{marginRight: "10px"}} />Ashgabat Bitarap Turkmenistan Avenue Building 123A
                </ContactItem>
                <ContactItem>
                <Phone style={{marginRight: "10px"}} /> +993 12 34-56-78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}} /> nurmuhammet.muradov0309@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
