import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export const queryHook = () =>{
    const onSuccess = (data) => {
        console.log('Perform Side Effect of Success', data)
    }
    const onError = (error) => {
        console.log('Perform Side Effect of Error', error)
    }
   
    return useQuery(['product'], () => {
        return axios.get('http://localhost:3500/categoryData')
    }
        // , {
        //     staleTime: 30000,
        //     cacheTime: 5000,
        //     refetchOnMount: true,
        //     refetchOnWindowFocus: true,
        //     refetchInterval : false or time ,
        //     refetchIntervalInBackgroun : true
        // }
        // , {
        //     enabled: false
        // }
        , {
            onSuccess,
            onError,
            // select: (data) => {
            //     const dataName = data.data.map((category) => category.name)
            //     return dataName
            // }
        })
}