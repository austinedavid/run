import React,{useState} from 'react'
import styled from 'styled-components'
import bgPicture from '../images/home-bg.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

// below is our styling for the jsx
const Container = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.9);
position: relative;

.wrapper{
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%), url(${bgPicture});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;

  .inner-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    .bigger-text{
      font-size: 45px;
    }

    .sub-bigger{
      font-size: 30px;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      display: flex;

      @media(max-width:560px){
        font-size: 18px;
        font-weight: bold;
      }
      @media(max-width:400px){
        font-size: 15px;
        font-weight: bold;
      }
      @media(max-width:420px){
        font-size: 14px;
        font-weight: bold;
      }
      .typer{
        margin-left: 10px;
      }

    }

    .little-text{
      width: 70%;
      font-size: 20px;
      text-align: center;

      @media(max-width:560px){
        font-size: 12px;
        font-weight: bold;
      }

     
    }

    .btn-div{
      margin-top: 2rem;

      button{
        margin-left: 1rem;
        padding: 10px 20px;
        background-color: red;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        border: 0ch;
        transition: all 0.5s ease;

        &:hover{
          background-color: #ec4a4a;
          transform: scale(1.2);
        }
      }
    }

    
  }

  
}
.social-media{
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 0;
      top: 50%;
      color: white;
      background-color: #530606;
     padding-top: 10px;
     padding-bottom: 10px;
      border-radius: 10px;
      transition: all 1s ease-in-out;
      transform: translateX(${(prop)=> prop.side?"0px": "-100%"});

      &:hover{
        background-color: transparent;
      }
     
      .social-subdiv{
        display: flex;
        cursor: pointer;
        padding: 5px;
        transition: all 0.5s ease-in-out;
        align-items: center;
        border-radius: 5px;
        &:hover{
          background-color: #814545;

          p{
            display: block;
          }
        }

        p{
          display: none;
          margin-right: 5px;
        }
      }
    }
  
`

const Home = () => {
  const [side, setside] = useState(false)
  return (
   <Container side={side}>
    <div className='wrapper'>
      <div className='inner-wrapper'>
        <p className='bigger-text'>Hello there,</p>
        <p className='sub-bigger'>I am Austine david, a passionate </p>
        
        <p className='little-text'>thank you so much for visiting my world, I am actually very enthusiatic programmer, very friendly and understaning.
          <span>i will really appreciate if you get in touch with me, either as a client or looking for partnership</span>
        </p>
        <div className='btn-div'>
          <button onClick={()=> setside(!side)}>Connect with me</button>
          <button>my resume</button>
        </div>
      </div>
      
    </div>
    {
      side && (
    <div className='social-media'>
        <div className='social-subdiv'><p>connect through facebook</p><FacebookIcon style={{color: "blue"}}/></div>
        <div className='social-subdiv'><p>connect through whatsApp</p><WhatsAppIcon style={{color: "green"}}/></div>
        <div className='social-subdiv'><p>connect through twitter</p><TwitterIcon style={{color: "blue"}}/></div>
        <div className='social-subdiv'><p>connect through linkedin</p><LinkedInIcon style={{color: "blue"}}/></div>
        <div className='social-subdiv'><p>connect through instagram</p><InstagramIcon style={{color: "red"}}/></div>
        <div className='social-subdiv'><p>connect through telegram</p><TelegramIcon style={{color: "blue"}}/></div>
        
    </div>
      )
    }
    
   </Container >
  )
}

export default Home