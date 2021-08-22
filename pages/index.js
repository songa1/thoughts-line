import Head from 'next/head';
import AddNewPost from '../utils/firestore/addPost'
import ReadPosts from '../utils/firestore/readPosts'
import { useAuth } from '../utils/auth/firebaseAuth';

export default function Home() {
  const {user} = useAuth();
  return (
    <>
    <Head>
      <title>Welcome to Achille Sonag Blog</title>
    </Head>
    <div className='container'>
      {user && <AddNewPost />}
      <ReadPosts/>
    </div>
    </>
  )
}
