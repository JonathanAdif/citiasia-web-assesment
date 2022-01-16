import '../Styles/Profile.css';
import profil from '../image/profil.jpg';

function Profile() {
  return (

    <div className='Profile' id='pf'>
        
        <div className='profile1'>
      <center>
      <table className='pftb'>
              <tr>
              <td><img src={profil} class="img-thumbnail" alt="profil"></img> </td>
              <td id='pro'> 
                <h2>Jonathan Christian Adif Sugiarto</h2>
                <p>
                "Saya adalah seorang mahasiswa aktif program studi <br></br>
                informatika Universitas Multimedia Nusantara <br></br>
                angkatan 2019. Saya menyukai dan sedang terus <br></br>
                mendalami bidang web development dan software <br></br>
                engineering."
               </p>
              </td>
              </tr>
            </table>
      </center>
         
      
        </div>
        
    </div>
   
  );
}

export default Profile;

