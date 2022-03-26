import MadLibList from "./madliblist"


function MadlibHome() {
    const renderMadList = () => {
        return (
            <>
            {console.log('click went through')}
            <MadLibList />
            </>
        )
    }

    return(
        
        <div>
            
{/*Jo's test*/}

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