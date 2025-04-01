import { PencilSimpleLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            
           <img className={styles.cover} 
           src="https://images.unsplash.com/photo-1551970634-747846a548cb?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/Nicoleboliveira.png" />
                <strong> Nicole Brenda</strong>
                <span>Frontend</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} weight="bold"/>
                  Editar seu perfil
                </a>
            </footer>
        </aside>
     )
}