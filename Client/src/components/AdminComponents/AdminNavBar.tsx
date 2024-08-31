import {  useState } from 'react';
import { FaUserEdit, FaProjectDiagram, FaTools, FaFileAlt, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

interface AdminNavBarProps{
    user_image?: string
}

const AdminNavbar = ({user_image}:AdminNavBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary_bg p-4 h-[6vh] min-h-[60px]">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={`${user_image}`} alt="Logo" className="h-8 w-8 mr-2 border border-none rounded-full" />
                    <span className="text-white font-bold text-xl">Admin Panel</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <ul
                    className={`fixed top-0 right-0 h-full w-64 bg-primary_bg p-8 text-white transition-transform transform ${
                        isOpen ? 'translate-x-0 duration-[0.5s]' : 'translate-x-full duration-[0.5s]'
                    } lg:static lg:flex lg:flex-row lg:items-center lg:space-x-4 lg:bg-transparent lg:translate-x-0 lg:p-0 lg:h-auto lg:w-auto gap-7`}
                >
                    <li className="flex items-center space-x-2">
                        <FaUserEdit />
                        <a href="/admin/about-me" className="hover:text-blue-400">Edit About Me</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaProjectDiagram />
                        <a href="/admin/projects" className="hover:text-blue-400">Manage Projects</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaTools />
                        <a href="/admin/skills" className="hover:text-blue-400">Edit Skills</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaFileAlt />
                        <a href="/admin/articles" className="hover:text-blue-400">Manage Articles</a>
                    </li>
                
                    <li className="flex items-center space-x-2">
                        <FaSignOutAlt />
                        <a href="/logout" className="hover:text-blue-400">Logout</a>
                    </li>
        
                    <button onClick={toggleMenu} className="text-white lg:hidden" >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;
