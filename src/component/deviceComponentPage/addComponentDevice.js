import { Center, Input, Select } from '@chakra-ui/react';
import { Text, Button, Stack, Link, useToast } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/QuanLyPhongMay/QuanLyPM/src/service/apiconfig';
import { useNavigate } from 'react-router-dom';

export default function AddDeviceComponent() {

    const [IDDEVICEComponent, setIDDEVICEComponent] = useState("");
    const [IDDevice, setIDDevice] = useState("");
    const [PCCODE, setPCCODE] = useState("");
    const [DEVICEComponentName, setDEVICEComponentName] = useState("");
    const [Status, setStatus] = useState("");
    const [Note, setNote] = useState("");
    const [CreatedAt, setCreatedAt] = useState("");
    const [UpdatedAt, setUpdatedAt] = useState("");

    const usenavigate = useNavigate();
    const toast = useToast();

    const postDeviceCompoment = async (e) => {
        e.preventDefault();


        if (validate()) {
            await axios.post(`${API}${APIName.DeviceCompoment}/AddDeviceCompoment`,
                {
                    "IDDEVICEComponent": `${IDDEVICEComponent}`,
                    "IDDevice": `${IDDevice}`,
                    "PCCODE": `${PCCODE}`,
                    "DEVICEComponentName": `${DEVICEComponentName}`,
                    "Status": `${Status}`,
                    "Note": `${Note}`,
                    "CreatedAt": `${CreatedAt}`,
                    "UpdatedAt": `${UpdatedAt}`
                }
            )
                .then((response) => {
                    alert('Success');
                    console.log(response.data);
                    usenavigate('/deviceComponentpage');
                })
                .catch(function (error) {
                    alert('error');
                    console.log(error);
                });
        }

    };

    const validate = () => {
        let result = true;
        if (IDDEVICEComponent === '' || IDDEVICEComponent === null) {
            result = false;
            alert('Please Enter ID Device');
        }
        if (IDDevice === '' || IDDevice === null) {
            result = false;
            alert('Please Enter Id Room');
        }
        if (PCCODE === '' || PCCODE === null) {
            result = false;
            alert('Please Enter PC CODE');
        }
        if (DEVICEComponentName === '' || DEVICEComponentName === null) {
            result = false;
            alert('Please Enter Number Of Computer Components');
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
            <form onSubmit={postDeviceCompoment}>
                <Center>
                    <Text fontSize='40px' as='b' color='Blue'>Add Device Component</Text>
                </Center>
                <br />
                <Center>
                    <Text fontSize='20px' marginRight={615} as='b'>ID Device Component</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Device Component' marginBottom='5' width='50%' onChange={(e) => setIDDEVICEComponent(e.target.value)} value={IDDEVICEComponent} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={730} as='b'>ID Device</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Device' marginBottom='5' width='50%' onChange={(e) => setIDDevice(e.target.value)} value={IDDevice} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={740} as='b'>PC Code</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='PC Code' marginBottom='9' width='50%' onChange={(e) => setPCCODE(e.target.value)} value={PCCODE} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={580} as='b'>Device Component Name</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Device Component Name' marginBottom='9' width='50%' onChange={(e) => setDEVICEComponentName(e.target.value)} value={DEVICEComponentName} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={760} as='b'>Status</Text>
                </Center>
                <Center>
                    <Select variant='filled' placeholder='Select Status' onChange={(e) => setStatus(e.target.value)} value={Status} marginBottom='9' width='50%'>
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
                        <Link href='/deviceComponentpage'>
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