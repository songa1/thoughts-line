import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AddNewPost from '../utils/firestore/addPost'
import ReadPosts from '../utils/firestore/readPosts'
import { useAuth } from '../utils/auth/firebaseAuth';

export default function Home() {
  const {user} = useAuth();
  return (
    <div className={styles.container}>
      {user && <AddNewPost />}
      <ReadPosts/>
    </div>
  )
}
