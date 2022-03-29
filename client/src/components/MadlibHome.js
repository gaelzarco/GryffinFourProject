
import MadLibList from "./MadLibList"
import { useState } from "react"

function MadlibHome(props) {
    const [ view, setView ] = useState(false)

    const renderList = () => {
        const data = props.data

        if (view === true) {
            return (
            <>
            <MadLibList data={props.data} />
            </>
            )
        }
        
        return data.map((category, index) => {
            return (
                <>
                    <div className='category' key={index} onClick={() => {setView(!view)}}>{category.name}</div>
                </>
            )
        })
    }

    return(

        <div>
            <div className="wrapper">
                {renderList()}
            </div>

            <footer>
                <ul>
                    <li><h4>Created by:</h4></li>
                    <li>CJ</li>
                    <li>Bibbs</li>
                    <li>Gael</li>
                    <li>Jo</li>
                </ul>
            </footer>
        </div>
    )
}

export default MadlibHome