import React from 'react'
import styled from 'styled-components'
import {skills} from '../utils/myskills'

// below is the jsx styling 
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0,0.95);

    .wrapper{
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px;

        .heading-div{
            width: 70%;
            background-color: black;
            margin: 1rem auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 45px;
            font-weight: bold;
            border-radius: 20px;
            color: white;
            box-shadow: -1px 4px 12px 0px rgba(250,243,243,0.75);
            -webkit-box-shadow: -1px 4px 12px 0px rgba(250,243,243,0.75);
            -moz-box-shadow: -1px 4px 12px 0px rgba(250,243,243,0.75);

            @media(max-width:560px){
                font-size: 30px;
            }
        }

        .skills-div{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin-top: 3rem;

            @media(max-width: 640px){
                grid-template-columns: 1fr 1fr;
            }
            @media(max-width: 470px){
                grid-template-columns: 1fr;
            }

            .skill-wrapper{
                    margin-right: 20px;
                    margin-bottom: 20px;
                   
                .skill-inner-wrapper{
                    border-radius: 20px;
                    overflow: hidden;
                    border: 2px solid black;
                    cursor: pointer;

                    &:hover{
                        img{
                            transform: scale(1.2);
                        }
                    }
                    .img-div{
                        width: 100%;
                        height: 10rem;
                        background-color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-bottom: 2px solid black;

                        img{
                            width: 6rem;
                            transition: all 0.5s ease-in-out;
                        }
                    }

                    .write-up-div{
                        width: 100%;
                        padding: 10px;
                        background-color: white;

                        .skill-heading{
                            font-weight: bold;
                            margin-top: 1rem;
                            margin-bottom: 0.5rem;
                            font-size: 20px;
                        }

                        .skill-details{
                            span{
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }
`

const Skills = () => {
  return (
    <Container>
        <div className='wrapper'>
            <div className='heading-div'>
                <p>My skills</p>
            </div>
            <div className='skills-div'>
                {
                    skills.map(skill=>(
                        <div key={skill.id} className="skill-wrapper">
                            <div className='skill-inner-wrapper'>
                                <div className='img-div'><img src={skill.logo} alt={skill.heading}/></div>
                                <div className='write-up-div'>
                                    <p className='skill-heading'>{skill.heading}</p>
                                    <p className='skill-details'><span>Reasons for learning: </span>{skill.details}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </Container>
  )
}

export default Skills