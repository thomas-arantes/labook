enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }
 