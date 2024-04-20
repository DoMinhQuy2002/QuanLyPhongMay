import { Stack, Text } from '@chakra-ui/react';
import { Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
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

export default function DevicePage() {
    const [Device, setDevice] = useState([]);

    const storedData = localStorage.getItem("Username");
    const toast = useToast();

    const getDevice = async () => {

        await axios.get(`${API}${APIName.Device}/GetDevice`
        )
            .then((response) => {
                console.log(response.data);
                setDevice(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    useEffect(() => {
        getDevice();
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
                            <Text fontSize='40px' as='b' color='Blue'>Device List</Text>
                        </Center>

                        <Stack direction='row-reverse' spacing={4}>
                            <Link href='/deletedevice'>
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

                            <Link href='/editdevice' >
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

                            <Link href='/adddevice'>
                                <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
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
                                        <Th>ID Device</Th>
                                        <Th>ID Room</Th>
                                        <Th>PC Code</Th>
                                        <Th>Number Of Computer Components</Th>
                                        <Th>Quantity Of Software</Th>
                                        <Th>Status</Th>
                                        <Th>Note</Th>
                                        <Th>Created At</Th>
                                        <Th>Updated At</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>

                                    {Device.map((data, index) =>
                                        <Tr key={index}>
                                            <Td>{data['IDDevice']}</Td>
                                            <Td>{data['IDRoom']}</Td>
                                            <Td>{data['PCCODE']}</Td>
                                            <Td>{data['NumberOfComputerComponents']}</Td>
                                            <Td><Center>{data['QuantityOfSoftware']}</Center></Td>
                                            <Td>{data['Status']}</Td>
                                            <Td>{data['Note']}</Td>
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