import React from 'react';
import '../styles/Project.css';
import headshot1  from '../assets/images/headshot1.jpg'
import Picture3 from '../assets/images/Picture3.png'
import Picture1  from '../assets/images/Picture1.png'
import Picture4  from '../assets/images/Picture4.png'
import Picture2  from '../assets/images/Picture2.png'
import Picture123  from '../assets/images/Picture123.png'


// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section>
        <div className="mission-statement">
            <h1>Your mission is my mission</h1>
            <p>Helping turn your dreams into reality since 1995</p>
        </div>

        <div id="about-me">
            <h2>About Me</h2>
            <p>To give you some background about myself, I am 26 years old and currently live in Adelaide. I am a qualified Podiatrist, 
                and have been working as such for the last 4 years. <br></br> I love a challenge, and learning new things. 
                Outside of work my favourite hobbies are fishing, camping, hiking, travelling, running and drinking coffee!
                <br></br>I am currently completing the University of Adelaide Full Stack Coding Program. So far I am finding it challenging, but very rewarding. </p>
            <img src={headshot1} alt="profile picture"/>
        </div>


        <div id="my-work">
            <h2>Portfolio</h2>
        </div>
        <section className="my-work">
            
            <div className="my-work-card">
                <h3>Marvelous Memes</h3>
                <p>A dynamically populating interactive website using server side APIs, developed in collaboration with other web developers. All HTML, CSS and Javascript code was written by the authors, using the Marvel API and Giphy API to dynamically populate cards. Click <a href="https://github.com/B3nj1e/Collaborative-Project" target="_blank">here</a> for GitHub repo, click image for deployed website.</p>
                <a href="https://marcmalliate.github.io/Collaborative-Project/" target="_blank" rel="noopener noreferrer"><img src={Picture3} alt="place-holder"/></a>
            </div>

            <div className="my-work-card">
                <h3>Weather Dashboard</h3>
                <p>A dynamically populating website using a weather API to obtain data. Presenting current weather, and 5 day forecast for searched city. Searched cities are saved in the left column, and when clicked upon the weather data is represented. Click <a href="https://github.com/B3nj1e/06-Weather-Dashboard" target="_blank">here</a> for GitHub repo, click image for deployed website.</p>
                <a href="https://b3nj1e.github.io/06-Weather-Dashboard/" target="_blank" rel="noopener noreferrer"><img src={Picture1} alt="place-holder"/></a>
            </div>

            <div className="my-work-card">
                <h3>Coding Quiz</h3>
                <p>A dynamically populating interactive quiz website. Upon starting the quiz, a timer begins counting down from 30 seconds. For each correct answer a +1 tally is recorded and for each incorrect answer 10 seconds is taken off the timer. Upon completing the quiz the final score is presented and an option to save your score and initials to the high scores page. Buttons to the high score page and to restart the quiz at the end. Click <a href="https://github.com/B3nj1e/04-Homework-Quiz-Game" target="_blank">here</a> for GitHub repo, click image for deployed website.</p>
                <a href="https://b3nj1e.github.io/04-Homework-Quiz-Game/" target="_blank" rel="noopener noreferrer"><img src={Picture2} alt="place-holder"/></a>
            </div>

            <div className="my-work-card">
                <h3>Work Day Scheduler</h3>
                <p>A scheduling app, based on a 9-5 work day broken down into hourly units. The current date and time is displayed in the title. Color coded rows are used for past(grey), present(red) and future(green) hourly units. In each row there are columns named time, task and save button. The text that is entered into the task input and then saved, is commited to local storage and hence persists with refreshing and opening of the app at a later date. Click <a href="https://github.com/B3nj1e/05-Work-Day-Scheduler" target="_blank">here</a> for GitHub repo, click image for deployed website.</p>
                <a href="https://b3nj1e.github.io/05-Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer"><img src={Picture4} alt="place-holder"/></a>
            </div>

            <div className="my-work-card">
                <h3>Event Planner Application</h3>
                <p>In this project I worked collaboratively with 3 other developers, to create a full stack application using HTML, CSS, Javascript, SQL, MySQL, Node.js, express and various libraries. This application lets a user create and view events. Events have a location and event category. To access and create events, you must be logged in. Click <a href="https://github.com/caz1502/EventPlanner-Project2" target="_blank">here</a> for GitHub repo, click image for deployed website.</p>
                <a href="https://wheres-the-party-at.herokuapp.com/calendar/" target="_blank" rel="noopener noreferrer"><img src={Picture123} alt="place-holder"/></a>
            </div>
        
        </section>

        <div id="contact-me">
            <h2>Contact Me</h2>
            <p>If you have any queries, please leave your name, email, number and query in the form below.</p>
            
            <form className="contact-form">
                <p>
                  <label for="username">Name:</label>
                  <input className="text-input" id="username" type="text" placeholder="Contact name" />
                </p>
                <p>
                  <label for="email">E-mail:</label>
                  <input className="text-input" id="email" type="text" placeholder="me@example.com" />
                </p>
                <p>
                    <label for="phone-number">Phone number:</label>
                    <input className="text-input" id="phone-number" type="text" placeholder="Phone number" />
                  </p>
                <p>
                  <label for="query">Query:</label>
                  <textarea className="text-input" id="query" placeholder="Please write your query here"></textarea>
                </p>
                <p className="flex-row">
                  <input className="checkbox" id="agreement" type="checkbox" />
                  <label for="agreement">I am prepared to achieve greatness!</label>
                </p>
                <p>
                  <button>Submit</button>
                </p>
            </form>
        
        </div>

        <div id="resume">
            <h2>Resume</h2>
            <p><b>Education:</b> Adelaide University Coding Bootcamp August 2021 - Feburary 2022<br></br>
            <b>Proficiencies:</b> HTML, CSS, JavaScript, Node.js, Express.js, SQL, MySQL, Sequelize, React, MongoDB<br></br>
            <a href="" download alt="empty downlaod as dont want resume on public github repo">Download Resume</a></p>
        </div>

    </section>
  );
}

export default Section;
