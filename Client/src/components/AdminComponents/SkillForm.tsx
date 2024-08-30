import React, { useState, ChangeEvent, FormEvent } from "react";

interface SkillsFormProps {
  closeModal: () => void;
}

interface FormData {
  skillTitle: string;
  skillDesp: string;
  usageDesp: string;
  whyIlike: string;
  bgCoustomeColor: string;
  skillImage: File | null;
  skillBodyImage: File | null;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState<FormData>({
    skillTitle: "",
    skillDesp: "",
    usageDesp: "",
    whyIlike: "",
    bgCoustomeColor: "",
    skillImage: null,
    skillBodyImage: null,
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
    console.log("Skills Form Data:", formData);
    closeModal(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Add Skill</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Title</label>
            <input
              type="text"
              name="skillTitle"
              value={formData.skillTitle}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter skill title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Description</label>
            <textarea
              name="skillDesp"
              value={formData.skillDesp}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe the skill"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Usage Description</label>
            <textarea
              name="usageDesp"
              value={formData.usageDesp}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe how you use this skill"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Why I Like It</label>
            <textarea
              name="whyIlike"
              value={formData.whyIlike}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Explain why you like this skill"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Background Color</label>
            <input
              type="color"
              name="bgCoustomeColor"
              value={formData.bgCoustomeColor}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Image</label>
            <input
              type="file"
              name="skillImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Body Image</label>
            <input
              type="file"
              name="skillBodyImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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

export default SkillsForm;
