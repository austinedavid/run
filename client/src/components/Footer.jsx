import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

// below is the styling
const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: #0e0e0e;

    .wrapper{
        max-width: 1000px;
        height: 100%;
        margin: 0 auto;
        padding: 10px;

        .top-div{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            color: white;
            margin-bottom: 2rem;

            .name{
                flex: 1;
                margin-right: 10px;
                margin-top: 1rem;
            }
            .about{
                flex: 1;
                margin-right: 10px;
                margin-top: 1rem;
            }
            .services{
                flex: 1;
                margin-right: 10px;
                margin-top: 1rem;
            }
            .promo{
                flex: 1;
                margin-right: 10px;
                margin-top: 1rem;
            }
            .partner{
                flex: 1;
                margin-right: 10px;
                margin-top: 1rem;
            }
        }

        .bottom-div{
            width: 100%;
           
            display: flex;
            justify-content: center;
            margin-top: 2rem;

            
        }
    }
`
// here is the jsx
const Footer = () => {
  return (
    <Container>
        <div className='wrapper'>
            <div className='wrapper'>
                <div className='top-div'>
                    <div className='name'>
                        <h4>GmodeTech</h4>
                    </div>
                    <div className='about'>
                        <p>GmodeTech is one of the best brand to consider when you talk about executing any of your web development, mobile applications, teaching and also learning about cryptocurrency. always feel free to contact GmodeDev, we are always avalable</p>
                    </div>
                    <div className='services'>
                        <p>web application development</p>
                        <p>mobile app development</p>
                        <p>tech tutorials</p>
                        <p>crypto trading guide</p>
                    </div>
                    <div className='partner'>
                        <p>partnering with positive voltage</p>
                        <p>partnering with lamadev</p>
                        <p>partnering with Abba M.C writeups</p>
                    </div>
                    <div className='promo'>
                        <p>we promote individual brand</p>
                        <p>also promote company brand</p>
                        <p>we promote those that learnt from us</p>
                        <p>also supply laptop based on your performance</p>
                    </div>
                </div>
                <hr/>
                <div className='bottom-div'>
                    <a href='https://www.facebook.com/david.austine.3154'><FacebookIcon style={{color: "blue", cursor: "pointer"}}/></a>
                    <WhatsAppIcon style={{color: "green", cursor: "pointer"}}/>
                    <LinkedInIcon style={{color: "blue", cursor: "pointer"}}/>
                    <TwitterIcon style={{color: "blue", cursor: "pointer"}}/>
                    <a href='https://www.instagram.com/gmodetech/'><InstagramIcon style={{color: "red", cursor: "pointer"}}/></a>
                    <TelegramIcon style={{color: "blue", cursor: "pointer"}}/>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Footer