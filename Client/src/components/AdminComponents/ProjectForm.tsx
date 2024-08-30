import React, { useState, ChangeEvent, FormEvent } from "react";

interface ProjectUpdateFormProps {
  closeModal: () => void;
}

interface FormData {
  title: string;
  description: string;
  relatedSkills: string;
  category: string;
  completedDate: string;
  link: string;
  problemDesp: string;
  solutionDesp: string;
  resultDesp: string;
  projectImage: File | null;
  problemImage: File | null;
  solutionImage: File | null;
  resultImage: File | null;
}

const ProjectUpdateForm: React.FC<ProjectUpdateFormProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    relatedSkills: "",
    category: "",
    completedDate: "",
    link: "",
    problemDesp: "",
    solutionDesp: "",
    resultDesp: "",
    projectImage: null,
    problemImage: null,
    solutionImage: null,
    resultImage: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Project Form Data:", formData);
    closeModal(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Update Project</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter project title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Describe the project"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Related Skills</label>
            <input
              type="text"
              name="relatedSkills"
              value={formData.relatedSkills}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter related skills"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter project category"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Completed Date</label>
            <input
              type="date"
              name="completedDate"
              value={formData.completedDate}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Link</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Enter project link"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Problem Description</label>
            <textarea
              name="problemDesp"
              value={formData.problemDesp}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Describe the problem addressed by the project"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Solution Description</label>
            <textarea
              name="solutionDesp"
              value={formData.solutionDesp}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Describe the solution provided by the project"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Result Description</label>
            <textarea
              name="resultDesp"
              value={formData.resultDesp}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Describe the results achieved by the project"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Image</label>
            <input
              type="file"
              name="projectImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Problem Image</label>
            <input
              type="file"
              name="problemImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Solution Image</label>
            <input
              type="file"
              name="solutionImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Result Image</label>
            <input
              type="file"
              name="resultImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectUpdateForm;
