import styles from './Post.module.css';

export function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}