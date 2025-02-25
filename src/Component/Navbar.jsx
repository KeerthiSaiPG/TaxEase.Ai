import WithSubnavigation from "./Navitem"
import {
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Divider,
    Link,
} from '@chakra-ui/react'

import twitter from "../Images/icons8-twitter-30.png"
import insta from '../Images/icons8-instagram-old-50.png'
import linkedin from '../Images/icons8-linkedin-2-30.png'
import youtube from '../Images/icons8-youtube-24.png'
import sidetwitter from "../Images/icons8-twitter-squared-48.png"

import sidelinkedin from '../Images/icons8-linkedin-48.png'
import styled from "styled-components"
// import { hover } from "@testing-library/user-event/dist/hover"


function Navbar() {
  return (
    <DIV>
      <div className="navbar">
        <WithSubnavigation />
        <div className="side-icon"></div>
      </div>
    </DIV>
  );
}

export default Navbar;

const DIV = styled.div`
  .navbar {
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;/* Google Grey */
    color: white;
  }

  .sideconnectiondiv:hover {
    transform: scaleX(1.2);
    cursor: pointer;
  }
`;
