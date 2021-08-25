import React, {useEffect} from 'react';
import video from '../media/hero-video.mp4'
import '../styles/home.css';

const Home = () => {
    
    // toggling for menu
    useEffect(() => {
        const menuToggle = document.querySelector('.toggle')
        const showcase = document.querySelector('.showcase')
    
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active')
            showcase.classList.toggle('active')
        })
    
    })

    return (
        <div>
            <section className="showcase ">
                <header>
                    <h2 className="logo"> Sustainability</h2>
                    <div className="toggle "></div>
                </header>

                <video autoPlay loop muted><source src={video} type='video/mp4'/></video>

                    <div className="overlay"></div>

                    <div className="text">
                        <h2>Never Stop</h2>
                        <h3>Exploring the World</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nunc rutrum pharetra suscipit. Pellentesque feugiat rutrum pretium. Integer efficitur ultricies placerat. Cras ultrices, risus a egestas tempus, turpis ipsum vulputate orci, vitae sollicitudin magna risus eu elit. Pellentesque a hendrerit lacus, sit amet commodo arcu. Curabitur ut nulla sollicitudin, scelerisque felis non, suscipit tortor. Mauris id commodo libero, sit amet ullamcorper lectus. Fusce malesuada nec felis non tristique.</p>
                        <a href="blah"> Explore</a>
                    </div>

             
            </section>

            <div className="menu">
                <ul>
               <li><a href="blah">Home</a></li>
               <li><a href="blah">Ways to Help</a></li>
               <li><a href="blah">A Green Look</a></li>
               <li><a href="blah">News</a></li>
               <li><a href="blah">About</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Home;