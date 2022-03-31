import { useState } from "react"
import MadLib from "./MadLib"

function MadlibHome(props) {
    const [ view, setView ] = useState([])
    const data = props.data

    const renderCatList = () => {
        return data.map((category, index) => {
            return (
                <>
                    <div className='category' id={category.name} key={index} onClick={(e) => {renderMadList(e.target.id)}} style={{backgroundImage: `url(${category.img})`}}>
                        {category.name}
                    </div>
                </>
            )
        })
    }

    const renderMadList = (target) => {
        let result = data.filter((category) => {
            if (category.name === target) {
                return category
            }
        })

        return (
            result.map((category) => {
                    setView(category.madlibs)
                }
            )
        )
    }

    const renderMadLib = (e) => {
        let target = e.target.id

        return (
            <MadLib target={target} />
        )
    }

    return(
        <div>
            {view.map((madlib, index) => {
                console.log(madlib._id)
                return <li><a key={index} href={madlib._id} id={madlib._id} onClick={(e) => {renderMadLib(e)}}>{madlib.name}</a></li>
            })}
            <div className="wrapper">
                {renderCatList()}
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