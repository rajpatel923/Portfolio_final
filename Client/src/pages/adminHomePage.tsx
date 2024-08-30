
import { useEffect, useState } from 'react';
import AdminNavbar from '../components/AdminComponents/AdminNavBar'
import axios from 'axios';
import AdminHero from '../components/AdminComponents/AdminHero';

interface userProps{
  email: string,
  firstname:string,
  lastname:string,
  user_image:string,
}
const AdminPage = () => {
  const [user, setUser] = useState<userProps>();

    useEffect(() => {
      // Fetch user information from the backend
      axios.get(`/api/v1/api/user`, { withCredentials: true })
        .then(response => {
          console.log(response.data)
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }, []);
  
  return (
    <div>
        <AdminNavbar user_image={user?.user_image}/>
        <AdminHero/>
    </div>
  )
}

export default AdminPage