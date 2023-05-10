import { Post } from "./Post";
import { Header } from "./components/Header";
import "./style.css"

const App = () => {

  return (
    <div>
      <Header/>
      <Post
        author="Gabriel Jorge"
        content="Tem mais gente feia que bonita em Madureira!"
      />
      <Post
        author="Thayna Jorge"
        content="Gabriel está sempre atrasado!"
      />
    </div>
  )
}

export default App
