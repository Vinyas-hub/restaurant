import React from 'react';
import Logimg from '../../Images/logo.png';
import styled, { css } from 'styled-components'
import { NavLink as Link } from 'react-router-dom';


 const Navstyle = {
    background  :  "#282828", 
    border: "2px solid blue",
    fontFamily  :  "verdana",
    position: "relative",
     color : "#8e9a8c"
  };

  const headerblocktop = {
    position: "absolute",
      zIndex: "11",
      width: "100",
      top: "0",
      left: "0"
  }


export const Nav = styled.div`
  height: 60px;
  background-color: black;
  position:relative;
`;

 const NavMenu = styled.div`
  width:10%;
  position:absolute;

`;
export const Navnav = styled.nav`

`;

export const NavLink = styled(Link)`
padding: 43px 0px 15px;
	margin: 0 14px;
	color: #fff;
	font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.6px;
	position:relative;
	-webkit-transition: color 0.4s;
    transition: color 0.4s;
    font-weight: 500;
    font-size: 14px;
`;
export const Header = () =>{
  return(
    <header style={headerblocktop}>
      <NavMenu>
      <Navnav>

      <NavLink class="navlink" to='/about' activeStyle>
      About
      </NavLink>
      <NavLink class="navlink" to='/about' activeStyle>
      About
      </NavLink>
      </Navnav>
      </NavMenu>
    </header>
  );
};



// export const NavMenu = () => {
//     return (
//       <Container><h3 style="font-size:2vw;">Example of div inside a div.</h3>
//       <p style="font-size:2vw;">It has background color = #33cc33.</p>
//       <p style="font-size:2vw;">This is some text in a div element.</p></Container>
//     );
// };
// export const NavMenu = styled.nav`
//   background: #63D471;
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
//   /* Third Nav */
//   /* justify-content: flex-start; */
// `;


// export const NavLog = () => {
//     return (
//         <div style={Navstyle}>
//             <img src={Logimg}></img>
//       </div>
//     );
// };


  

//   export default Nav;