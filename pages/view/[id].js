import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'

// const post = {
//     title: 'Why am i not like other people?',
//     body: 'Lorem ipsum dolor sit amet, consectetur adip,jbbhbhbhububububu  csbuhsbdv ghbjvfbujvuhbfvjbiufhvhuvbhufv',
//     comments: [
//         {
//             id: 1,
//             user: 'user 1',
//             comment: 'This is a comment'
//         },
//         {
//             id: 2,
//             user: 'user 2',
//             comment: 'This is a comment 2'
//         },
//         {
//             id: 3,
//             user: 'user 3',
//             comment: 'This is a comment 3'
//         },
//         {
//             id: 4,
//             user: 'user 4',
//             comment: 'This is a comment'
//         },
//         {
//             id: 5,
//             user: 'user 5',
//             comment: 'This is a comment'
//         },
//     ],
//     author: 'Achille Songa',
//     date: 'a few seconds ago',
//     likes: 100
// }

const Single =()=>{
    const router = useRouter();
    const general = router.asPath.split("/").pop().split('%20').join(' ');
    const [post, setPost] = useState('')

    useEffect(()=> {
        const getPost = async() => {
            try {
                await firebase
                .firestore()
                .collection('posts')
                .doc(general)
                .get()
                .then((doc)=>{
                    setPost(doc.data())
                })
                .catch(err=>{
                    console.log(err.message)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getPost();
    },[])

    console.log(post)
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="google-site-verification" content="lzuO2DVXYYrKZZY1nLrFSPHa2AQkaY0pRWIPHJ9wjW4" />
            <title>{post ? post.title : ''}</title>
        </Head>
        <div className='container'>
            {post && <div className='singlePost'>
                <div>
                    <h2>{post ? post.title : ''}</h2>
                    <p>{`Published ${moment(post?post.date:'').fromNow()} by ${post?post.author:''}`}</p>
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{__html: post.body ? post.body : ''}}/>
                </div>
                <div>

                </div>
            </div>}
        </div>
        </>
    )
}

export default Single