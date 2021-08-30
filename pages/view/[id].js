import Head from 'next/head';
import { useRouter } from 'next/router'

const post = {
    title: 'Why am i not like other people?',
    body: 'Lorem ipsum dolor sit amet, consectetur adip,jbbhbhbhububububu  csbuhsbdv ghbjvfbujvuhbfvjbiufhvhuvbhufv',
    comments: [
        {
            id: 1,
            user: 'user 1',
            comment: 'This is a comment'
        },
        {
            id: 2,
            user: 'user 2',
            comment: 'This is a comment 2'
        },
        {
            id: 3,
            user: 'user 3',
            comment: 'This is a comment 3'
        },
        {
            id: 4,
            user: 'user 4',
            comment: 'This is a comment'
        },
        {
            id: 5,
            user: 'user 5',
            comment: 'This is a comment'
        },
    ],
    author: 'Achille Songa',
    createdAt: 'a few seconds ago',
    likes: 100
}

const Single =({ children, href })=>{
    const router = useRouter()
    const link = router.asPath
    console.log(link)

    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="google-site-verification" content="lzuO2DVXYYrKZZY1nLrFSPHa2AQkaY0pRWIPHJ9wjW4" />
            <title>Post title</title>
        </Head>
        <div className='container'>
            <div className='singlePost'>
                <div>
                    <h2>{post.title}</h2>
                    <p>{`Published ${post.createdAt} by ${post.author}`}</p>
                </div>
                <div>
                    <p>{post.body}</p>
                </div>
                <div>

                </div>
                <div className="comment-section">
                    <h3>{`This post has ${post.comments.length} comments`}</h3>
                    <div>
                        <form>
                            <input type='text' placeholder='Your name'></input>
                            <textarea placeholder='Your comment'></textarea>
                            <button className='btn'>Add comment</button>
                        </form>
                    </div>
                    <div>
                        {post.comments.map(comment => (
                            <div key={comment.id}>
                                <p>{comment.user}</p>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Single