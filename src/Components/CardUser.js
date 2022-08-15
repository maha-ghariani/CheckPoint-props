import React from 'react'
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
function CardUser({user,handleAlert}) {
 const handleClick=()=>{
  handleAlert(user);
 }
  return (
    <Paper elevation={3}>
    <Avatar alt={user.name} src={user.image} sx={{ width:80, height: 80, }}
    />
   <h1 style={{color:"#7ECC49"}}>{user.name}</h1>
   <h2>{user.profession}</h2>
   <Button variant="contained" onClick={handleClick}>Show my name</Button>
    </Paper>
  )
}

export default CardUser