import React from 'react'
import Box from '@mui/material/Box';
import CardUser from './CardUser';

function ListOfUsers(props) {
     const {users,adminName,handleAlert,children}=props;
  return (
 <div>
 <h1 style={{color:'#B8255F'}}>Admin Name: <span style={{fontFamily:'serif'}}>{adminName}</span></h1>
 <Box
 sx={{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent:'center',
  msFlexDirection:'row',
  '& > :not(style)': {
    m: 3,
    width: 300,
    height: 300,
  },
}}
  >
    

    {users.map((user)=>
        (
          <CardUser key={user.id} user={user} handleAlert={handleAlert}/>
        )
        )}
    </Box>
    <div>
    {children}
    </div>
 </div>
    
    
  )
}

export default ListOfUsers