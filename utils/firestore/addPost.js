import styles from '../../styles/Home.module.css';
import firebase from 'firebase/app'
import 'firebase/firestore'
import {useState} from 'react';
import Loader from '../../components/Loader';

const AddNewPost = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)

    const clearFields = () => {
        setTitle('')
        setBody('')
    }

    const onAddNew = async() => {
        try {
            const post = {
                title: title,
                body: body.split(/\n{2,}/),
                date: Date.now(),
                author: "Achille Songa",
                comments: [],
                likes: 0
            }
            if (post.title === '') {
                console.log("Title can't be empty")
            }else if(post.body === ''){
                console.log("Body can't be empty")
            }else {
                setLoading(true)
                await firebase
                .firestore()
                .collection('posts')
                .doc(title)
                .set(post)
                .then(()=> {
                    setLoading(false)
                    clearFields()
                })
                .catch(err => {
                    console.log(err.message)
                    setLoading(false)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {loading && <Loader/>}
            {!loading && <div className={styles.newPost}>
                <h2>What's on your mind, Achille!</h2>
                <input type='text' placeholder='Title...' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <textarea
                    placeholder="What's on your mind?"
                    rows='10'
                    width="100%"
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                <button className='btn' onClick={onAddNew} disabled={disabled}>{"Add a new post"}</button>
            </div>}
        </>
    )
}

export default AddNewPost