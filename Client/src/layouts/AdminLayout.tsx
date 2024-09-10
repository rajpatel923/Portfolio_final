
import { Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';
import Loader from '../components/Loader';

const AdminLayout = () => {
  const { checkAuth, isCheckingAuth } = useAuthStore();
    useEffect(() => {
      checkAuth()
    }, [checkAuth]);

    if (isCheckingAuth){
      return <Loader/>
    }
  return (
    <div className='h-full w-full bg-detailSectionBgHero'>
      <Outlet/>
    </div>
  )
}

export default AdminLayout