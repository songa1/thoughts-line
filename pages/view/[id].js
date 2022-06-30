import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'
import Loader from '../../components/Loader'
import { Link } from 'next/link';

const Single =()=>{
    const router = useRouter();
    const general = router.asPath.split("/").pop().split('%20').join(' ');
    const [post, setPost] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const getPost = () => {
            try {
                setLoading(true)
                firebase
                .firestore()
                .collection('posts')
                .doc(general)
                .get()
                .then((doc)=>{
                    setPost(doc.data())
                    setLoading(false)
                })
                .catch(err=>{
                    console.log(err.message)
                    setLoading(false)
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
            <title>{post ? post.title : ''}</title>
        </Head>
        <div className='container'>
            {loading && <Loader />}
            {post  && <div className='singlePost'>
                <div className='singleMeta'>
                    <h2><i>{``}</i>{post ? post.title : ''}</h2>
                    <p>Published <u>{`${moment(post?post.date:'').fromNow()}`}</u> by <u>{`${post?post.author:''}`}</u></p>
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
