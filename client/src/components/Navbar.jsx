import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {nav} from '../utils/navbar'

// below is our styling here
const Container = styled.div`
width: 100%;
background-color: black;
position: fixed;
top: 0;
z-index: 999;
a{
  text-decoration: none;
  color: white;
  margin-right: 10px;
  cursor: pointer;

  @media(max-width: 650px){
        margin-left: 1rem;
        font-size: 14px;
        
      }
      @media(max-width: 560px){
        margin-bottom: 2rem;
        font-size: 20px;
      }
}
.wrapper{
  max-width: 1000px;
  background-color: transparent;
  margin: 0 auto;
  height: 70px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  
  

  .logo-div{
    cursor: pointer;
    p{
      color: red;
      font-size: 23px;
    }
  }

  .item-div{
    display: flex;
    align-items: center;

    @media(max-width: 560px){
      position: fixed;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 70px;
      background-color: black;
      left: 0px;
      transition: all 0.5s ease;
     transform: translateX(${(prop)=> prop.open? 0: "-100%"});
     
    }
    p{
      color: inherit;
      margin-left: 2rem;
      font-size: 15px;
      cursor: pointer;
      text-decoration: none;


      @media(max-width: 650px){
        margin-left: 1rem;
        font-size: 14px;
        
      }
      @media(max-width: 560px){
        margin-bottom: 2rem;
        font-size: 20px;
      }
    }
  }

  .toggle{
    display: none;

    
    @media(max-width: 560px){
      display: block;
    }
  }
}
  
`

const Navbar = () => {
  const [open, setopen] = useState(false)

  const handleclose = ()=>{
    setopen(false)
  }
  const handleopen = ()=>{
    setopen(true)
  }
  // here we add our scroll functionality
  const handleClick = (e)=>{
    e.preventDefault()
    const element = e.target.getAttribute("href")
    const location = document.querySelector(element).offsetTop
    setopen(false)
    // making use of window function to set the location of our divs
    window.scrollTo({
      left: 0,
      top: location - 70
    })

  }
  return (
    <Container open={open}>
      <div className='wrapper'>
        <div className='logo-div'>
          <p className='big-header'>GmodeDev</p>
        </div>
        <div className='item-div'>
         {nav.map((each)=>(
          <a href={each.url} key={each.id} onClick={handleClick}>{each.link}</a>
         ))}
        </div>
        <div className='toggle'>
          {open? <CloseIcon onClick={handleclose} style={{color: "white", cursor: "pointer"}}/> : <MenuIcon onClick={handleopen} style={{color: "white", cursor: "pointer"}}/> }
        </div>
      </div>
    </Container>
  )
}

export default Navbar