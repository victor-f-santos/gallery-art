export default function CommentForm ({onSubmitComment,slug}) {
    console.log('slug in commentform:',slug);
    function handleSubmit(event) {
      event.preventDefault()

      onSubmitComment(slug)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'></input>
            <button>Submit</button>
        </form>
    )
}