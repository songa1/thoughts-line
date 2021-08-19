import Head from 'next/head';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { db } from '../utils/firebase';

export default function Home() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [posts, setPosts] = useState('')

  useEffect(() => {
      // const getPosts = async() => {
      //   const snapshot = await db.collection('posts').get();
      //   snapshot.docs.forEach(doc=> setPosts(doc))
      // }
      // getPosts()
  }, [])

  console.log(posts)

  const clearFields = () => {
    setTitle('')
    setBody('')
  }

  const onAddNew = () => {
    const post = {
      title,
      body,
      date: Date.now(),
      author: "Achille Songa",
    }
    console.log(post)
    clearFields()
  }

  return (
    <div className={styles.container}>
      <div className={styles.newPost}>
        <h2>What's on your mind, Achille!</h2>
        <input type='text' placeholder='Title...' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <textarea
          placeholder="What's on your mind?"
          rows='10'
          width="100%"
          value={body}
          onChange={(e)=>setBody(e.target.value)}
        />
        <button className='btn' onClick={onAddNew}>Add a new post</button>
      </div>
      <div className={styles.post}>
          <div className={styles.postMetadata}>
            <Image src='/AS-PNG.png' width='50' height='60'></Image>
            <div className={styles.meta}>
              <h4><strong>Achille Songa</strong> added <b>{title ? title : "Post title"}</b></h4>
              <p>2 hours ago</p>
            </div>
            <div className={styles.postEdit}>
              <p>Menu</p>
            </div>
          </div>
          <div className={styles.postData}>
            <p>Lorem ipsum is the text that we all use and don’t knwo what it means. If you know it,please help me know it too. I am incapable on]f loding to the meaning of lorem ipsum, Lorem ipsum is the text that we all use and don’t knwo what it means. If you know it,please help me know it too. I am incapable on]f loding to the meaning of lorem ipsum, Lorem ipsum is the text that we all use and don’t knwo what it means. If you know it,please help me know it too. I am incapable on]f loding to the meaning of lorem ipsum, </p>
            <img src='/animal.jpg'/>
          </div>
          <div className={styles.postActions}>
            <p>22 likes</p>
            <p>22 comments</p>
            <p>share</p>
          </div>
      </div>
      
    </div>
  )
}
