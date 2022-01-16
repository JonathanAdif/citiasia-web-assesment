import '../Styles/Tgl.css';
import moment from 'moment'
const dateTime = new Date()

function Tgl() {
  return (
    <div className="Tgl" >
        
        <center>
           <div className='tanggal'>
           <h2>Don't missed it!</h2>
           <h2>Current Date and Time :</h2>
           <h5>{moment(dateTime).format('llll')}</h5>
           </div>
        </center>
    

    </div>
  );
}

export default Tgl;