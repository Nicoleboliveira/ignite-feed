import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

export function App() {
  return (
    <div>
    <Header />
     <Post 
      author= "Nicole Brenda" 
      content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit blanditiis, laborum quia veniam commodi vel hic ipsa dolorem, atque obcaecati amet aliquid ut, odio deserunt voluptatem corrupti! Laboriosam, quod. Culpa."
     />
     <Post 
      author= "Heitor Leite " 
      content="Um novo post muito legal."
     />
    
    </div>
  )
}


