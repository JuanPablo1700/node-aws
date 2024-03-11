import { useState } from "react"
import axios from "axios"

const App = () => {

  const [post, setPost] = useState({
    title: "",
    photo: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('photo', post.photo);
    await axios.post("http://localhost:3000/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" onChange={e => setPost({ ...post, title: e.target.value })} />
        <input type="file" name="photo" id="photo" onChange={e => setPost({ ...post, photo: e.target.files[0] })} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default App