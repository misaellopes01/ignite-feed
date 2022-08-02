import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/misaellopes01.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Misael Lopes</strong>
                            <time
                                title='02 de Agosto as 08:00h'
                                dateTime="2022-08-02 08:00:25"
                            >
                                Cerca ha 1h atrás
                            </time>

                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>
                        Muito bom Devon, parabéns!! 👏👏
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}