import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    
return (
    <div className='aboutC'>
            <p className='aboutMe'> About me </p>
            <a className="socialNetwork" target="_blank" rel="noreferrer" href='https://github.com/Nick-Bae'>  
                <i class="fa-brands fa-github"></i>
            </a> &nbsp; &nbsp;
            <a className="socialNetwork" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/namju-bae-4274893a/'>  
                <i class="fa-brands fa-linkedin"></i>
            </a>
            
    </div>

    )
}

export default AboutMe;