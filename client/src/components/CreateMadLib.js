function CreateMadLib(props) {
    const data = props.data

    const renderOptions = () => {
        if (data) {
            return data.map((category, index) => {
                return(
                    <option value={category.id} key={index}>{category.name}</option>
                )
            })
        }
    }

    return (
        <div>

            <div className="form">
            <h2>Create a New Madlib</h2>
            <form action="/madlibs" method="POST">

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    // required
                />
                <label htmlFor="content">Text Content</label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    // required
                />
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    // required
                />
                <label htmlFor="genre">Genre</label>
                <select id="genre" name="genre">
                    {renderOptions()}
                </select>
                <input type="submit"/>
            </form>
        </div>
    </div>
    )
}

export default CreateMadLib