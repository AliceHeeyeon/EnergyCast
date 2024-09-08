import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react';
//components
import Menu from "./Menu";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
      <>
        <nav>
          <div className="nav-mobile">
              <h2 onClick={() => navigate('/')}>ENERGYCAST</h2>
              <div className="nav-option">
                <div className="options">
                    <p className="option-dashboard" onClick={() => navigate('/graphdashboard')}>Dashboard</p>
                    <p className="option-map" onClick={() => navigate('/shortagemap')}>map</p>
                </div>
                <div className="hamburger-menu-mobile">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
              </div>
          </div>

        </nav>
        {isOpen && <Menu toggled={isOpen} toggle={setOpen} />}
      </>
    )
}

export default Header
