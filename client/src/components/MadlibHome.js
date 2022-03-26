import MadLibList from "./MadLibList"
import { useState } from "react"

function MadlibHome() {
    const [ view, setView ] = useState('false')


    const renderMadList = (category) => {
        setView(!view)

        if (view) {
            return (
            <>
            {console.log('state is true')}
            <MadLibList category={category}/>
            </>
            )
        } else {
            console.log('state is false')
        }
    }

    return(
        <div>
            <div className="wrapper">
                <div className="category horror" onClick={(className) => renderMadList(className)}>Horror</div>
                <div className="category scifi">Sci-fi</div>
                <div className="category history">History</div>
                <div className="category">Movies</div>
                <div className="category">Biography</div>
                <div className="category">Music</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
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