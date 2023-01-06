import React from 'react'
import styled from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import {Link} from "react-router-dom"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LaptopIcon from '@mui/icons-material/Laptop';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ChatIcon from '@mui/icons-material/Chat';

// below is my styling
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #dee1e3;

    .wrapper{
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px;

        .heading-div{
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
        .dateconfig{
            color: black;
        }
        .vertical-heading{
            margin-bottom: 1rem;
        }
       
    }
`
// below is my jsx
const Projects = () => {
  return (
    <Container>
        <div className='wrapper'>
            <div className='heading-div'>
                <p>MY PROJECTS</p>
            </div>
           <VerticalTimeline>
                <VerticalTimelineElement
                 className="time-lines"
                 contentStyle={{ background: 'rgb(0,0,0,0.5)', color: '#fff' }}
                 contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0,0.5)' }}
                 date="December 2021"
                 dateClassName='dateconfig'
                
                 iconStyle={{ background: 'rgb(236, 238, 241)', color: '#f40d0d' }}
                 icon={<PhoneAndroidIcon />}>
                    <h3 className="vertical-heading">PROJECT: MOBILE APP CLONED</h3>
                    <h4 className="vertical-title">Nature: <span>The project consist only of html, css and javascript</span></h4>
                    <p>
                    check on the project: <a href='https://austinedavid.github.io/kuda/index.html' target="_blank">view project</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                 className="time-lines"
                 contentStyle={{ background: 'rgb(0,0,0,0.5)', color: '#fff' }}
                 contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0,0.5)' }}
                 date="February 2022"
                 dateClassName='dateconfig'
                
                 iconStyle={{ background: 'rgb(236, 238, 241)', color: '#f40d0d' }}
                 icon={<TravelExploreIcon />}>
                    <h3 className="vertical-heading">PROJECT: ELITE TOURISM</h3>
                    <h4 className="vertical-title">Nature: <span>The project consist only of react, styled-component and javascript</span></h4>
                    <p>
                    check on the project: <a href='https://austinedavid.github.io/tourism3' target="_blank">view project</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                 className="time-lines"
                 contentStyle={{ background: 'rgb(0,0,0,0.5)', color: '#fff' }}
                 contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0,0.5)' }}
                 date="April 2022"
                 dateClassName='dateconfig'
                
                 iconStyle={{ background: 'rgb(236, 238, 241)', color: '#f40d0d' }}
                 icon={<VideoChatIcon  />}>
                    <h3 className="vertical-heading">PROJECT: FLOKITE EXPLORE</h3>
                    <h4 className="vertical-title">Nature: <span>The project consist only of react, styled-component and javascript, nodejs, mongobd & together with full authentication. This is a fullstalk application</span></h4>
                    <p>
                    check on the project: <a href='https://flowkite.netlify.app' target="_blank">view project</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                 className="time-lines"
                 contentStyle={{ background: 'rgb(0,0,0,0.5)', color: '#fff' }}
                 contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0,0.5)' }}
                 date="June 2022"
                 dateClassName='dateconfig'
                
                 iconStyle={{ background: 'rgb(236, 238, 241)', color: '#f40d0d' }}
                 icon={<LaptopIcon  />}>
                    <h3 className="vertical-heading">PROJECT: AUSTINEGLOBALS</h3>
                    <h4 className="vertical-title">Nature: <span>This is an Ecomerce webapplication, created with react, styled-component and javascript, nodejs, mongobd & together with full authentication. This is a fullstalk application</span></h4>
                    <p>
                    check on the project: <a href='https://austineglobal.netlify.app' target="_blank">view project</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                 className="time-lines"
                 contentStyle={{ background: 'rgb(0,0,0,0.5)', color: '#fff' }}
                 contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0,0.5)' }}
                 date="August 2022"
                 dateClassName='dateconfig'
                
                 iconStyle={{ background: 'rgb(236, 238, 241)', color: '#f40d0d' }}
                 icon={<DashboardCustomizeIcon  />}>
                    <h3 className="vertical-heading">PROJECT: AUSTINEGLOBALS DASHBOARD</h3>
                    <h4 className="vertical-title">Nature: <span>Created a dashboard for uploading Ecormmerse items, used jwt authentication, react, expressjs and mongodb</span></h4>
                    <p>
                    check on the project: <a href='https://laptopdashboard.netlify.app/' target="_blank">view project</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                 className="time-lines"
                 contentStyle={{ background: 'rgb(0,0,0,0.5)', color: '#fff' }}
                 contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,0,0.5)' }}
                 date="November 2022"
                 dateClassName='dateconfig'
                
                 iconStyle={{ background: 'rgb(236, 238, 241)', color: '#f40d0d' }}
                 icon={<ChatIcon  />}>
                    <h3 className="vertical-heading">PROJECT: Gmodechatz</h3>
                    <h4 className="vertical-title">Nature: <span>Created a simple Chat application, created with react, reduxtoolkit, styled-component and javascript, nodejs, mongobd & together with full authentication. This is a fullstalk application</span></h4>
                    <p>
                    check on the project: <a href='https://gmodechatz.netlify.app/' target="_blank">view project</a>
                    </p>
                </VerticalTimelineElement>
           </VerticalTimeline>
        </div>
    </Container>
  
  )
}

export default Projects