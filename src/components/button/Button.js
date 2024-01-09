const Button = ({ handleButtonMore }) => {
  return (
    <button type="button" className="Button" onClick={handleButtonMore}>
      Load more
    </button>
  );
};

export default Button;
