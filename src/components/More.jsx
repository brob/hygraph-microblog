import React, { useState, useEffect } from "react";
import PostContent from "./PostContent";
import Reply from "./Reply";

const query = `query MyQuery($cursor: String!, $size: Int!) {
    postsConnection(after:$cursor, first:$size,  orderBy: createdAt_DESC) {
        postsArray:edges {
          cursor
          post: node {
            content {
              html
            }
            id
            createdAt
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
}`





const More = ({currentCursor, size=1}) => {
    const [posts, setPosts] = useState([])
    const [cursor, setCursor] = useState(currentCursor)
    const [hasNext, setHasNext] = useState(true)
    const getMore = async () => {
        console.log('gonna do it!')
        console.log({cursor,currentCursor})
        const response = await fetch(
            "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clcrreocx0oot01ur229906i3/master",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                query: query,
                variables: {
                    size: size,
                    cursor: cursor
                }
            }
        )});
        const json = await response.json();
        const { data } = json
        console.log(data)
        const { postsArray, pageInfo } = data.postsConnection
        console.log({postsArray})
        
        // When response comes back, update posts, cursor, and hasNext
        // and add the posts to the existing posts
        setPosts([...posts, ...postsArray])

        
        setPosts(postsArray)
        setCursor(pageInfo.endCursor)
        setHasNext(pageInfo.hasNextPage)
    }
    console.log({posts})
    return (
        <>
        {posts.map((post) => (
            <div key={post.cursor} className="prose bg-white  max-w-4xl mb-4 p-4 rounded-md">
                <PostContent post={post.post} />
                <Reply />
            </div>
        ))}
    
       {hasNext && <button className="bg-white mb-4 p-4 rounded-md" onClick={getMore}>Get More </button>}
       </>
    );
}

export default More