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
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={`${user_image}`} alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-white font-bold text-xl">Admin Panel</span>
                </div>
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <ul
                    className={`fixed top-0 right-0 h-full w-64 bg-gray-900 p-8 text-white transition-transform transform ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:static md:flex md:flex-row md:items-center md:space-x-4 md:bg-transparent md:translate-x-0 md:p-0 md:h-auto md:w-auto gap-4`}
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
