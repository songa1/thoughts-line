import styles from '../../styles/Home.module.css';
import firebase from 'firebase/app'
import 'firebase/firestore'
import {useState} from 'react';
import Loader from '../../components/Loader';
import 'react-quill/dist/quill.snow.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(
	() => {
		return import('react-quill');
	},
	{ ssr: false }
);

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

    console.log(body)

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];


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

    // const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false

    return (
        <>
        <Head>
            <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
        </Head>
            {loading && <Loader/>}
            {!loading && <div className={styles.newPost}>
                <h2>What's on your mind, Achille!</h2>
                <input type='text' placeholder='Title...' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                {/* <textarea
                    placeholder="What's on your mind?"
                    rows='10'
                    width="100%"
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                /> */}
                <ReactQuill modules={modules} formats={formats} theme="snow" value={body} onChange={(e)=>setBody(e)}/>
                <button className='btn' onClick={onAddNew} disabled={disabled}>{"Add a new post"}</button>
            </div>}
        </>
    )
}

export default AddNewPost