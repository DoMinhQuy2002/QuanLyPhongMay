import { Center, Input, Select} from '@chakra-ui/react';
import { Text, Button, Stack, Link, useToast } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/QuanLyPhongMay/QuanLyPM/src/service/apiconfig';
import { useNavigate } from 'react-router-dom';

export default function AddDevice() {

    const [IDDevice, setIDDevice] = useState("");
    const [IDRoom, setIDRoom] = useState("");
    const [PCCODE, setPCCODE] = useState("");
    const [NumberOfComputerComponents, setNumberOfComputerComponents] = useState("");
    const [QuantityOfSoftware, setQuantityOfSoftware] = useState("");
    const [Status, setStatus] = useState("");
    const [Note, setNote] = useState("");
    const [CreatedAt, setCreatedAt] = useState("");
    const [UpdatedAt, setUpdatedAt] = useState("");

    const usenavigate = useNavigate();
    const toast = useToast();

    const postDevice = async (e) => {
        e.preventDefault();


        if (validate()) {
            await axios.post(`${API}${APIName.Device}/AddDevice`,
                {
                    "IDDevice": `${IDDevice}`,
                    "IDRoom": `${IDRoom}`,
                    "PCCODE": `${PCCODE}`,
                    "NumberOfComputerComponents": `${NumberOfComputerComponents}`,
                    "QuantityOfSoftware": `${QuantityOfSoftware}`,
                    "Status": `${Status}`,
                    "Note": `${Note}`,
                    "CreatedAt": `${CreatedAt}`,
                    "UpdatedAt": `${UpdatedAt}`
                }
            )
                .then((response) => {
                    alert('Success');
                    console.log(response.data);
                    usenavigate('/devicepage');
                })
                .catch(function (error) {
                    alert('error');
                    console.log(error);
                });
        }

    };

    const validate = () => {
        let result = true;
        if (IDDevice === '' || IDDevice === null) {
            result = false;
            alert('Please Enter ID Device');
        }
        if (IDRoom === '' || IDRoom === null) {
            result = false;
            alert('Please Enter Id Room');
        }
        if (PCCODE === '' || PCCODE === null) {
            result = false;
            alert('Please Enter PC CODE');
        }
        if (NumberOfComputerComponents === '' || NumberOfComputerComponents === null) {
            result = false;
            alert('Please Enter Number Of Computer Components');
        }
        if (QuantityOfSoftware === '' || QuantityOfSoftware === null) {
            result = false;
            alert('Please Enter Quantity Of Software');
        }
        if (Status === '' || Status === null) {
            result = false;
            alert('Please Enter Status');
        }
        if (Note === '' || Note === null) {
            result = false;
            alert('Please Enter Note');
        }
        return result;
    }

    return (
        <>
            <form onSubmit={postDevice}>
                <Center>
                    <Text fontSize='40px' as='b' color='Blue'>Add Device</Text>
                </Center>
                <br />
                <Center>
                    <Text fontSize='20px' marginRight={730} as='b'>ID Device</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Device' marginBottom='5' width='50%' onChange={(e) => setIDDevice(e.target.value)} value={IDDevice} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={740} as='b'>ID Room</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Room' marginBottom='5' width='50%' onChange={(e) => setIDRoom(e.target.value)} value={IDRoom} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={740} as='b'>PC Code</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='PC Code' marginBottom='9' width='50%' onChange={(e) => setPCCODE(e.target.value)} value={PCCODE} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={490} as='b'>Number Of Computer Components</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Subject' marginBottom='9' width='50%' onChange={(e) => setNumberOfComputerComponents(e.target.value)} value={NumberOfComputerComponents} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={620} as='b'>Quantity Of Software</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Quantity Of Software' marginBottom='5' width='50%' onChange={(e) => setQuantityOfSoftware(e.target.value)} value={QuantityOfSoftware} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={760} as='b'>Status</Text>
                </Center>
                <Center>
                        <Select variant='filled'  placeholder='Select Status' onChange={(e) => setStatus(e.target.value)} value={Status} marginBottom='9' width='50%'>
                            <option>Damaged</option>
                            <option>Undamaged</option>
                        </Select>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={770} as='b'>Note</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Note' marginBottom='9' width='50%' onChange={(e) => setNote(e.target.value)} value={Note} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={720} as='b'>Created At</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Created At' type="datetime-local" marginBottom='5' width='50%' onChange={(e) => setCreatedAt(e.target.value)} value={CreatedAt} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={710} as='b'>Updated At</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Updated At' type="datetime-local" marginBottom='9' width='50%' onChange={(e) => setUpdatedAt(e.target.value)} value={UpdatedAt} />
                </Center>

                <Center>
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='blue' rightIcon={<AddIcon />} type='submit'
                            onClick={() =>
                                toast({
                                    title: 'Loading',
                                    status: 'loading',
                                    duration: 500,
                                    isClosable: true,
                                })
                            }>Add</Button>
                        <Link href='/devicepage'>
                            <Button colorScheme='blue' rightIcon={<CloseIcon />}
                                onClick={() =>
                                    toast({
                                        title: 'Loading',
                                        status: 'loading',
                                        duration: 500,
                                        isClosable: true,
                                    })
                                }>Cancel</Button>
                        </Link>

                    </Stack>
                </Center>
            </form>
        </>
    );
}