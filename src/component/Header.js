import '../Styles/Header.css';


function Header() {
  return (
    <div className='Header'>
     <div className="Header1">

      <table className='tbh'cellSpacing='20px'>
        <tr>
          <td><a href='#'><img className='logociti'  src='https://www.pm.citiasiainc.id/user-uploads/app-logo/ddc2546ba8a93a5d01ae0d1de06c3af4.png'></img></a></td>
          <td><a href='#kt2' className='nav1'>Event</a></td>
          <td><a href='#ct' className='nav2'>Contact</a></td>
          <td><a href='#pf' className='nav3'>Profile</a></td>
        </tr>
      </table>
      </div>
    </div>
   
  );
}

export default Header;