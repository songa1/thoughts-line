import Head from 'next/head';
import AddNewPost from '../utils/firestore/addPost'
import ReadPosts from '../utils/firestore/readPosts'
import { useAuth } from '../utils/auth/firebaseAuth';

export default function Home() {
  const {user} = useAuth();
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
      <meta name="robots" content="index, follow"></meta>
      <title>Welcome to Achille Songa Blog</title>
    </Head>
    <div className='container'>
      {user && <AddNewPost />}
      <ReadPosts/>
    </div>
    </>
  )
}
