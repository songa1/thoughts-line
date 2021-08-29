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
      <meta name="google-site-verification" content="lzuO2DVXYYrKZZY1nLrFSPHa2AQkaY0pRWIPHJ9wjW4" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3094763105861002" crossorigin="anonymous"></script>
      <title>Welcome to Achille Songa Blog</title>
    </Head>
    <div className='container'>
      {user && <AddNewPost />}
      <ReadPosts/>
      <div>
        
      </div>
    </div>
    </>
  )
}
