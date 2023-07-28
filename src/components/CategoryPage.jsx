import React from 'react'
import { useData } from '../hook/useData'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
    const { value } = useParams()
    const { isError, isLoading, error, data } = useData(value)

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>
            Category Detials
            <div>
                {
                    data?.data.value
                } - {
                    data?.data.name
                }
            </div>
        </div>
    )
}

export default CategoryPage
