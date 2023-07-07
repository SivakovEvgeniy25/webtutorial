import React from 'react';
import { styled } from 'styled-components';
import Woman from '../src/img/Woman.png'
import AnimatedShapes from './components/AnimatedShapes';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width:480px){
   flex-direction: column;
 }
`;
const Left = styled.div`
  width:60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:480px){
  width:100%;
   height:100%;
 }
  `;
const Title = styled.h1`
 width:60%;
 font-size:60px;
 @media only screen and (max-width:480px){
  width:100%;
  font-size: 50px;
 }
`;
const Desc = styled.p`
 width:60%;
 font-size:20px;
 margin-top:20px;
 @media only screen and (max-width:480px){
  width:100%;
 }
`;
const Info = styled.div`
 width:60%;
 margin-top:50px;
 display: flex;
 align-items:center;
 justify-content:space-between;
 @media only screen and (max-width:480px){
  width:100%;
  flex-direction: column;
 }
`;
const Button = styled.button`
padding:15px;
background-color: darkblue;
color:white;
border-radius:10px;
font-weight:bold;
border:none;
letter-spacing:2px;
cursor:pointer;
`;
const Contact = styled.div`
 display: flex;
 flex-direction: column;
`;
const Phone = styled.span`
color: #f0667d;
font-weight:bold;
`; 
const ContactText = styled.span`
color: gray;
margin-top:5px;
`; 
const Right = styled.div`
 width:40%;
 @media only screen and (max-width:480px){
  display:none;
 }
 `;
const Image = styled.img`
 width: 110%;
 margin-top: 170px;
`

const Intro = () => {
   return (
      <Container>
         <Left>
            <Title>Adventures in creative agency</Title>
            <Desc>WE believe that designing products and services in close partnership with our clients is the only way to have areal impact on their business.</Desc>
            <Info>
               <Button>Start A PROJECT</Button>
               <Contact>
                  <Phone>Cal (+48)536 054 427</Phone>
                  <ContactText>For any question or concern</ContactText>
               </Contact>
           </Info>
         </Left>
         <Right><Image src={Woman} /></Right>
         <AnimatedShapes />
      </Container>
   )
}

export default Intro
