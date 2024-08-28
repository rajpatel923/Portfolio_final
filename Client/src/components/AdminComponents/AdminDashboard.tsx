import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminDashboard = () => {
    const [user, setUser] = useState(null);

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
  
    if (!user) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Welcome, {user.email}</h1>
        <h1>{user.firstname}</h1>
        {/* Display other user information */}
      </div>
    );
}

export default AdminDashboard