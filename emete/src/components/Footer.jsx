import { Facebook, Instagram, Mail, Phone, Pinterest,Room } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display: flex;
  flex-wrap:wrap;
`
    
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const ContactItem= styled.div`
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
        <Logo>EMETE.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          quisquam exercitationem doloribus sint quas odio eos dolore,
          reprehenderit earum, fugiat, officia perspiciatis ipsam nihil
          quibusdam dignissimos repudiandae inventore eligendi deleniti.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Utiles</Title>
        <List>
         <ListItem>Home</ListItem>
         <ListItem>Carrito</ListItem>   
         <ListItem>Accesorios</ListItem>   
         <ListItem>Mi Cuenta</ListItem>   
         <ListItem>WishList</ListItem>   
         <ListItem>Terminos y condiciones</ListItem>   
        
        </List>

      </Center>
      <Right>
          <Title>Contat</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/>
          Moron 3036-Local Season-Flores 
          </ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/>
            WhatsApp: 1139450447
          </ContactItem>
          <ContactItem><Mail style={{marginRight:"10px"}}/>
            emete.clothing@gmail.com
          </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
      </Right>
    </Container>
  );
};

export default Footer;
