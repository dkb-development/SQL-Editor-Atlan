import '../styles/NavMenu.css'

function NavMenu(props) {
  return (
    <div className="NavMenu">
      {props.tableName}
    </div>
  );
}

export default NavMenu;
