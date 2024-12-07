import { useState } from "react";

const PostGig = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description && category) {
      // Save the gig (you could save this to local storage or handle as needed)
      const newGig = {
        title,
        description,
        category,
      };
      console.log("New gig posted:", newGig);

      // Reset the form after submission
      setTitle("");
      setDescription("");
      setCategory("");
      setSubmitted(true);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Post a New Gig</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Gig Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Gig Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select a category</option>
            <option value="Design">Design</option>
            <option value="Programming">Programming</option>
            <option value="Marketing">Marketing</option>
            <option value="Tutoring">Tutoring</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Post Gig
        </button>
      </form>

      {submitted && (
        <div className="mt-4 text-green-600">
          <p>Your gig has been posted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default PostGig;
