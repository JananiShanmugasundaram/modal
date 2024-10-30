function Button({ onClick, name }) {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
