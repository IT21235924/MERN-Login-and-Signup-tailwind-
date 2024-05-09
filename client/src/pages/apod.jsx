import React from 'react'
import Main from '../components/Main';
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import { useEffect, useState } from 'react';

const Homepage = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showModel, setShowModel] = useState(false)

    function handleToggleModel() {
        console.log('toogle click')
        setShowModel(!showModel)
    }

    useEffect(() => {
        async function fetchAPIData() {

            const API_KEY = import.meta.env.VITE_NASA_API_KEY
            const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${API_KEY}`

            const today = (new Date()).toDateString()
            const localKey = `NASA-${today}`
            if (localStorage.getItem(localKey)) {
                // const apiData = JSON.parse(localStorage.getItem(localKey))
                const apiData = JSON.parse(localStorage.getItem(localKey) || "");
                setData(apiData)
                console.log('Fetched from cache today')
                return
            }
            localStorage.clear()

            try {

                const res = await fetch(url)
                const apiData = await res.json()
                localStorage.setItem(localKey, JSON.stringify(apiData))
                setData(apiData)
                console.log('Fetched from API today')

            } catch (error) {
                console.log(error)
            }
        }

        fetchAPIData()

    }, [])
    return (
        <>
            {data ? (<Main data={data} />) : (
                <div className="loadingState">
                    <i className="fa-solid fa-gear"></i>
                </div>
            )}

            {showModel && (
                <SideBar data={data} handleToggleModel={handleToggleModel} />
            )}

            {data && (<Footer data={data} handleToggleModel={handleToggleModel} />)}
        </>
    )
}

export default Homepage