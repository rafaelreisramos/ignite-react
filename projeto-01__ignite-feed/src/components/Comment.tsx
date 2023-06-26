import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likesCount, setLikesCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikesCount((prevCount) => prevCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rafaelreisramos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Rafael Reis Ramos</strong>
              <time title="23 de junho às 9:00" dateTime="2023-06-23 09:00:00">
                Há cerca de 1h
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              type="button"
              title="Excluir comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button type="button" onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
