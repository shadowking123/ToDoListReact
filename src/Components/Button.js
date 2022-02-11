const Button = ({text, color, onAdd}) => {
  return (
    <div>
        <button style={{backgroundColor:color}} className='btn' onClick={onAdd}>{text}</button>
    </div>
  )
}
Button.defaultProps = {
    title: "BUTTON TXT",
    color: "black"
  };
export default Button