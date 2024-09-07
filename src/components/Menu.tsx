type MenuProps = {
    toggled: boolean;
    toggle: (isOpen: boolean) => void;
  };

const Menu: React.FC<MenuProps> = ({toggle}) => {
    const handleMenuClick = () => {
        toggle(false)
      }
      return (
        <div className='nav-menu'>
          <ul>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <p>Overview</p>
            </li>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <p>Demand forecast</p>
            </li>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <p>Household Usage Dashboard</p>
            </li>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <p>Generation forecast</p>
            </li>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <p>Grid optimazation</p>
            </li>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <p>Scenario analysis</p>
            </li>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <p>Alter</p>
            </li>
            <li className='cursor-pointer' onClick={() => handleMenuClick}>
                <p>Settings</p>
            </li>
          </ul>
        </div>
      )
}

export default Menu
