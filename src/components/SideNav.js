import '../styles/SideNav.css';
import NavMenu from './NavMenu';
import Tables from '../mocks/tablenames.json';
import { useDispatch, useSelector } from 'react-redux';
import { makeTableActive } from '../state/actions/index';

function SideNav() {
  const selectedTableState = useSelector((state)=>{return state.handleNavTableClick});
  const dispatch = useDispatch();
  return (
    <div className="sideNavContainer">
      Hello SideNav
      {
        Tables.map(table => {
            return (
              <NavMenu 
                key={table.id} 
                tableName={table.name} 
                onClick={ () => {
                  console.log("Clicked");
                  console.log(table.id);
                  return dispatch(makeTableActive(table.id))
                }}
              ></NavMenu>
            )
        })
      }
      {selectedTableState.currentActiveTableId}
    </div>
  );
}

export default SideNav;
