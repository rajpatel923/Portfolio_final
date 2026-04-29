
import AdminNavbar from '../components/AdminComponents/AdminNavBar'

import AdminHero from '../components/AdminComponents/AdminHero';
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from '../store/authStore';
import Loader from '../components/Loader';

const AdminPage = () => {

   const { user } = useAuthStore()

   if(user?.email != import.meta.env.VITE_ADMIN_EMAIL){
    return<>
      <Loader/>
    </>
   }

  return (
    <div>
        <AdminNavbar user_image={user?.user_image}/>
        <AdminHero/>
        <Toaster/>
    </div>
  )
}

export default AdminPage