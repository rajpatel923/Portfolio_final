import React, { useState } from "react";
import SkillsForm from "./SkillForm"; 
import ProjectForm from "./ProjectForm";
import ArticleForm from "./ArticleForm";
import Modal from "./closeModal";

const AdminHero = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const resetScreen = () => {
    // Logic to reset any states or form data
    closeModal(); // Close modal if open
    // Additional reset logic if needed
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/3 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-800 tracking-tight animate-fade-in-down">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
            I am a passionate developer with experience in creating dynamic web applications.
            Manage your skills, projects, and articles with ease through this admin dashboard.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            <button
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
              onClick={() => openModal(<SkillsForm closeModal={closeModal} />)}
            >
              Update Skills
            </button>
            <button
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition transform hover:scale-105 shadow-lg"
              onClick={() => openModal(<ProjectForm closeModal={closeModal} />)}
            >
              Edit Project
            </button>
            <button
              className="bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition transform hover:scale-105 shadow-lg"
              onClick={() => openModal(<ArticleForm closeModal={closeModal} />)}
            >
              Add Article
            </button>
          </div>
          <button
            className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition transform hover:scale-105 shadow-lg"
            onClick={resetScreen}
          >
            Reset Screen
          </button>
        </div>
        <div className="lg:w-1/3 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="https://imgs.search.brave.com/DayigHK3TKV9ekSQwt12lsIimn_BRSCgNpG6cdnoVsE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbHZh/cm90cmlnby5jb20v/YmxvZy9hc3NldHMv/aW1ncy8yMDIxLTEx/LTIwL3Bob3RvZ3Jh/cGh5LXBvcnRmb2xp/by13ZWJzaXRlLmpw/ZWc"
            alt="Hero Image"
            className="w-64 h-80 object-cover rounded-lg shadow-lg animate-fade-in"
          />
        </div>
      </div>

      {/* <div className="flex justify-center lg:justify-start mt-12 space-x-4">
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div> */}

      {modalContent && <Modal>{modalContent}</Modal>}
    </div>
  );
};

export default AdminHero;
