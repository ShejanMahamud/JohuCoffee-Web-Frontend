import React, { createContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from '../components/Banner'
import Coffies from '../components/Coffies'
import Follow from '../components/Follow'
import Speciality from '../components/Speciality'
export const CoffeeContext = createContext(null)

const Home = () => {

const {data} = useLoaderData();
const [coffees, setCoffees] = useState(data)
const coffeeInfo = {coffees,setCoffees}

  return (
    <CoffeeContext.Provider value={coffeeInfo}>
    <Banner></Banner>
    <Speciality></Speciality>
    <Coffies></Coffies>
    <Follow></Follow>
    </CoffeeContext.Provider>
  )
}

export default Home