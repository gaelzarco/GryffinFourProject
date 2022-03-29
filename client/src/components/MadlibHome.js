import MadLibList from "./madliblist"
import { useState, useEffect } from "react"


function MadlibHome() {
    const [ data, setData ] = useState('')
    const [ view, setView ] = useState(false)
    const [ category, setCategory ] = useState('')

    useEffect(() => {
        fetch('/madlibs')
            .then((res) => res.json())
            .then((data) => setData(data))
            console.log(data)
    }, [])

    const renderList = () => {
        console.log(data.name)

        if (data){
            return(
                <>
                {console.log(data.name)}
                <div className={data.name}>{data.name}</div>
                </>
            )
        }
    }

    const renderMadList = (e) => {
        e.preventDefault()
        setView(view => !view)

        if (view === true) {
            setCategory(`${e.target.className}`)

            return (
            <>
            {console.log('state is true')}
            <MadLibList category={category}/>
            </>
            )
        } else {
            console.log('state if false')
            setCategory('')
        }
    }

    return(

        <div>
            {renderList()}

            <MadLibList category={category} />
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
                <div className="category gaming" onClick={(e) => renderMadList(e)}>Gaming</div>
            </div>

            <footer>
                <ui>
                    <ul><h4>Created by:</h4></ul>
                    <ul>CJ</ul>
                    <ul>Bibbs</ul>
                    <ul>Gael</ul>
                    <ul>Jo</ul>
                </ui>
            </footer>
        </div>
    )
}

export default MadlibHome