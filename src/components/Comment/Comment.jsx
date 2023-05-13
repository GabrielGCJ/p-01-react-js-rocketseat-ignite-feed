import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "../Avatar/Avatar"

export const Comment = () => {

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/GabrielGCJ.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Jorge</strong>
                            <time title="12 de maio às 04:08 " dateTime="2023-05-12 04:08:30">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        Muito Bom devon, parabens!
                    </p>
                </div>
                <footer>
                   <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}