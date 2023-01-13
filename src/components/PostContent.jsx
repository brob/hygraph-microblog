const PostContent = ({ post }) => {

const { content, id, slug, createdAt } = post
console.log({post})
return (
    <>
    <div dangerouslySetInnerHTML={{__html: content.html}}></div>
    <time><a href={`/posts/${slug}`}>{createdAt}</a></time>
    </>
)
}

export default PostContent