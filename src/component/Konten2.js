import '../Styles/Konten2.css';
import gb1 from '../image/cr1.jpg';
import gb2 from '../image/cr2.png';
import gb3 from '../image/cr3.jpg';

function Konten2() {
  return (

    <center>
 <div className='bd-example' id='kt2'>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={gb1} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Bimbingan Teknis Tangerang Smart City</h5>
        <p>Binong - 31/1/2022 - 18.00 WIB</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={gb2} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block" >
        <h5>Bimbingan Teknis Jakarta Smart City</h5>
        <p>Kebayoran - 25/2/2022 - 18.00 WIB</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={gb3}class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Bimbingan Teknis Bandung Smart Cityl</h5>
        <p> lembang - 20/5/2022 - 18.00 WIB</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </center>
   
    
  );
}

export default Konten2;