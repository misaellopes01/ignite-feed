import { useState } from 'react'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Misael Lopes"
            content="Hi there! I'm Misael Lopes. Developer. Computer Technician. 4th year student of Management Informatics Engineering"
          />
          <Post
            author="Augusto André"
            content="Hi there! I'm Augusto André, 21 years old. Developer. Computer Technician. 4th year student of Informatics Engineering"
          />
        </main>
      </div>
    </div>
  )
}
