import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img class={styles.cover} src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=50&w=500&auto" alt="Foto de capa" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/carlospadrao.png" alt="Foto de perfil" />

        <strong>Carlos Padrão</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}