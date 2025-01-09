import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=50&w=500&auto" alt="Foto de capa" />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/carlospadrao.png"
        />

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