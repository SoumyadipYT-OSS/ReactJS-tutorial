import image1 from './assets/linkedin.png';

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={image1} alt="picture not reload" />
            <h2 className='card-title'>Learner</h2>
            <p className='card-text'>ReactJS is fun!</p>
        </div>
    );
}

export default Card;