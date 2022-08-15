import './App.css';

import{users,adminName} from './data';
import ListOfUsers from './Components/ListOfUsers';


function App() {
  const handleAlert=(user)=>{
    alert(user.name)
  };
  return (
    <div className="App">
      <ListOfUsers 
      users={users} 
      adminName={adminName}
      handleAlert={handleAlert}>
      
<img src="/coca.png" width={190} height={80}/>
      <img src="/orange.png" width={180} height={100}/>
      <img src="/total.png" width={200} height={100}/>
</ListOfUsers>
      
      
    </div>
  );
}

export default App;
