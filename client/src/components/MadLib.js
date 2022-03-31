import { useEffect, useState } from "react"

function MadLib(props) {
    const [ data, setData ] = useState('')
    const target = props.target

    useEffect(() => {
        fetch(`/madlibs/${target}`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [data.name])

    return (
        <div>
            {console.log(data)}
        </div> 
    )
}

export default MadLib