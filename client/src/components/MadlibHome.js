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
                <h3>Created by</h3>
                <div>
                <p>CJ</p>
                </div>
                <div>
                <p>Bibbs</p>
                </div>
                <div>
                <p>Gael</p>
                </div>
                <div>
                <p>Jo</p>
                </div>
            </footer>
        </div>
    )
}

export default MadlibHome