import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/carlospadrao.png"
          />

          <div className={styles.authorInfo}>
            <strong>Carlos Padrão</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 18:41:00" dateTime="2024-10-20 18:41:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>
          Fala galera do Ignite, hoje vamos comecar a criar um novo projeto. Vamos
          utilizar ReactJS e criar um sistema de comentarios em tempo real.
        </p>
        <p><a href="https://github.com/CarlosPadrao">github.com/carlospadrao</a></p>

        <p className={styles.hashtags}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}