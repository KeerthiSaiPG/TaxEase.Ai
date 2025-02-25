import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

const Form1 = () => {
  const [show, setShow] = useState(false);
  const [panId, setPanId] = useState('');
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleClick = () => setShow(!show);

  const handlePanIdChange = (e) => {
    setPanId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (panId.length === 10) {
      // Call the API to fetch user details
      try {
        const response = await fetch('https://api.example.com/getUserDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ panId }),
        });
        const data = await response.json();
        setUserData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Heading w="100%" textAlign={'center'} fontWeight="700" fontSize={'23px'} mb="7%">
        Sign up for the easy way to do tax return.
      </Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="pan-id" pl='10px' fontWeight={'normal'}>
          PAN ID
        </FormLabel>
        <Input id="pan-id" placeholder="Enter PAN ID" value={panId} onChange={handlePanIdChange} />
      </FormControl>
      <Button mt="2%" colorScheme="blue" type="submit">
        Submit
      </Button>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" pl='10px' fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" value={userData.firstName} readOnly />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" pl='10px' fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="Last name" value={userData.lastName} readOnly />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" pl='10px' fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" value={userData.email} readOnly />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" pl='10px' fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(20);
  
  return (
    <>
      <Box
       bg='white' 
       position={'relative'}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={340}
        p={4}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={step}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {<Form1 /> }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
            </Flex>
            
              <Button
                w={'100%'}
                mt={'10px'}
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                  setStep(100)
                }}>
                Start my Tax Return
              </Button>
            
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}