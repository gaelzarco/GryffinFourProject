import MadLibList from "./MadLibList"
import { useState, useEffect } from "react"


function MadlibHome() {
    const [ data, setData ] = useState(null)
    const [ view, setView ] = useState(false)
    const [ category, setCategory ] = useState('')

    useEffect(() => {
        fetch('/madlibs')
            .then((res) => setData(res))
            
            console.log(data)
    }, [])

    const renderMadList = (e) => {
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

    // const display = () => {
    //     const genres = data.read()

    //     genres.map(())
    // }

    return(
        
        <div>

{/*Jo's test*/}

            <MadLibList category={category} />
            <div className="wrapper">
                <div className="category horror" onClick={(e) => renderMadList(e)}>Horror
                </div>
                <div className="category scifi" onClick={(e) => renderMadList(e)}>Sci-fi</div>
                <div className="category history" onClick={(e) => renderMadList(e)}>History</div>
                <div className="category movies" onClick={(e) => renderMadList(e)}>Movies</div>
                <div className="category biography" onClick={(e) => renderMadList(e)}>Biography</div>
                <div className="category music" onClick={(e) => renderMadList(e)}>Music</div>
                <div className="category" >Example</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
                <div className="category">Example</div>
            </div>


 <div class="wrapper">
  <div class="category horror">Horror</div>
  <div class="category scifi">Sci-fi</div>
  <div class="category history">History</div>
  <div class="category">Movies</div>
  <div class="category">Biography</div>
  <div class="category">Music</div>
  <div class="category">Example</div>
  <div class="category">Example</div>
  <div class="category">Example</div>
  <div class="category">Example</div>
  <div class="category">Example</div>
  <div class="category">Example</div>
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