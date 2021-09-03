import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import firebase from 'firebase/app'
import 'firebase/firestore'
import {useState, useEffect} from 'react';
import moment from 'moment';
import { useAuth } from '../auth/firebaseAuth';
import Loader from '../../components/Loader';
import { faHeart, faComments, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nookies from 'nookies'
import {useRouter} from 'next/router';
import Link from 'next/link';

const ReadPosts = () => {
    const router = useRouter();
    const {user} = useAuth();

    const [posts, setPosts] = useState('')
    const [loading, setLoading] = useState(false)
    const [liked, setLiked] = useState(false)

    const goToSingle = (id) => {
        nookies.set(undefined, 'postTitle', id, {})
        window.location.href = `/view/${id}`
    }

    useEffect(() => {
        try {
            setLoading(true)
            firebase
            .firestore()
            .collection('posts')
            .orderBy('date', 'desc')
            .onSnapshot((doc) => {
                setPosts(doc.docs)
                setLoading(false)
            })
        } catch (error) {
            setLoading(false)
        }
    }, [])


    const deletePost = (id) => {
        console.log(id)
        if (confirm("Do you want to delete this post?") == true) {
            firebase
            .firestore()
            .collection("posts")
            .doc(id)
            .delete()
            .then(function() {
                alert('Post deleted successfuly!');
            })
            .catch(function(error) {
                console.error("Error removing document: ", error);
            });
        } else {
            alert('Post not deleted!')
        }
    }


    return (
        <>
            {loading && <Loader/>}
            {posts.length === 0 || !posts && <p className="empty-message">{loading ? "Getting posts...":"No posts to display!"}</p>}
            {posts && !loading && 
            posts.map(post => (
                <div key={post.id} className='post'>
                    <div className={styles.postMetadata}>
                        <Image src='/AS-PNG.png' width='50' height='50' onClick={()=>router.push('/about')}></Image>
                        <div className={styles.meta}>
                            <Link href={`/view/${post.id}`}><a><h4><b className='postTitle'>{post.data().title}</b></h4></a></Link>
                            <p>{`${moment(post.date).format('MMMM Do YYYY, h:mm:ss a')} - ${post.data().comments.length} comments`}</p>
                        </div>
                        {user&&<div className={styles.postEdit}>
                            <p href="#">Edit</p>
                            <p href="#" onClick={()=>deletePost(post.id)}>Delete</p>
                        </div>}
                    </div>
                    <article className={styles.postData}>
                        <Link href={`/view/${post.id}`}><a><p dangerouslySetInnerHTML={{__html: post.data().body}} className='postBody'/></a></Link>
                    </article>
                </div> 
            )) 
            }
        </>
    )
}

export default ReadPosts;