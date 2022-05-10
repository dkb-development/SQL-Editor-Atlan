import '../styles/ResultContainer.css';

function ResultContainer(props) {
  return (
    <div className="tableContainer">
      {props.tableName}
    </div>
  );
}

export default ResultContainer;
