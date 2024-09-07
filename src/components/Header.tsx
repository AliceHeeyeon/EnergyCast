import { useState } from "react";
import Hamburger from 'hamburger-react';
//components
import Menu from "./Menu";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <>
        <nav>
          <div className="nav-mobile">
              <h2>Energy Cast</h2>
              <div className="options">
                  <p className="option-dashboard">Dashboard</p>
                  <p className="option-map">map</p>
              </div>
            <div className="hamburger-menu-mobile">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
    
          </div>

        </nav>
        {isOpen && <Menu toggled={isOpen} toggle={setOpen} />}
      </>
    )
}

export default Header
