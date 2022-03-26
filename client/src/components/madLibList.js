import MadLibs from "./MadLibs"

function MadLibList(props) {
    // console.log('receiving click')
    // const category = props.data.read()

    // const display = data.map((category, index) => {
    //     return (
    //         <MadLibs category={category} key={index} />
    //     )
    // })

    return (
        <div>
            <MadLibs category={props.category} />
        </div>
    )
}

export default MadLibList