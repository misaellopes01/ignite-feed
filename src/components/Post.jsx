import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://github.com/misaellopes01.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Misael Lopes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    title='02 de Agosto as 08:00h'
                    dateTime="2022-08-02 08:00:25"
                >
                    Publicado ha 1h
                </time>
            </header>

            <div className={styles.content}>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article >
    )
}