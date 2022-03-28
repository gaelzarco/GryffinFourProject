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
  <div class="category movies">Movies</div>
  <div class="category bio">Biography</div>
  <div class="category music">Music</div>
  <div class="category anime">Anime</div>
  <div class="category books">Books</div>
  <div class="category tv">TV</div>
  <div class="category health">Health</div>
  <div class="category nature">Nature</div>
  <div class="category gaming">Gaming</div>
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