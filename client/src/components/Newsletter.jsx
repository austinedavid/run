import React from 'react'
import styled from 'styled-components'

// styling appears here
    const Container = styled.div`
        width: 100%;
        height: 50vh;
        background-color: #dee1e3;
        .wrapper{
            max-width: 1000px;
            height: 100%;
            margin: 0 auto;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            .form-container{
                background-color: #667a66;
                width: 400px;
                height: 200px;
                padding: 2rem 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 15px;

                h3{
                    color: white;
                    font-size: 25px;
                    font-style: italic;
                }
                .form{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-top: 1rem;

                    .input{
                        width: 100%;
                        height: 2rem;
                        margin-bottom: 0.5rem;
                        padding: 0 5px;
                        border-radius: 5px;
                        border: 0ch;

                        &:focus{
                            border: 0ch;
                        }
                    }

                    .submit{
                        width: 6rem;
                        padding: 0.5rem;
                        border-radius: 10px;
                        border: 0ch;
                        background-color: red;
                        color: white;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        &:hover{
                            background-color: red;
                            transform: scale(1.1);
                        }
                    }
                }
            }
        }
    `
// our jsx appears here
const Newsletter = () => {
  return (
    <Container>
        <div className='wrapper'>
          <div className='form-container'>
            <h3>subscribe to my newsletter</h3>
            <form className='form'>
                <input className='input' placeholder='enter your email' type="text" required/>
                <input className='submit' type="submit"/>
            </form>
          </div>
        </div>
    </Container>
  )
}

export default Newsletter