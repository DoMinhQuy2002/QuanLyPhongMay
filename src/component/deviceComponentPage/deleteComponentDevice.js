import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link } from '@chakra-ui/react';
import { DeleteIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/QuanLyPhongMay/QuanLyPM/src/service/apiconfig';

export default function DeleteDeviceComponent() {

    const [IDDEVICEComponent, setIDDEVICEComponent] = useState("");
    const usenavigate = useNavigate();

    const deleteDeviceCompoment = async () => {

        await axios.delete(`${API}${APIName.DeviceCompoment}/${IDDEVICEComponent}`
        )
            .then((response) => {
                alert('Successful')
                console.log(response.data);
                usenavigate('/deviceComponentpage');
            })
            .catch(function (error) {
                alert('Error')
                console.log(error);
            });

    };

    return (
        <>

            <Center>
                <Text fontSize='40px' as='b' color='Blue'>Delete Device Compoment</Text>
            </Center>
            <br />
            <form onSubmit={deleteDeviceCompoment}>
                <Center>
                    <Text fontSize='20px' marginRight={745} as='b'>ID Device Compoment</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Device Compoment' marginBottom='5' width='50%' onChange={(e) => setIDDEVICEComponent(e.target.value)} value={IDDEVICEComponent} />
                </Center>

                <Center>
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='blue' rightIcon={<DeleteIcon />} type='submit'>Delete</Button>
                        <Link href='/deviceComponentpage'>
                            <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                        </Link>

                    </Stack>
                </Center>
            </form>

        </>
    );
}