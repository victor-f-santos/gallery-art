export default function CommentForm ({onSubmitComment,slug}) {

    function handleSubmit(event) {
        event.preventDefault()
        const newComment = event.target.commentInput.value
        const commentInfo={
            'slug':slug,
            'comment':newComment,
            'time':formattedCurrentDateAndTime()[1],
            'date':formattedCurrentDateAndTime()[0]
        }
        onSubmitComment(commentInfo)
        
        event.target.commentInput.focus()
        event.target.reset()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="commentInput">Add comment:</label>
            <input id="commentInput" name="commentInput" type='text'></input>
            <button>Send</button>
        </form>
    )
}
function formattedCurrentDateAndTime() {
    const date = new Date();
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    const monthNum = date.getMonth();
    const month = months[monthNum]
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours()
    const minute = date.getMinutes()
    return [`${month} ${day} ${year}`, `${hour}:${minute}`];
}