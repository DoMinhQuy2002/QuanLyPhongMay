import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link } from '@chakra-ui/react';
import { DeleteIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/QuanLyPhongMay/QuanLyPM/src/service/apiconfig';

export default function DeleteDevice() {

    const [IDDevice, setIDDevice] = useState("");
    const usenavigate = useNavigate();

    const deleteDevice = async () => {

        await axios.delete(`${API}${APIName.Device}/${IDDevice}`
        )
            .then((response) => {
                alert('Successful')
                console.log(response.data);
                usenavigate('/devicepage');
            })
            .catch(function (error) {
                alert('Error')
                console.log(error);
            });

    };

    return (
        <>

            <Center>
                <Text fontSize='40px' as='b' color='Blue'>Delete Device</Text>
            </Center>
            <br />
            <form onSubmit={deleteDevice}>
                <Center>
                    <Text fontSize='20px' marginRight={745} as='b'>ID Device</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Device' marginBottom='5' width='50%' onChange={(e) => setIDDevice(e.target.value)} value={IDDevice} />
                </Center>

                <Center>
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='blue' rightIcon={<DeleteIcon />} type='submit'>Delete</Button>
                        <Link href='/devicepage'>
                            <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                        </Link>

                    </Stack>
                </Center>
            </form>

        </>
    );
}