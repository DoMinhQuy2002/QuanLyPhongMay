import {
    Button,
    Stack, Text, Link, useToast, Image, Box
} from '@chakra-ui/react'
import { AiTwotoneHome } from 'react-icons/ai'
import { BiSolidDoorOpen } from 'react-icons/bi'
import { RiComputerFill } from 'react-icons/ri'
import { BiSolidComponent } from 'react-icons/bi'
import { MdAssignmentInd } from 'react-icons/md'


export default function MasterPage() {

    const storedData = localStorage.getItem("Username");
    const toast = useToast();

    return (
        <>

            <Stack direction='row' spacing={0} marginTop='0' backgroundColor='blue.500' width={1473}>
                <Link href='/masterpage'>
                    <Button colorScheme='blue' variant='solid' >
                        <AiTwotoneHome /> HOME
                    </Button>
                </Link>
                <Link href='/roompage'>
                    <Button colorScheme='blue' variant='solid'>
                        <BiSolidDoorOpen /> ROOM
                    </Button>
                </Link>
                <Link href='/devicepage'>
                    <Button colorScheme='blue' variant='solid'>
                        <RiComputerFill /> DEVICE
                    </Button>
                </Link>
                <Link href='/deviceComponentpage'>
                    <Button colorScheme='blue' variant='solid'>
                        <BiSolidComponent /> DEVICE COMPONENT
                    </Button>
                </Link>
                <Link href='/assignmentpage'>
                    <Button colorScheme='blue' variant='solid'>
                        <MdAssignmentInd /> ASSIGNMENT
                    </Button>
                </Link>

                <Text colorScheme='blue' color='white' fontSize='22' as={'b'} marginLeft={150}>Hi {JSON.parse(storedData)}</Text>

                <Link href='/' marginLeft={500}>
                    <Button fontSize='20px' as='b' colorScheme='blue' 
                        onClick={() =>
                            toast({
                                title: 'Loading',
                                status: 'loading',
                                duration: 500,
                                isClosable: true,
                            })
                        }>Log Out</Button>
                </Link>

            </Stack>

            <Box >
                <Image src='wel.jpg' width='1473px' height='700' />
            </Box>


        </>
    )

}