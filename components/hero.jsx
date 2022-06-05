import { useDisclosure, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Input, Stack, Text, Show, Hide, Flex } from "@chakra-ui/react"
import React from "react";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} fontFamily='Poppins' bgColor='#2F80ED' color='#fff' w='98px' h='48px' onClick={onOpen}>
          Menu
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
                <Stack direction='Column'>
                    <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='#2F80ED'>Home</Text>
                    <Text my='16px' fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>About</Text>   
                    <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Service</Text>
                    <Text my='16px' fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Safety</Text>
                    <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Career</Text>
                </Stack>
                    <Button
                        my='16px'
                        size='md'
                        height='42px'
                        width='160px'
                        border='1px'
                        borderColor='#000000'
                        fontFamily='Poppins'
                        fontSize='16px'
                        >
                        Contact Us
                    </Button>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

const Hero = () => {
    return(
        <Box pt='48px' px='122px'>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Image src='/Favicon.ico' w='122px' h='122px' alt="logo" />
                <Flex display={{base:'inline', md:'inline', lg:'none', xl:'none', '2xl': 'none'}}>
                    <DrawerExample />
                </Flex>
                
                <Hide below='lg'>
                    <Stack direction='row' spacing='42px'>
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='#2F80ED'>Home</Text>
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>About</Text>   
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Service</Text>
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Safety</Text>
                        <Text fontFamily='Poppins' fontSize='21px' fontWeight='500' color='##333333'>Career</Text>
                    </Stack>
                    <Button
                        size='lg'
                        height='62px'
                        width='204px'
                        border='1px'
                        borderColor='#000000'
                        fontFamily='Poppins'
                        fontSize='22px'
                        >
                        Contact Us
                    </Button>
                </Hide>
            </Stack>
        </Box>
    )
}

export default Hero

