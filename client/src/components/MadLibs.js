

function MadLibs(props) {
    const display = () => {
        <div>
            <h3>{props.category}</h3>
            <h4>item: {props.key}</h4>
        </div>
    }

    return (
        {display}
    )
}

export default MadLibs