import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link } from '@chakra-ui/react';
import { DeleteIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/QuanLyPhongMay/QuanLyPM/src/service/apiconfig';

export default function DeleteRoom() {

    const [IdRoom, setIdRoom] = useState("");
    const usenavigate = useNavigate();

    const deleteRoom = async () => {

        await axios.delete(`${API}${APIName.Room}/${IdRoom}`
        )
            .then((response) => {
                alert('Successful')
                console.log(response.data);
                usenavigate('/roompage');
            })
            .catch(function (error) {
                alert('Error')
                console.log(error);
            });

    };

    return (
        <>

            <Center>
                <Text fontSize='40px' as='b' color='Blue'>Delete Room</Text>
            </Center>
            <br />
            <form onSubmit={deleteRoom}>
                <Center>
                    <Text fontSize='20px' marginRight={745} as='b'>ID Room</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Room' marginBottom='5' width='50%' onChange={(e) => setIdRoom(e.target.value)} value={IdRoom} />
                </Center>

                <Center>
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='blue' rightIcon={<DeleteIcon />} type='submit'>Delete</Button>
                        <Link href='/roompage'>
                            <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                        </Link>

                    </Stack>
                </Center>
            </form>

        </>
    );
}