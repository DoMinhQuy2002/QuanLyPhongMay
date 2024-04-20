import {
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import { LockIcon, InfoIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { AspectRatio, useToast } from '@chakra-ui/react';
import { API, APIName } from '../service/apiconfig';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const usenavigate = useNavigate();
  const toast = useToast();


  const localStorage = window.localStorage;

  localStorage.setItem('Username', JSON.stringify(Username));

  const ProceedLogin = async (e) => {
    e.preventDefault(); // Fix the typo here

    if (validate()) {
      await axios.post(`${API}${APIName.Login}/Login`,
        {
          "Username": `${Username}`,
          "Password": `${Password}`
        }
      )
        .then((response) => {
          if (Object.keys(response).length === 0) {
            alert('Please Enter valid username')
          } else {
            console.log(response);
            if (response.data[0].Password === Password) {
              alert('Success');
              window.onload = function () {
                if (localStorage) {
                  document.getElementById('contactForm').addEventListener('submit', function () {
                    var Username = document.getElementById('Username').value;
                    localStorage.setItem('Username', Username);
                  });
                }
              }
              usenavigate('/masterpage');

            } else {
              alert('Please Enter valid credentials');
            }
          }
        })
        .catch(function (error) {
          alert('error');
          console.log(error);
        });

    }

  };

  const validate = () => {
    let result = true;
    if (Username === '' || Username === null) {
      result = false;
      alert('Please Enter Username');
    }
    if (Password === '' || Password === null) {
      result = false;
      alert('Please Enter Password');
    }
    return result;
  }

  return (
    <>
      <form onSubmit={ProceedLogin}> {/* Move onSubmit to a form element */}
        <AspectRatio ratio={10 / 5}>
          <Grid
            templateAreas={`"nav main"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='200px'
            gap='1'
            bgColor='white'
            color='blackAlpha.700'
            fontWeight='bold'
            width='100%'
            height='100%'
          >

            <GridItem pl='2' bg='white' area={'nav'} width='100%' height='100%'>
              <Image src='wallpaperflare.com_wallpaper.jpg' width='100%' height='100%' />
            </GridItem>

            <GridItem pl='50' area={'main'} width='100%' height='100%' bgColor='white.700' textAlign='center'>
              <br />
              <br />
              <br />
              <br />
              <Text fontSize='40px' color='Blue' as='b' marginRight={50}>
                LOGIN
              </Text>
              <FormControl marginTop='75'>
                <Center marginRight={290}>
                  <FormLabel fontSize='20'>Username</FormLabel>
                </Center>
                <InputGroup marginLeft={150}>
                  <InputLeftElement pointerEvents='none'>
                    <InfoIcon color='gray.300' />
                  </InputLeftElement>
                  <Input type='text' width='50%' variant='filled' placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={Username} id='username' />
                </InputGroup>
              </FormControl>
              <br />
              <FormControl>
                <Center marginRight={290}>
                  <FormLabel fontSize='20'>Password</FormLabel>
                </Center>
                <InputGroup marginLeft={150}>
                  <InputLeftElement pointerEvents='none'>
                    <LockIcon color='gray.300' />
                  </InputLeftElement>
                  <Input type='password' width='50%' variant='filled' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={Password} id='password' />
                </InputGroup>
              </FormControl>
              <br />
              <Button colorScheme='blue' variant='solid' width='20%' type='submit' marginRight={10} onClick={() =>
                toast({
                  title: 'Loading',
                  status: 'loading',
                  duration: 500,
                  isClosable: true,
                })
              }>
                LOGIN
              </Button>
            </GridItem>
          </Grid>
        </AspectRatio>
      </form>
    </>
  );
}
