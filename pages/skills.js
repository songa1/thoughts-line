import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

const Skills = () => {
    return (
        <>
        <Head>
            <title>Skills of Achille Songa</title>
        </Head>
        <div className='container'>
            <h2 className='empty-message'>I am Achille Songa, I am a Software Engineer, packed with different skills. Check out some of my skills. And you can make some of them work for you by Hiring me.</h2>
            <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}><Link href='/contact'><a className='btn'>Hire me!</a></Link></div>
            <div className='category'>
                <h2 className='catTitle'>1. Front-End Skills</h2>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>HTML</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'90%'}}>90%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>CSS</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'92%'}}>92%</div>
                        </div>
                    </div>
                </div>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Javascript Vanilla</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'80%'}}>80%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>Bootstrap</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'88%'}}>88%</div>
                        </div>
                    </div>
                </div>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Material UI</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'76%'}}>76%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>Tailwind CSS</h3>
                        <div className='w3-border'>
                            <div className="contained low" style={{width:'40%'}}>40%</div>
                        </div>
                    </div>
                </div>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>React JS</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'90%'}}>90%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>Next JS</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'90%'}}>90%</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='category'>
                <h2 className='catTitle'>2. Back-End Skills</h2>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Node JS</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'80%'}}>80%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>Firebase</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'80%'}}>80%</div>
                        </div>
                    </div>
                </div>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Mongo DB</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'90%'}}>90%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>PostgreSQL</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'70%'}}>70%</div>
                        </div>
                    </div>
                </div>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>MySQL</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'76%'}}>76%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>PHP</h3>
                        <div className='w3-border'>
                            <div className="contained middle" style={{width:'50%'}}>50%</div>
                        </div>
                    </div>
                </div>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Fauna</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'60%'}}>60%</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='category'>
                <h2 className='catTitle'>3. Android Development</h2>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>React Native</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'60%'}}>60%</div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className='category'>
                <h2 className='catTitle'>4. CMS Knowledge</h2>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Wordpress</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'80%'}}>80%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>Blogger</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'90%'}}>90%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='category'>
                <h2 className='catTitle'>5. Other Skills</h2>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Figma</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'96%'}}>96%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>Photoshop</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'60%'}}>60%</div>
                        </div>
                    </div>
                </div>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Git</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'80%'}}>80%</div>
                        </div>
                    </div>
                    <div className='skill-right'>
                        <h3>Music Making</h3>
                        <div className='w3-border'>
                            <div className="contained middle" style={{width:'50%'}}>50%</div>
                        </div>
                    </div>
                </div>
                <div className='skillSet'>
                    <div className='skill-left'>
                        <h3>Video Editing</h3>
                        <div className='w3-border'>
                            <div className="contained enough" style={{width:'70%'}}>70%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;