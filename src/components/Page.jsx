import React from 'react'
import { Link } from 'react-router-dom'
import { queryHook } from '../hook/queryHook'


const Page = () => {
    const onSuccess = (data) => {
        console.log('Perform Side Effect of Success', data)
    }
    const onError = (error) => {
        console.log('Perform Side Effect of Error', error)
    }

    const { isLoading, data, isError, error, isFetching } = queryHook(onSuccess, onError)

    console.log({ isFetching, isLoading })

    if (isLoading || isFetching) {
        return <h1>Loading.....</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    console.log(data)
    return (
        <div>
            <button >Add Me</button>
            {
                data.data.map(post => {
                    return <div className='cursor-pointer' key={post.value}> <Link to={`/category/${post.value}`} >{post.name}</Link> </div>
                })
            }
            {/* {
                data.map(name => {
                    return <div className='cursor-pointer' key={name}> <Link to='/category'>{name}</Link> </div>
                })
            } */}




        </div >

    )
}

export default Page
