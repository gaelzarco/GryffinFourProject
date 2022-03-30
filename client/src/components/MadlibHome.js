
// import MadLibList from "./MadLibList" 
import { useState } from "react"

function MadlibHome(props) {
    const [ view, setView ] = useState(false)
    const data = props.data

    const renderCatList = () => {
        return data.map((category, index) => {
            return (
                <>
                    <div className='category' id={category.name} key={index} onClick={() => {setView(!view)}}>
                        {category.name}
                    </div>
                </>
            )
        })
    }

    const renderMadList = () => {
        if (view === true) {
            return (
                data.map((category) => {
                    return (
                        category.madlibs.map((madlib, index) => {
                            return (
                                <>
                                    <h2>{category.name}</h2>
                                    <li key={index}>{madlib}</li>
                                </>
                            )
                        })
                    )
                })
            )
        }
    }

    return(
        <div>
            {renderMadList()}
            <div className="wrapper">
                {renderCatList()}
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