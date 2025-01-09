import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carlospadrao.png',
      name: 'Carlos Padrão',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Fala galera do Ignite, hoje vamos comecar a criar um novo projeto. Vamos utilizar ReactJS e criar um sistema de comentarios em tempo real.' },
      { type: 'link', content: 'github.com/carlospadrao' }
    ],
    publishedAt: new Date('2024-10-20 18:41:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diogobruni.png',
      name: 'Diogo Bruni',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Fala galera do Ignite, hoje vamos comecar a criar um novo projeto. Vamos utilizar ReactJS e criar um sistema de comentarios em tempo real.' },
      { type: 'link', content: 'github.com/diogobruni' }
    ],
    publishedAt: new Date('2025-01-08 22:15:00'),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post,index) => {
            return (
              <Post
                // id={post.id}
                key={index}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App