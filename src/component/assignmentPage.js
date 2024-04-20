import { Stack, TabPanels, Text } from '@chakra-ui/react';
import { Tabs, TabPanel } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Link, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API, APIName } from '../service/apiconfig';
import { AiTwotoneHome } from 'react-icons/ai'
import { BiSolidDoorOpen } from 'react-icons/bi'
import { RiComputerFill } from 'react-icons/ri'
import { BiSolidComponent } from 'react-icons/bi'
import { MdAssignmentInd } from 'react-icons/md'

export default function AssignmentPage() {
    const [Assignment, setAssignment] = useState([]);

    const storedData = localStorage.getItem("Username");
    const toast = useToast();

    const getAssignment = async () => {

        await axios.get(`${API}${APIName.Assignment}/GetAssignment`
        )
            .then((response) => {
                console.log(response.data);
                setAssignment(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    useEffect(() => {
        getAssignment();
    }, [])


    return (
        <>

            <Tabs variant='unstyled' width={1473}>
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

                <TabPanels>
                    <TabPanel>

                        <Center>
                            <Text fontSize='40px' as='b' color='Blue'>Assignment List</Text>
                        </Center>

                        <Stack direction='row-reverse' spacing={4}>
                            <Link href='/deleteassignment'>
                                <Button rightIcon={<DeleteIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Delete
                                </Button>
                            </Link>

                            <Link href='/editassignment'>
                                <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Edit
                                </Button>
                            </Link>

                            <Link href='/addassignment'>
                                <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline' onClick={() =>
                                    toast({
                                        title: 'Loading',
                                        status: 'loading',
                                        duration: 800,
                                        isClosable: true,
                                    })
                                }>
                                    Add
                                </Button>
                            </Link>
                        </Stack>

                        <TableContainer>
                            <br />
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Assignment</Th>
                                        <Th>ID Login</Th>
                                        <Th>Lecturers</Th>
                                        <Th>Subject</Th>
                                        <Th>Year/Mouth/Day Work</Th>
                                        <Th>Shiftt Time</Th>
                                        <Th>Created At</Th>
                                        <Th>Updated At</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {Assignment.map((data, index) =>
                                        <Tr key={index}>
                                            <Td><Center>{data['IDAssignment']}</Center></Td>
                                            <Td><Center>{data['IDLogin']}</Center></Td>
                                            <Td>{data['Lecturers']}</Td>
                                            <Td>{data['Subject']}</Td>
                                            <Td>{data['DMY']}</Td>
                                            <Td>{data['ShiftTime']}</Td>
                                            <Td>{data['CreatedAt']}</Td>
                                            <Td>{data['UpdatedAt']}</Td>
                                        </Tr>
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>

    );
}