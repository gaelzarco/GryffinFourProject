import { useEffect, useState } from "react"

function MadLib(props) {
    const [ madlib, setMadlib ] = useState('')
    const target = props.target

    useEffect(() => {
        fetch(`/madlibs/${target}`)
            .then((res) => console.log(res.json()))
            .then((madlib) => setMadlib(madlib))
            .catch((err) => {
                console.log(`there seems to be an err ${err}`)
            })
    }, [target])


    const displayMadLib = () => {
        if (madlib) {
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