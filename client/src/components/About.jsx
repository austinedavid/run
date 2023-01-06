import React from 'react'
import styled from 'styled-components'
import myPhoto from '../images/myPic.jpg'
import {motion} from 'framer-motion'

// below is our jsx styling
const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: #dee1e3;

    .wrapper{
        max-width: 1000px;
        height: 100%;
        margin: 0 auto;
        padding: 10px;

        .about-me-heading{
            width: 70%;
            background-color: white;
            margin: 1rem auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 45px;
            font-weight: bold;
            border-radius: 20px;
            box-shadow: 1px 5px 11px 3px rgba(0,0,0,0.75);
            -webkit-box-shadow: 1px 5px 11px 3px rgba(0,0,0,0.75);
            -moz-box-shadow: 1px 5px 11px 3px rgba(0,0,0,0.75);

            @media(max-width:560px){
                font-size: 30px;
            }
        }

        .about-details{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 3rem;
            flex-wrap: wrap;

            @media(max-width: 560px){
                grid-template-columns: 1fr;
            }

            .photo-div{
                
                border-radius: 20px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .about-div{
                

                .about-sub-div{
                    padding: 10px;

                    .self-start{
                        font-size: 25px;
                        font-weight: bold;
                        margin-bottom: 0.5rem;
                    }

                    p{
                        font-size: 17px;
                        margin-bottom: 1rem;

                        span{
                            color: green;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
`
const About = () => {
    // creating our container variant for the animation
    const containerVariant = {
        hidden:{
            opacity: 0
        },
        visible:{
            opacity: 1,
            transition:{
                
                duration: 1,
                type: "spring",
                bounce: 0.5,
                when: "beforeChildren",
                staggerChildren: 1
            }
        }
    }
    const textVariant = {
        hidden: {
            opacity: 0
        },
        visible:{
            opacity: 1,
            transition:{
                duration: 1
            }
        }

    }
  return (
    <Container>
        <div className='wrapper'>
            <div className='about-me-heading'>
                <p>ABOUT ME</p>
            </div>
            <div className='about-details'>
                <motion.div className='photo-div'
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{duration: 10, type: "spring", damping: 10}}
                viewport={{amount: 0.6}}
                >
                    <img src={myPhoto} alt="the programmer"/>
                </motion.div>
                <motion.div className='about-div'>
                    <motion.div className='about-sub-div'
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    >
                        <motion.h5
                        variants={textVariant}
                        className='self-start'>Allow me to introduce my self</motion.h5>
                        <motion.p
                        variants={textVariant}
                        >My name is Augustine Mesoma David, I am from Nigeria by Nationality.
                            currently i am into an undergraduate course in the University of Nigeria 
                            <span> studying physiotherapy</span>. But as a man of many vision and love for technology 
                            i indulged my self in extra activity which elevates my spirit, <span>this is programming </span>
                            since i came into the field of programming, i have actually seen how good i am in the field.
                            I also wish to improve over time as i work for people and associate with others in the field
                        </motion.p>
                        <motion.p
                        variants={textVariant}
                        >Apart from being good in physiotherapy and programming, I also find it very fascinating teaching 
                            people. Also participated in school politics which help in building my leadership skills, I am also a 
                            very good crypto trader and analyst also participates in religious activity as a christian. this is just a brief overview about me, you can find more 
                            in my resume
                        </motion.p>
                        <motion.p
                        variants={textVariant}
                        >I specialize in fullstack development, I actually make use of <span> HTML, CSS, JAVASCRIPT, REACTJS, NODEJS 
                            EXPRESSJS, MONGODB. </span>  In the process of my learning i also acquired knowledge in git and github, also little knowledge in mobile development 
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
            
        </div>
    </Container>
  )
}

export default About