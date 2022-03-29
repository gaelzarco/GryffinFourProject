import MadLibs from "./MadLibs"

function MadLibList(props) {

    const display = () => {
        const data = props.data

        return data.map((category, index) => {
            return (
                <li key={index} >{category.madlibs}</li>
            )
        })
    }

    return (
        <div>
            {display()}
        </div>
    )
}

export default MadLibList