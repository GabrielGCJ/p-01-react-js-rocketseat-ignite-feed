import { Post } from "./Post";

const App = ()  => {

  return (
    <div>
      <Post 
        author= "Gabriel Jorge" 
        content= "Tem mais gente feia que bonita em Madureira!"
      />    
      <Post 
        author= "Thayna Jorge" 
        content= "Gabriel está sempre atrasado!"
      />          
    </div>
  )
}

export default App
