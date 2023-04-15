import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {

    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
  

    const handleClick =(e) => {
        e.preventDefault()
        const employee={id,date,status}
        console.log(employee)
        fetch("http://localhost:8080/employee/add",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(employee)
        }).then(() =>{
            console.log("new employee added",employee)
        })
    }
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={handleClick}>SUBMIT</Button>
      <Button variant="contained" className='form'>RESET</Button>
    </Stack>
  );
}