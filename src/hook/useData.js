import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

const fetchValue = () =>{
   return axios.get(`http://localhost:3500/categoryData/`)
}


export const useData = (heroId) =>{
          return useQuery(['category-page', heroId] , ()=> fetchValue(heroId))
}