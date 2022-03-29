import MadLibs from "./MadLibs"

function MadLibList(props) {

    const display = () => {
        const data = props.data

        return data.map((category, index) => {
            return (
                <div>
                    <h2>{category.name}</h2>
                    <h3 key={index} >{category.madlibs}</h3>
                </div>
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