import { useState } from "react"
import MadLib from "./MadLib"

function MadlibHome(props) {
    const [ listView, setListView ] = useState([])
    const data = props.data
    console.log(props.data)
    

    const renderCatList = (data) => {
        
        // return data.map((category, index) => {
        //     return (
        //         <>
        //             <div className='category' id={category.name} key={index} onClick={(e) => {renderMadList(e.target.id)}} style={{backgroundImage: `url(${category.img})`}}>
        //                 {category.name}
        //             </div>
        //         </>
        //     )
        // })
    }

    const renderMadList = (target) => {
        let result = data.filter((category) => {
            if (category.name === target) {
                return category
            }
        })

        return (
            result.map((category) => {
                    setListView(category.madlibs)
                }
            )
        )
    }

    const renderMadLib = (e) => {
        let target = e.target.id
        console.log(target)

        return (
            <MadLib target={target} />
        )
    }

    return(
        <div>
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