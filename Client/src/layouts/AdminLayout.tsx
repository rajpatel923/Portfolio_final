
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen w-full bg-white'>
      <Outlet/>
    </div>
  )
}

export default AdminLayout