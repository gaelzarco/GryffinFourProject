function CreateMadLib() {
    return (
        <div>
            <h2>Create a New Madlib</h2>
            <form action="/madlidbs" method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                />
                <label htmlFor="content">Text Content</label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    required
                />
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    required
                />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default CreateMadLib