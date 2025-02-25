// import {
//   Progress,
//   Box,
//   ButtonGroup,
//   Button,
//   Heading,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   useToast,
//   InputGroup,
//   InputRightElement,
// } from '@chakra-ui/react';

// import { useState } from 'react';

// const Form1 = () => {
//   const [show, setShow] = useState(false);
//   const [panId, setPanId] = useState('');
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const handleClick = () => setShow(!show);

//   const handlePanIdChange = (e) => {
//     setPanId(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (panId.length === 10) {
//       try {
//         const response = await fetch('https://api.example.com/getUserDetails', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ panId }),
//         });
//         const data = await response.json();
//         setUserData({
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//         });
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     }
//   };

//   return (
//     <Box as="form" onSubmit={handleSubmit} width="100%">
//       <Heading w="100%" textAlign="center" fontWeight="700" fontSize="23px" mb="5%">
//         Sign up for the easy way to do tax return.
//       </Heading>

//       {/* PAN ID Input */}
//       <FormControl mt="4%">
//         <FormLabel htmlFor="pan-id">PAN ID</FormLabel>
//         <Input 
//           id="pan-id" 
//           placeholder="Enter PAN ID" 
//           value={panId} 
//           onChange={handlePanIdChange} 
//           bg="white" 
//         />
//       </FormControl>

//       {/* Submit Button */}
//       <Button mt="4%" colorScheme="blue" type="submit" width="100%">
//         Submit
//       </Button>

//       {/* User Details */}
//       <Flex direction="column" gap="15px" mt="4%">
//         <FormControl>
//           <FormLabel>First Name</FormLabel>
//           <Input value={userData.firstName} readOnly />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Last Name</FormLabel>
//           <Input value={userData.lastName} readOnly />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Email Address</FormLabel>
//           <Input value={userData.email} readOnly />
//         </FormControl>
//       </Flex>

//       {/* Password Input */}
//       <FormControl mt="4%">
//         <FormLabel>Password</FormLabel>
//         <InputGroup size="md">
//           <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? 'Hide' : 'Show'}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//     </Box>
//   );
// };

// export default function Multistep() {
//   const toast = useToast();
//   const [step, setStep] = useState(20);

//   return (
//     <Box
//       bg="white"
//       position="relative"
//       borderWidth="1px"
//       rounded="lg"
//       shadow="1px 1px 3px rgba(0,0,0,0.3)"
//       maxWidth={450}
//       width="100%"
//       p={6}
//       m="20px auto"
//       overflow="auto"
//     >
//       <Progress hasStripe value={step} mb="5%" mx="5%" isAnimated />

//       {/* Form Component */}
//       <Form1 />

//       {/* Button Group */}
//       <ButtonGroup mt="5%" w="100%">
//         <Flex w="100%" justifyContent="space-between">
//           <Button
//             w="100%"
//             mt="10px"
//             colorScheme="green"
//             variant="solid"
//             onClick={() => {
//               toast({
//                 title: 'Account created.',
//                 description: "We've created your account for you.",
//                 status: 'success',
//                 duration: 3000,
//                 isClosable: true,
//               });
//               setStep(100);
//             }}
//           >
//             Start my Tax Return
//           </Button>
//         </Flex>
//       </ButtonGroup>
//     </Box>
//   );
// }

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Progress,
//   useToast,
// } from '@chakra-ui/react';

// const Form1 = ({ onComplete }) => {
//   const [show, setShow] = useState(false);
//   const [panId, setPanId] = useState('');
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const handleClick = () => setShow(!show);
//   const handlePanIdChange = (e) => setPanId(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (panId.length === 10) {
//       try {
//         const response = await fetch('https://api.example.com/getUserDetails', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ panId }),
//         });
//         const data = await response.json();
//         setUserData({
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//         });
//         onComplete();
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     }
//   };

//   return (
//     <Box as="form" onSubmit={handleSubmit} width="100%">
//       <Heading textAlign="center" fontWeight="700" fontSize="23px" mb="5%">
//         Sign up for the easy way to do tax return.
//       </Heading>
//       <FormControl mt="4%">
//         <FormLabel htmlFor="pan-id">PAN ID</FormLabel>
//         <Input id="pan-id" placeholder="Enter PAN ID" value={panId} onChange={handlePanIdChange} bg="white" />
//       </FormControl>
//       <Button mt="4%" colorScheme="blue" type="submit" width="100%">Submit</Button>
//       <Flex direction="column" gap="15px" mt="4%">
//         <FormControl>
//           <FormLabel>First Name</FormLabel>
//           <Input value={userData.firstName} readOnly />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Last Name</FormLabel>
//           <Input value={userData.lastName} readOnly />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Email Address</FormLabel>
//           <Input value={userData.email} readOnly />
//         </FormControl>
//       </Flex>
//       <FormControl mt="4%">
//         <FormLabel>Password</FormLabel>
//         <InputGroup size="md">
//           <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>{show ? 'Hide' : 'Show'}</Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//     </Box>
//   );
// };


// export default function Multistep() {
//   const toast = useToast();
//   const navigate = useNavigate();
//   const [step, setStep] = useState(20);

//   const handleUploadRedirect = () => navigate('/upload-pdf');

//   return (
//     <Box
//       bg="white"
//       borderWidth="1px"
//       rounded="lg"
//       shadow="1px 1px 3px rgba(0,0,0,0.3)"
//       maxWidth={450}
//       width="100%"
//       p={6}
//       m="20px auto"
//     >
//       <Progress hasStripe value={step} mb="5%" mx="5%" isAnimated />
//       <Form1 onComplete={() => setStep(100)} />
//       <ButtonGroup mt="5%" w="100%">
//         <Flex w="100%" direction="column" gap={3}>
//           <Button
//             w="100%"
//             colorScheme="green"
//             variant="solid"
//             onClick={() => {
//               toast({
//                 title: 'Account created.',
//                 description: "We've created your account for you.",
//                 status: 'success',
//                 duration: 3000,
//                 isClosable: true,
//               });
//               setStep(100);
//             }}
//           >
//             Start my Tax Return
//           </Button>
//           <Button w="100%" colorScheme="blue" variant="solid" onClick={handleUploadRedirect}>
//             Upload PDF
//           </Button>
//         </Flex>
//       </ButtonGroup>
//     </Box>
//   );
// }

import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  useToast,
} from '@chakra-ui/react';

const Form1 = ({ onComplete }) => {
  const [show, setShow] = useState(false);
  const [panId, setPanId] = useState('');
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleClick = () => setShow(!show);
  const handlePanIdChange = (e) => setPanId(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (panId.length === 10) {
      try {
        const response = await fetch('https://api.example.com/getUserDetails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ panId }),
        });
        const data = await response.json();
        setUserData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        });
        onComplete();
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} className="form">
      <Heading textAlign="center" fontWeight="700" className="heading" mb="5%">
        Sign up for the easy way to do tax return.
      </Heading>
      <FormControl className="form-control">
        <FormLabel htmlFor="pan-id">PAN ID</FormLabel>
        <Input id="pan-id" placeholder="Enter PAN ID" value={panId} onChange={handlePanIdChange} bg="white" />
      </FormControl>
      <Button className="button" colorScheme="blue" type="submit" width="100%">Submit</Button>
      <Flex direction="column" className="flex-container">
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input value={userData.firstName} readOnly />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input value={userData.lastName} readOnly />
        </FormControl>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input value={userData.email} readOnly />
        </FormControl>
      </Flex>
      <FormControl className="form-control">
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>{show ? 'Hide' : 'Show'}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default function Multistep() {
  const toast = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(20);

  const handleUploadRedirect = () => navigate('/upload-pdf');

  return (
    <Box
      bg="white"
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={900}
      width="100%"
      p={6}
      m="20px auto"
    >
      <Progress hasStripe value={step} mb="5%" mx="5%" isAnimated />
      <Form1 onComplete={() => setStep(100)} />
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" direction="column" gap={3}>
          <Button
            w="100%"
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
              setStep(100);
            }}
          >
            Start my Tax Return
          </Button>
          <Button w="100%" colorScheme="blue" variant="solid" onClick={handleUploadRedirect}>
            Upload PDF
          </Button>
        </Flex>
      </ButtonGroup>
    </Box>
  );
}