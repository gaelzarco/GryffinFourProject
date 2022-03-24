export default function MadlibHome() {
    const renderMadList = () => {
        if(category) {
            
        }
    }

    return(
        <div>
            <h2>Pick a category to start!</h2>
            <div className="divCategory" id="div1">Category 1</div>
            <div className="divCategory" id="div2">Category 2</div>
            <div className="divCategory" id="div3">Category 3</div>
            <div className="divCategory" id="div4">Category 4</div>
            <div className="divCategory" id="div5">Category 5</div>
            <div className="divCategory" id="div6">Category 6</div>

            <footer>
                <h3>Created by</h3>
                <div>
                <p>CJ</p>
                </div>
                <div>
                <p>Chris</p>
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