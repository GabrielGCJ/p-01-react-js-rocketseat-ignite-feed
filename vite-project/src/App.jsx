import "./global.css"
import styles from "./App.module.css"

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";



const App = () => {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>        
          <Sidebar/>        
        <main>
          <Post
        author="Gabriel Jorge"
        content="Tem mais gente feia que bonita em Madureira!"
      />
      <Post
        author="Thayna Jorge"
        content="Gabriel está sempre atrasado!"
      />
        </main>
      </div>
    </div>
  )
}

export default App
