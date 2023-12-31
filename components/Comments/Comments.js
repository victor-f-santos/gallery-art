import { v4 as uuidv4 } from "uuid";

export default function Comments ({comments}) {
    const commentsWithID = comments?.map( comment => ({'id':uuidv4(),...comment}))
    return (
        <> 
        <h3>Comments:</h3>
        { Boolean(commentsWithID)===false ? (<li>Be the first to leave a comment!</li>) :
         (commentsWithID.map( comment => <li key={comment.id}>{comment.comment}, {comment.time} {comment.date}</li>))
        }
        </>
    );
}