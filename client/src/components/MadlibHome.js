import { useState } from "react"
import MadLib from "./MadLib"

function MadlibHome(props) {
    const [ listView, setListView ] = useState([])
    const data = props.data
    
    const renderCatList = () => {
        if (data) {
            return data.map((category, index) => {
                return (
                    <div className='category' id={category.name} key={index} onClick={(e) => {renderMadList(e.target.id)}} style={{backgroundImage: `url(${category.img})`}}>
                        {category.name}
                    </div>
                )
            })
        }
    }

    const renderMadList = (target) => {
        return data.filter((category) => {
            if (category.name === target) return true
            else return false
        }).map((category) => {
             return setListView(category.madlibs)
            }
        )
    }

    const renderMadLib = (e) => {
        let target = e.target.id
        

        return (
                <MadLib target={target} />
        )
    }

    return(
        <div key='reactBuggin'>
            {listView.map((madlib, index) => {
                return <li key={index} id={madlib._id} onClick={(e) => {renderMadLib(e)}}>{madlib.name}</li>
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