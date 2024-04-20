import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/QuanLyPhongMay/QuanLyPM/src/service/apiconfig';
import { useNavigate } from 'react-router-dom';

export default function AddAssignment() {

    const [IDAssignment, setIDAssignment] = useState("");
    const [IDLogin, setIDLogin] = useState("");
    const [Lecturers, setLecturers] = useState("");
    const [Subject, setSubject] = useState("");
    const [DMY, setDMY] = useState("");
    const [ShiftTime, setShiftTime] = useState("");
    const [CreatedAt, setCreatedAt] = useState("");
    const [UpdatedAt, setUpdatedAt] = useState("");

    const usenavigate = useNavigate();

    const postAssignment = async (e) => {
        e.preventDefault();


        if (validate()) {
            await axios.post(`${API}${APIName.Assignment}/AddAssignment`,
                {
                    "IDAssignment": `${IDAssignment}`,
                    "IDLogin": `${IDLogin}`,
                    "Lecturers": `${Lecturers}`,
                    "Subject": `${Subject}`,
                    "DMY": `${DMY}`,
                    "ShiftTime": `${ShiftTime}`,
                    "CreatedAt": `${CreatedAt}`,
                    "UpdatedAt": `${UpdatedAt}`
                }
            )
                .then((response) => {
                    alert('Success');
                    console.log(response.data);
                    usenavigate('/assignmentpage');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    };

    const validate = () => {
        let result = true;
        if (IDAssignment === '' || IDAssignment === null) {
            result = false;
            alert('Please Enter ID Assignment');
        }
        if (IDLogin === '' || IDLogin === null) {
            result = false;
            alert('Please Enter ID Login');
        }
        if (Lecturers === '' || Lecturers === null) {
            result = false;
            alert('Please Enter Lecturers');
        }
        if (Subject === '' || Subject === null) {
            result = false;
            alert('Please Enter Subject');
        }
        if (DMY === '' || DMY === null) {
            result = false;
            alert('Please Enter Day Month Year');
        }
        if (ShiftTime === '' || ShiftTime === null) {
            result = false;
            alert('Please Enter Shift Time');
        }
        return result;
    }

    return (
        <>
            <form onSubmit={postAssignment}>
                <Center>
                    <Text fontSize='40px' as='b' color='Blue'>Add Assignment</Text>
                </Center>
                <br />
                <Center>
                    <Text fontSize='20px' marginRight={680} as='b'>ID Assignment</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Assignment' marginBottom='5' width='50%' onChange={(e) => setIDAssignment(e.target.value)} value={IDAssignment}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={740} as='b'>ID Login</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Login' marginBottom='5' width='50%' onChange={(e) => setIDLogin(e.target.value)} value={IDLogin}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={730} as='b'>Lecturers</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Lecturers' marginBottom='5' width='50%' onChange={(e) => setLecturers(e.target.value)} value={Lecturers}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={750} as='b'>Subject</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Subject' marginBottom='5' width='50%' onChange={(e) => setSubject(e.target.value)} value={Subject}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={720} as='b'>Work Day</Text>
                </Center>
                <Center>
                <Input variant='filled' placeholder='Work Day' type="datetime-local" marginBottom='9' width='50%' onChange={(e) => setDMY(e.target.value)} value={DMY}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={720} as='b'>Shift Time</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Shift Time' marginBottom='9' width='50%' onChange={(e) => setShiftTime(e.target.value)} value={ShiftTime}/>
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
                        <Button colorScheme='blue' rightIcon={<AddIcon />} type='submit'>Add</Button>
                        <Link href='/assignmentpage'>
                            <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                        </Link>

                    </Stack>
                </Center>
            </form>
        </>
    );
}