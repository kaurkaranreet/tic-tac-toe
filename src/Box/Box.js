function Box(props) {
  return (
    <button id="box-button" className="box" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Box;
