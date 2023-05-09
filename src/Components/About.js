

const About = (props) =>{
    return(
        <div className="about-container">
            <h1>About</h1>
            <p> loremipsum </p>
            {props.children}
        </div>
    )
}

export default About;