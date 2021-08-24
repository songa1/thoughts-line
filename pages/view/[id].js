import Head from 'next/head';
import { useEffect, useState } from 'react';
import { faHeart, faComments, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from 'firebase/app';
import 'firebase/firestore'
import styles from '../../styles/Home.module.css';
import moment from 'moment';
import useAuth from '../../utils/auth/firebaseAuth'
import Loader from '../../components/Loader';

const Single =()=>{
    // const {user} = useAuth();
    const [post, setPost] = useState('')
    const [liked, setLiked] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getSinglePost = ()=> {
            try {
                setLoading(true)
                firebase
                .firestore()
                .collection('posts')
                .doc('Hey')
                .onSnapshot((doc) => {
                    setPost(doc)
                    setLoading(false)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getSinglePost()
    }, [])
    console.log(post)
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <meta name="robots" content="index, follow"></meta>
            <title>{post.title}</title>
        </Head>
        {loading && <Loader/>}
        {post && !loading &&<div key={post.id} className={styles.post}>
            <div className={styles.postMetadata}>
                <Image src='/AS-PNG.png' width='50' height='50'></Image>
                <div className={styles.meta}>
                    <h4><i>{post.author}</i> added <i>{post.title}</i></h4>
                    <p>{moment(post.date).fromNow()}</p>
                </div>
                {/* {user&&<div className={styles.postEdit}>
                    <p href="#">Edit</p>
                    <p href="#" onClick={()=>deletePost(post.id)}>Delete</p>
                </div>} */}
            </div>
            <article className={styles.postData}>
                <p dangerouslySetInnerHTML={{__html: post.body}}/>
                {/* {post.data().body&&<RichText render={post.data().body} linkResolver={Link} />} */}
            </article>
            <div className='postActions'>
                <p className='btn' onClick={()=> toggle(post.data().id)}>{`${post.likes}`}  <FontAwesomeIcon style={{color: liked ?'red': 'white'}} icon={faHeart} /></p>
                <a className='btn-secondary' onClick={(e)=>{
                    window.location.href = `/view/${post.id}`
                }}>{`${post.data().comments.length}`} <FontAwesomeIcon style={{color: 'white'}} icon={faComments} /></a>
                <p className='btn-end' onClick={(e)=>{
                    e.preventDefault();
                    let url = window.location.href
                    console.log(url)
                }}><FontAwesomeIcon style={{color: 'white'}} icon={faShare} /></p>
            </div>
        </div>}
        </>
    )
}

export default Single