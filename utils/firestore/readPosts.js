import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import firebase from 'firebase/app'
import 'firebase/firestore'
import {useState, useEffect} from 'react';
import moment from 'moment';
import { useAuth } from '../auth/firebaseAuth';
import Loader from '../../components/Loader';

const ReadPosts = () => {

    const {user} = useAuth();

    const [posts, setPosts] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            firebase.firestore()
            .collection('posts')
            .orderBy('date', 'desc')
            .onSnapshot((doc) => {
                console.log(doc.docs)
                setPosts(doc.docs)
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
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
            {posts.length === 0 && <p className="empty-message">{loading ? "Getting posts...":"No posts to display!"}</p>}
            {posts && !loading && 
            posts.map(post => (
                <div key={post.id} className={styles.post}>
                    <div className={styles.postMetadata}>
                        <Image src='/AS-PNG.png' width='50' height='50'></Image>
                        <div className={styles.meta}>
                            <h4><i>{post.data().author}</i> added <i>{post.data().title}</i></h4>
                            <p>{moment(post.date).fromNow()}</p>
                        </div>
                        {user&&<div className={styles.postEdit}>
                            <p href="#">Edit</p>
                            <p href="#" onClick={()=>deletePost(post.id)}>Delete</p>
                        </div>}
                    </div>
                    <article className={styles.postData}>
                        <p>{post.data().body}</p>
                        {post.data().image && <img src={post.data().image ? post.data().image : ''}/>}
                    </article>
                    <div className={styles.postActions}>
                        <p>{`${post.data().likes} Like`}</p>
                        <p>{`${post.data().comments.length} Comments`}</p>
                        <p>Read more</p>
                    </div>
                </div> 
            )) 
            }
        </>
    )
}

export default ReadPosts;