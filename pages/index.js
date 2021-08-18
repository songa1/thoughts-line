import Head from 'next/head'
// import {useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Home() {
  // const [editorState, setEditorState] = useState('')

  // const onEditorStateChange = (editorState) => {
  //   setEditorState()
  // };
  return (
    <div className={styles.container}>
      <div className={styles.newPost}>
        {/* <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />; */}
        <h2>What's on your mind, Achille!</h2>
        <input type='text' placeholder='Title...'></input>
        <textarea
          placeholder="What's on your mind?"
          rows='10'
          width="100%"
        />
        <button className='btn'>Add a new post</button>
      </div>
      <div className={styles.post}>
          <div className={styles.postMetadata}>
            <Image src='/AS-PNG.png' width='50' height='60'></Image>
            <div>
              <h4><strong>Achille Songa</strong> added <b>Who am I?</b></h4>
              <p>2 hours ago</p>
            </div>
          </div>
          <div className={styles.postData}>
            <p>Lorem ipsum is the text that we all use and don’t knwo what it means. If you know it,please help me know it too. I am incapable on]f loding to the meaning of lorem ipsum, Lorem ipsum is the text that we all use and don’t knwo what it means. If you know it,please help me know it too. I am incapable on]f loding to the meaning of lorem ipsum, Lorem ipsum is the text that we all use and don’t knwo what it means. If you know it,please help me know it too. I am incapable on]f loding to the meaning of lorem ipsum, </p>
            <img src='/animal.jpg'/>
          </div>
          <div className={styles.postActions}>
            <p>22 likes</p>
            <p>22 comments</p>
            <p>share</p>
          </div>
      </div>
      
    </div>
  )
}
