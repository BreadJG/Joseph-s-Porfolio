import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel fade interval={3000} className="fullCarousel">
        <Carousel.Item>
                <img
                className='w-100 d-block'
                src={require('./images/ParkPioneer.png')}
                alt='Park Pioneer'
            />
                <Carousel.Caption>
                    <div className="carouselBG">
                        <h5>Park Pioneer</h5>
                        <div>An app that allows you to browse through and plan a trip to any National Park.</div>
                        <div className="row">
                            <a className="col link-warning" href="https://github.com/Tayjanee/CapstoneProject" target='blank'>Github</a>
                        </div>
                    </div>    
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
             className='w-100 d-block'
             src={require('./images/PokemonGame.png')}
             alt='PokemonGame'
            />

            <Carousel.Caption>
                <div className='carouselBG'>
                    <h5 >Pokemon Game</h5>
                    <div>A fun game for Pokemon fans to test your Pokemon knowledge.</div>
                    <div className="row">
                        <a className="col link-warning" href="https://github.com/BreadJG/pokemonGame" target='blank'>Github</a>
                        <a className="col link-warning" href="https://playful-kitsune-b02b78.netlify.app/" target='blank'>Netlify</a>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className='w-100 d-block'
            src={require('./images/Drink182.png')}
            alt='Drink182'
            />

            <Carousel.Caption>
                <div className='carouselBG'>
                    <h5 >Drink 182</h5>
                    <div>The mission at Drink-182 is to find the best cocktail for you with what you have - plain and simple.</div>
                    <div className="row">
                        <a className="col link-warning" href="https://github.com/joudom/Drink-182" target='blank'>Github</a>
                        <a className="col link-warning" href="https://www.youtube.com/embed/ju64DXZ0ZP4" target='blank'>YouTube Demo</a>
                    </div> 
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className='w-100 d-block'
            src={require('./images/CRM.png')}
            alt='CRM'
            />

            <Carousel.Caption>
                <div className='carouselBG'>
                    <h5>Sexy CRM</h5>
                    <div>A simple, clean and efficient CRM App to help organize and manage any business.</div>
                    <div className="row">
                        <a className="col link-warning" href="https://github.com/TrisanHarto/FullStack" target='blank'>Github</a>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;