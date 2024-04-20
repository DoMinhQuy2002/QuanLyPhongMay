import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link, useToast } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/QuanLyPhongMay/QuanLyPM/src/service/apiconfig';
import { useNavigate } from 'react-router-dom';

export default function AddRoom() {

    const [IdRoom, setIdRoom] = useState("");
    const [RoomName, setRoomName] = useState("");
    const [Location, setLocation] = useState("");
    const [Subject, setSubject] = useState("");
    const [DeviceQuantity, setDeviceQuantity] = useState("");
    const [IDAssignment, setIDAssignment] = useState("");
    const [CreatedAt, setCreatedAt] = useState("");
    const [UpdatedAt, setUpdatedAt] = useState("");
    
    const usenavigate = useNavigate();
    const toast = useToast();

    const postRoom = async (e) => {
        e.preventDefault();


        if (validate()) {
            await axios.post(`${API}${APIName.Room}/AddRoom`,
                {
                    "IdRoom": `${IdRoom}`,
                    "RoomName": `${RoomName}`,
                    "Location": `${Location}`,
                    "Subject": `${Subject}`,
                    "DeviceQuantity": `${DeviceQuantity}`,
                    "IDAssignment": `${IDAssignment}`,
                    "CreatedAt": `${CreatedAt}`,
                    "UpdatedAt": `${UpdatedAt}`
                }
            )
                .then((response) => {
                    alert('Success');
                    console.log(response.data);
                    usenavigate('/roompage');
                })
                .catch(function (error) {
                    alert('error');
                    console.log(error);
                });
        }

    };

    const validate = () => {
        let result = true;
        if (IdRoom === '' || IdRoom === null) {
            result = false;
            alert('Please Enter IdRoom');
        }
        if (RoomName === '' || RoomName === null) {
            result = false;
            alert('Please Enter Room Name');
        }
        if (Location === '' || Location === null) {
            result = false;
            alert('Please Enter Location');
        }
        if (Subject === '' || Subject === null) {
            result = false;
            alert('Please Enter Subject');
        }
        if (DeviceQuantity === '' || DeviceQuantity === null) {
            result = false;
            alert('Please Enter Device Quantity');
        }
        if (IDAssignment === '' || IDAssignment === null) {
            result = false;
            alert('Please Enter ID Assignment');
        }
        return result;
    }

    return (
        <>
            <form onSubmit={postRoom}>
                <Center>
                    <Text fontSize='40px' as='b' color='Blue'>Add Room</Text>
                </Center>
                <br />
                <Center>
                    <Text fontSize='20px' marginRight={740} as='b'>ID Room</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Room' marginBottom='5' width='50%' onChange={(e) => setIdRoom(e.target.value)} value={IdRoom} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={700} as='b'>Room Name</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Room Name' marginBottom='5' width='50%' onChange={(e) => setRoomName(e.target.value)} value={RoomName} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={740} as='b'>Location</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Location' marginBottom='9' width='50%' onChange={(e) => setLocation(e.target.value)} value={Location} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={750} as='b'>Subject</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Subject' marginBottom='9' width='50%' onChange={(e) => setSubject(e.target.value)} value={Subject} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={667} as='b'>Device Quantity</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Device Quantity' marginBottom='5' width='50%' onChange={(e) => setDeviceQuantity(e.target.value)} value={DeviceQuantity} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={680} as='b'>Id Assignment</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Id Assignment' marginBottom='9' width='50%' onChange={(e) => setIDAssignment(e.target.value)} value={IDAssignment} />
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
                        <Link href='/roompage'>
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