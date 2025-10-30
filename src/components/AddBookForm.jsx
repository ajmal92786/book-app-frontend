import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://book-app-backend-murex-one.vercel.app/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw "Failed to add book";
      }

      const data = await response.json();
      console.log("Book added: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="author">Author:</label>
        <br />
        <input
          type="text"
          name="author"
          id="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="publishedYear">Published Year:</label>
        <br />
        <input
          type="number"
          name="publishedYear"
          id="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="genre">Genre:</label>
        <br />
        <input
          type="text"
          name="genre"
          id="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="language">Language:</label>
        <br />
        <input
          type="text"
          name="language"
          id="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="country">Country:</label>
        <br />
        <input
          type="text"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="summary">Summary:</label>
        <br />
        <input
          type="text"
          name="summary"
          id="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="coverImageUrl">Cover Image Url:</label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          id="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookForm;
