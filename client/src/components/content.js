import React from 'react'

function Content(props) {
    const data = props.data

    return (
        <div className="card__content">
            <p>  
                Real {data.nounOne} is Dangerous, but I never {data.verbEd} when it came to {data.nounTwo}. She was an {data.nounThree}. She just wanted to {data.verbOne} her Role. She'll be cool if its {data.adjective}
            </p>
        </div>
    )
}

export default Content;