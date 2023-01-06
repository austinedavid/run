import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {myTestimony} from '../utils/testimony'

// our styles appears here
const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    
    .wrapper{
        max-width: 1000px;
        height: 100%;
        margin: 0 auto;
        padding: 10px;

        .heading{
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
        .slide-container{
            width: 100%;
            height: 400px;
            
            display: flex;
            align-items: center;
            justify-content: center;

            .slide-wrapper{
                width: 450px;
                height: 300px;
                background-color: #dee1e3;
                overflow: hidden;
                position: relative;
                border-radius: 20px;

                .slides{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    transition: all 1s ease;
                    transform: translateX(${(prop)=> prop.page * -100}%);
                    

                    .slide{
                       min-width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        padding-top: 1rem;
                        padding-bottom: 1rem;
                        padding-left: 10px;
                        padding-left: 10px;

                        .face{
                            width: 70px;
                            height: 70px;
                            border-radius: 50%;
                            overflow: hidden;

                            img{
                                width: 100%;
                            }
                        }

                        .name{
                            margin-bottom: 1rem;
                        }
                    }
                }

                .slide-indicator{
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 100%;
                    height: 3rem;
                    background-color: rgba(0,0,0,0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .indicator{
                        width: 0.8rem;
                        height: 0.8rem;
                        border-radius: 50%;
                        background-color: white;
                        margin-right: 10px;
                    }
                    .first{
                        background-color: ${(prop)=> prop.page === 0? "red": "white"};
                    }
                    .second{
                        background-color: ${(prop)=> prop.page === 1? "red": "white"};
                    }
                    .third{
                        background-color: ${(prop)=> prop.page === 2? "red": "white"};
                    }
                    .fourth{
                        background-color: ${(prop)=> prop.page === 3? "red": "white"};
                    }
                    .fifth{
                        background-color: ${(prop)=> prop.page === 4? "red": "white"};
                    }
                }
            }
        }

    }

`

// our jsx below here
const Testimony = () => {
    // creating our sliders state
    const [page, setpage] = useState(0)
    useEffect(()=>{
        const oursliders = setInterval(()=>{
            if(page < 4){
                setpage(page+1)
            }else{
                setpage(0)
            }
            
        }, 6000)
        return ()=>clearInterval(oursliders)
    }, [page])

    console.log(page)
  return (
    <Container page={page}>
        <div className='wrapper'>
            <div className='heading'>Testimonies</div>
            <div className='slide-container'>
                <div className='slide-wrapper'>
                    <div className='slides'>
                        {myTestimony.map((each)=>(
                            <div className='slide' key={each.sn}>
                                <div className='face'>
                                    <img src={each.image} alt="slidershow"/>
                                </div>
                                <div className='name'>
                                    <h3>{each.name}</h3>
                                </div>
                                <div className='writeup'>
                                    <p>{each.writeUp}</p>
                                </div>
                            </div>
                        ))}
                      
                    </div>
                    <div className='slide-indicator'>
                        <div className='indicator first' ></div>
                        <div className='indicator second'></div>
                        <div className='indicator third'></div>
                        <div className='indicator fourth'></div>
                        <div className='indicator fifth'></div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Testimony