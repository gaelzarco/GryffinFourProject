import { useState } from "react"

function MadlibHome(props) {
    const [ listView, setListView ] = useState([])
    // state used for the madlibs in the user selected category
    const data = props.data
    // sets props.data to variable
    
    const renderCatList = () => {
        if (data) {
            // checks to see if props.data exists
            return data.map((category, index) => {
                // maps through array of objects and inecrements index number
                return (
                    // returns div for each category and assigns values to attributes
                    <div className='category' id={category.name} key={index} onClick={(e) => {renderMadList(e.target.id)
                    // when each div is clicked, renderMadList is called and is passed the event target id (category.name)
                    }} style={{backgroundImage: `url(${category.img})`}}>
                        {category.name}
                    </div>
                )
            })
        }
    }

    const renderMadList = (target) => {
        // e.target.id is passed from onClick event in renderCatList and is received as target
        return data.filter((category) => {
            // filters through props.data to find the category.name that matches the id (category.name) that the user clicks on
            if (category.name === target) return true
            // returns true if its a match
            else return false
            // returns false if category.name does not match id and continues iterating over array
        }).map((category) => {
            // after the category the user selects is found in data, it is then mapped over and sets useState to the madlibs in the selected category
             return setListView(category.madlibs)
             // this listView state is then used in the component's return statement
            }
        )
    }

    return(
        <div key='category'>
            {listView.map((madlib, index) => {
                // the listView state, which is the user's selected madlib category, is mapped over to return each madlib as a list item and is assigned its respective attributes. This list view is rendered above the category divs.
                // renderMadLib is assigned to an onClick event for each list item and is supposed to render MadLib.js component
                // renderMadLib is not currently functional.
                return <li key={index}><a key={index} id={madlib._id} href={`/${madlib._id}`}>{madlib.name}</a></li>
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