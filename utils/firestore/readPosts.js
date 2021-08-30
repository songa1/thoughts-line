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

const ReadPosts = () => {

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

    // Liking functionality
    const toggle = (id) => {
        let localLiked = liked;
        setLiked(true);
    };

    return (
        <>
            {loading && <Loader/>}
            {posts.length === 0 || !posts && <p className="empty-message">{loading ? "Getting posts...":"No posts to display!"}</p>}
            {posts && !loading && 
            posts.map(post => (
                <div key={post.id} className='post'>
                    <div className={styles.postMetadata}>
                        <Image src='/AS-PNG.png' width='50' height='50'></Image>
                        <div className={styles.meta}>
                            <h4 onClick={()=>goToSingle(post.id)}><b className='postTitle'>{post.data().title}</b></h4>
                            <p>{moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </div>
                        {user&&<div className={styles.postEdit}>
                            <p href="#">Edit</p>
                            <p href="#" onClick={()=>deletePost(post.id)}>Delete</p>
                        </div>}
                    </div>
                    <article className={styles.postData}>
                        <p dangerouslySetInnerHTML={{__html: post.data().body}} className='postBody' onClick={()=>goToSingle(post.id)}/>
                    </article>
                    <div className='postActions'>
                        <p className='btn' onClick={()=> toggle(post.data().id)}>{`${post.data().likes}`}  <FontAwesomeIcon style={{color: liked ?'red': 'white'}} icon={faHeart} /></p>
                        <p className='btn-secondary'>{`${post.data().comments.length}`} <FontAwesomeIcon style={{color: 'white'}} icon={faComments} /></p>
                        <p className='btn-end' onClick={(e)=>{
                            e.preventDefault();
                            let url = window.location.href
                            console.log(url)
                        }}><FontAwesomeIcon style={{color: 'white'}} icon={faShare} /></p>
                    </div>
                </div> 
            )) 
            }
        </>
    )
}

export default ReadPosts;