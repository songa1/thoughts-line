import Head from 'next/head';
import { useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore'
import Link from 'next/link';
import Loader from '../components/Loader';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const sendMessage = async(e) =>{
        e.preventDefault()
        const messageData = {
            name: name, email: email, message: message, date: new Date()
        }
        if(email === ''){
            setError('Name can not be empty!')
        }else if(name === ''){
            setError('Email can not be empty!')
        }else if(message===''){
            setError('Message can not be empty!')
        }else{
            setLoading(true)
            await firebase
            .firestore()
            .collection('messages')
            .doc(name)
            .set(messageData)
            .then(() =>{
                setSuccess('Message sent successfully, I will reach out through an email. Thank you!');
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
        }
        if(loading){
            setError('')
            setSuccess('')
        }
    }

    return (
        <>
        <Head>
            <title>Contact Achille Songa</title>
        </Head>
        <div className='container'>
            <h2 className='empty-message'>Would you like to hire me to do work for you? Or have you got anything to discuss about? Maybe not that, just say Hello!</h2>
            <div>
                <p className="text-center">Ping me on my Social Accounts;</p>
                <div className='socials'>
                    <Link href='https://fb.me/songa.achille.9'><a><img src='/facebookx.png'></img></a></Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link href='https://instagram.com/achille_songa'><a><img src='/instagramx.png'></img></a></Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link href='https://twitter.com/achille_songa'><a><img src='/twitterx.png'></img></a></Link>
                </div>
                <p className='text-center'>Or use the form below:</p>
            </div>
            {loading && <Loader/>}
            {error && !success && <div className='low'><p className='feedback-message'>{error ? error : ''}</p></div>}
            {!success && !loading ? <form className='contact'>
                <label>Name</label>
                <input type="text" name="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <label>Your message</label>
                <textarea name="message" rows='5' value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                <button className='btn' onClick={sendMessage}>Send Message</button>
            </form>: <div className='enough'><p className='feedback-message'>{success ? success : ''}</p></div>}
        </div>
        </>
    )
}

export default Contact;