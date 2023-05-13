import styles from "./Post.module.css"

import { Avatar } from "../Avatar/Avatar"
import { Comment } from "../Comment/Comment"

export const Post = (props) => {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Thaysaadj.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Thayna Saad</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="12 de maio às 04:08 " dateTime="2023-05-12 04:08:30">Publicado há 1 h</time>
            </header>
            <div className={styles.content}>
                <p> Fala galeraa 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a>  </p>
                <p>
                    <a href="">#novoprojeto</a>{" "}
                    <a href="">#nlw</a>{" "}
                    <a href="">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder="Deixe um comentario"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
              
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    ) 
}