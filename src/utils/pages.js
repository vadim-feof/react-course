export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    const pages = []
    for (let i = 0; i < totalPages; i++)
        pages.push(i + 1)
    return pages
}