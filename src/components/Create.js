export default function Create(){
    return (
        <main id = "create-main">
            <section id = "create-section">
                <form id = "create-form">
                    <label htmlFor = "title">
                        Title
                    </label>
                    <input id = "title" required autoFocus />
                    <label htmlFor = "author">
                        Author
                    </label>
                    <input id = "author" required/>
                    <label htmlFor = "body">Body</label>
                    <textarea id = "body" required></textarea>
                    <button id = "submit-btn">Submit</button>
                </form>
            </section>
        </main>
    );
}