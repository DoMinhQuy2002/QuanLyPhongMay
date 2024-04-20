import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link } from '@chakra-ui/react';
import { DeleteIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/QuanLyPhongMay/QuanLyPM/src/service/apiconfig';

export default function DeleteRoom() {

    const [IDAssignment, setIDAssignment] = useState("");

    const usenavigate = useNavigate();

    const deleteAssignment = async () => {

        await axios.delete(`${API}${APIName.Assignment}/${IDAssignment}`
        )
            .then((response) => {
                alert('Successful')
                console.log(response.data);
                usenavigate('/assignmentpage');
            })
            .catch(function (error) {
                alert('Error')
                console.log(error);
            });

    };

    return (
        <>
            <form onSubmit={deleteAssignment}>
                <Center>
                    <Text fontSize='40px' as='b' color='Blue'>Delete Assignment</Text>
                </Center>
                <br />
                
                <Center>
                    <Text fontSize='20px' marginRight={690} as='b'>ID Assignment</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Assignment' marginBottom='5' width='50%' onChange={(e) => setIDAssignment(e.target.value)} value={IDAssignment} />
                </Center>

                <Center>
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='blue' rightIcon={<DeleteIcon />} type='submit'>Delete</Button>
                        <Link href='/assignmentpage'>
                            <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                        </Link>

                    </Stack>
                </Center>
            </form>
        </>
    );
}