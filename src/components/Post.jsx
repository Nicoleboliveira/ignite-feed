import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    console.log(props);
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Nicoleboliveira.png" />
                    <div className={styles.authorInfo}>
                        <strong>Nicole Brenda</strong>
                        <span>Frontend</span>
                    </div>
                </div>

                <time title='01 de Abril às 09:59' dateTime="2025-04-01 09:59:00"> Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Escreva um comentário..."/>

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