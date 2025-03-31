import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
    <Header />
     
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
         author="Nicole Brenda"
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis beatae placeat, exercitationem ipsum voluptates saepe at necessitatibus sequi quas, autem, ad incidunt reiciendis magnam consequatur provident perferendis aut! Quaerat!"
        />
        <Post
         author="Bianca Amorim"
         content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quos architecto excepturi molestias, illo voluptate obcaecati laudantium? Consequatur autem eum officiis perspiciatis tempora inventore at a quas doloremque ea! Odit?"
        />
      </main>
     </div>
    
    </div>
  )
}



