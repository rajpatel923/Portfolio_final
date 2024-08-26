import React from 'react'

const AdminNav = () => {
  return (
    <>
        <div className='w-full h-[10vh] flex items-center justify-between text-white text-xl px-10 '>
            <div>
                <h1>patelraj923</h1>
            </div>

            <div>
                <ul className='flex list-none gap-10'>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Blogs</li>
                </ul>
            </div>

            <div>
                <button>Login</button>
            </div>
        </div>
    </>
  )
}

export default AdminNav