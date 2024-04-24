import React from 'react';
import './landing.css'

const Lading = () => {
    return (
        <div className='home'>
            <div className='navbar'>
                <nav>
                    <ul className='links-nav'>
                        <li>
                            Home
                        </li>
                        <li>
                            Episodes
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>
                </nav>
            </div>

                <div className='logotitles'>
                    <h1>Con toda</h1>
                    <h3>TU MENTE</h3>
                </div>

                <div className='imgLogo'>
                    <img className='sound1' src='../sound.svg'></img>
                    <img src='../logo2.svg'></img>
                    <img className='sound2' src='../sound1.svg'></img>
                </div>

                    <div>
                        <h4 className='titlebrain'>PODCAST</h4>
                    </div>
                <div>
                    <div>

                <iframe  className='spotify-player' src="https://open.spotify.com/embed/episode/0bTHtN1GpBNeP382f6vCzQ?utm_source=generator" width="40%" height="155" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>

            <div className='medialogos'>
                
                <div className='logo'>
                <img src='../apple-podcasts.svg' />
                <h6>Apple Podcast</h6>
                </div>
                <div className='logo'>
                <img src='../google-podcasts.svg' />
                <h6>Google Podcast</h6>
                </div>
                <div className='logo'>
                <img src='../spotify-162-svgrepo-com.svg' />
                <h6>Spotify</h6>
                </div>

                
            </div>  
            
            
        </div>
        
    );
};

export default Lading;