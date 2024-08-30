// ArticlePostForm.js
import React, { useState } from "react";

const ArticlePostForm = ({ closeModal }) => {
  const [articleMessage, setArticleMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Article Form Data:", articleMessage);
    closeModal(); // Close modal after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Post New Article</h2>
      <div>
        <label className="block text-sm font-bold">Article Message</label>
        <textarea
          name="articleMessage"
          value={articleMessage}
          onChange={(e) => setArticleMessage(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default ArticlePostForm;
