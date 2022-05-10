import '../styles/SideNav.css';
import NavMenu from './NavMenu';
import Tables from '../mocks/tablenames.json';

function SideNav() {
  return (
    <div className="sideNavContainer">
      Hello SideNav
      {
        Tables.map(table => {
            return <NavMenu tableName={table.name}></NavMenu>
        })
      }
    </div>
  );
}

export default SideNav;
