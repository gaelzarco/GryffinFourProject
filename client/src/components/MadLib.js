import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function MadLib() {
    const [ madlib, setMadlib ] = useState('')
    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        fetch(`/madlibs/${id}`)
            .then((res) => res.json())
            .then((madlib) => setMadlib(madlib))
            .catch((err) => {
                console.log(`there seems to be an err ${err}`)
            })
    }, [id])

    console.log(madlib)

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