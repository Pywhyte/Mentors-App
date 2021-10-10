import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) =>
                a[sort].localeCompare(b[sort]))
        }
        return posts

    }, [sort, posts])

    return sortedPosts
}

export const useUser = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearched = useMemo(() => {
        return sortedPosts.filter(post => post.name.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearched
}