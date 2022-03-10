import {useMemo} from "react";

export const useSortedPosts = (posts, sortBy) => {
    const sortedPosts = useMemo( () => {
            if (sortBy)
                return [...posts].sort( (a, b) => a[sortBy].localeCompare(b[sortBy]))
            return posts
        },[sortBy, posts])

    return sortedPosts
}

export const usePosts = (posts, sortBy, searchQuery) => {
    const sortedPosts = useSortedPosts(posts, sortBy)

    const sortedAndFilteredPosts = useMemo( () => {
        return sortedPosts.filter( post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    return sortedAndFilteredPosts
}