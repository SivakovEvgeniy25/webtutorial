import React from 'react'
import { styled } from 'styled-components'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
 height: 90%;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
 width: 50%; 
`;

const Title = styled.h1`
 margin:50px;
 margin-top: 0;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Input = styled.input`
 width: 200px;
 padding: 20px;
`;
 
const TextArea = styled.textarea`
 width: 200px;
 height: 60%;
 padding: 20px;
`;
const Button = styled.button`
 border: none;
 background-color: darkblue;
 color: white;
 font-size: 16px;
 border-radius: 10px;
 padding: 15px;
 cursor: pointer;
`;
const AddressContainer = styled.div`
 width: 50%; 
 display: flex;
 flex-direction: column;
 align-item: center;
`;
const AddressItem = styled.div`
 display: flex; 
 align-item: center;
 margin-bottom: 50px;
`;
const Icon = styled.img`
 width: 20px; 
`;
const Text = styled.span`
 font-size: 20px;
`;
const Contact = () => {
   return (
      <Container>
         <Wrapper>
            <FormContainer>
               <Title> Questions? <br/>let's Get in Touch</Title>
               <Form>
               <LeftForm>
                  <Input placeholder='Your Name'/>
                  <Input placeholder='Your Email' />
                  <Input placeholder='Subject'/>
               </LeftForm>
               <RightForm>
                     <TextArea placeholder='Your Message' />
                     <Button>Send</Button>
               </RightForm>
              </Form> 
            </FormContainer>
            <AddressContainer>
               <AddressItem>
                  <Icon src={Map} />
                  <Text>Bruzdowa 96, Warsawa, Poland</Text>
               </AddressItem>
                <AddressItem>
                  <Icon src={Phone} />
                  <Text>+48 536 054 427</Text>
               </AddressItem>
                <AddressItem>
                  <Icon src={Send} />
                  <Text>sivakov.evgeniy@gmail.com</Text>
             </AddressItem>
            </AddressContainer>
         </Wrapper>
      </Container>
   )
}

export default Contact
