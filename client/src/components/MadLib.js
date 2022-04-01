import { useEffect, useState } from "react"

function MadLib(props) {
    const [ madlib, setMadlib ] = useState(null)
    const target = props.target

    useEffect(() => {
        fetch(`/madlibs/${target}`)
            .then((res) => res.json())
            .then((madlib) => setMadlib(madlib))
    }, [target.name])


    const displayMadLib = () => {
        if (madlib) {
            console.log(madlib)
            console.log(madlib.name)
            return(
            <>
                <h2>{madlib.name}</h2>
                <p>Genre: {madlib.genre} Created by: {madlib.author}</p>
                <h4>{madlib.content}</h4>
            </>
            )
        }
    }

    return (
        <div>
            {displayMadLib()}
        </div> 
    )
}

export default MadLib