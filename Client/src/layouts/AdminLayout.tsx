
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-full w-full bg-detailSectionBgHero'>
      <Outlet/>
    </div>
  )
}

export default AdminLayout