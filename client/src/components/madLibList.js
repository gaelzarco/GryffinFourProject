import MadLibs from "./MadLibs"

function MadLibList(props) {
    console.log('receiving click')
    const data = props.data.read()

    const display = data.map((category, index) => {
        return (
            <MadLibs category={category} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default MadLibList