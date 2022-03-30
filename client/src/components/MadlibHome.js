
import MadLibList from "./MadLibList"
import { useState } from "react"



function MadlibHome(props) {
    const [ view, setView ] = useState(false)

    const renderList = () => {
        const data = props.data
        
        return data.map((category, index) => {
            return (
                <>
                    <div className='category' key={index} onClick={() => {renderMadList()}}>{category.name}</div>
                </>
            )
        })
    }

    const renderMadList = () => {
        setView(view => !view)

        if (view === true) {
            return (
            <>
            {console.log('state is true')}
            <MadLibList />
            </>
            )
        }
    }

    return(

        <div>
            <div className="wrapper">

                <div className="category horror" onClick={(e) => renderMadList(e)}>Horror</div>
                <div className="category scifi" onClick={(e) => renderMadList(e)}>Sci-fi</div>
                <div className="category history" onClick={(e) => renderMadList(e)}>History</div>
                <div className="category movies" onClick={(e) => renderMadList(e)}>Movies</div>
                <div className="category biography" onClick={(e) => renderMadList(e)}>Biography</div>
                <div className="category music" onClick={(e) => renderMadList(e)}>Music</div>
                <div className="category anime" onClick={(e) => renderMadList(e)}>Anime</div>
                <div className="category books" onClick={(e) => renderMadList(e)}>Books</div>
                <div className="category tv" onClick={(e) => renderMadList(e)}>TV</div>
                <div className="category health" onClick={(e) => renderMadList(e)}>Health</div>
                <div className="category nature" onClick={(e) => renderMadList(e)}>Nature</div>

                {renderList()}
                <MadLibList data={props.data}/>

            </div>

          <footer>
                <ul>
                    <li>Created By:</li>
                    <li>Bibbs</li>
                    <li>Gael</li>
                    <li>CJ</li>
                    <li>Jo</li>
                </ul>
          </footer>
        </div>
    )
}

export default MadlibHome