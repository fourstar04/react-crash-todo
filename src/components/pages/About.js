import React from 'react'

function About() {
    return (
        <div style={{padding: '1rem 1rem'}}>
            <h1>About</h1>
            <p style={paragraphStyle}>This app is a simple Todo List client that uses the <a href="https://jsonplaceholder.typicode.com">JSON placeholder API</a> for mock content and REST API interaction.</p>
            <p style={paragraphStyle}>This project was produced by following along with <a href="https://www.youtube.com/watch?v=sBws8MSXN7A">Traversy Media's React JS Crash Course - 2019</a> video and then later blending in the lessons from <a href="https://www.youtube.com/watch?v=93p3LxR9xfM">Traversy Media's Redux Crash Course with React</a>.  I would recommend these tutorials to anyone with javascript and mvc experience and an interest in learning the fundamentals of React applications and state management.</p>
        </div>
    )
}

const paragraphStyle = {
    margin: '1rem 0'
}

export default About;
