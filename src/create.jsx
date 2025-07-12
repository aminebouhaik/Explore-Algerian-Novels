import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Samia Ben Driss');
  const [customAuthor, setCustomAuthor] = useState('');
  const [useCustomAuthor, setUseCustomAuthor] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      title,
      body,
      author: useCustomAuthor ? customAuthor : author
    };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    });
  };

  const handleAuthorChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setUseCustomAuthor(true);
      setAuthor('');
    } else {
      setUseCustomAuthor(false);
      setAuthor(value);
    }
  };

  return (
    <div className="create">
      <h2>Add a New Novel Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Novel Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description / Summary:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Author:</label>
        <select value={useCustomAuthor ? 'custom' : author} onChange={handleAuthorChange}>
          <option value="Samia Ben Driss">Samia Ben Driss</option>
          <option value="Nassima Ben Abdallah">Nassima Ben Abdallah</option>
          <option value="Ezzedine Jalaouji">Ezzedine Jalaouji</option>
          <option value="Aisha Bennour">Aisha Bennour</option>
          <option value="Mourad Boukerzaza">Mourad Boukerzaza</option>
          <option value="custom">➕ Add new author</option>
        </select>

        {useCustomAuthor && (
          <input
            type="text"
            placeholder="Enter new author name"
            value={customAuthor}
            onChange={(e) => setCustomAuthor(e.target.value)}
            required
          />
        )}

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;

