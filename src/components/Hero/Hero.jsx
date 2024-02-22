import HeroImage from './../../assets/images/hero-1.jpeg'

import './Hero.scss';

const Hero = () =>{
    return(
        <>
        <section className="hero">
            <div className="hero__side-left">
                <img className='hero__image' src={HeroImage} alt="" />
            </div>
            <div className="hero__side-right">
                <div className='hero__text-container'>
                    <p className='hero__text hero__text--top'>85% would make this again</p>
                    <h1 className='hero__title'>Mighty Super Cheesecake</h1>
                    <p className='hero__text hero__text--bottom'>Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;