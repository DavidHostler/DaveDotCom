

const buttonStyle = {
    position:'relative',
    left:'42.5vw',
    // width: '25vw',
    // height: '5vh',
    // backgroundColor:'green',
    // color:'white',
    // backgroundColor: '#4CAF50', /* Green */
    backgroundColor:'black',
    // border: 'none',
    border: '2px solid #4CAF50',
    color: 'white',
    padding: '1vw 8vh',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '2vh',
    // margin: '4px 2px',
    cursor: 'pointer',
    borderRadius:'15px'



}

const Button = (props) =>{
    return(
        <button style={{...buttonStyle}} onClick={props.func}>
            Toggle Skills
        </button>
    )
}

export default Button;