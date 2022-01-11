import React, {useEffect,useState} from 'react'
import Beeritem from './Beeritem'
import '../styles/Catalog.css'

function Catalog() {
    let [apiData, setApiData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('https://api.punkapi.com/v2/beers')
            let data = await response.json()
            setApiData(data)
        }
        fetchData()
    } 
    ,[])

    console.log(apiData)
    

    return (
        <div className={'catalog-container'}>
            <h1>Beer List</h1>
            {apiData.map(
                beer => {
                    return <Beeritem name={beer.name} description={beer.description} imgURL={beer.image_url}/>
                }
            )}
        </div>
    )
}

export default Catalog
