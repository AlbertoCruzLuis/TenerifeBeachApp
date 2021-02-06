import React, { useState, useEffect, Fragment } from 'react'
import Card from 'components/Card'
import './style.css'
import Pagination from '@material-ui/lab/Pagination';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router-dom'
import { getBeachList } from 'services/DataService'

const ListCard = ({limitItemsPerPage = 5, scrollPosition}) => {
    const [beaches, setBeaches] = useState([])
    const [originalBeaches, setOriginalBeaches] = useState([]);
    const history = useHistory()

    useEffect(() => {
        getBeachList(setBeaches,setOriginalBeaches,history)
    }, [history])

    const handleChange = (e,page) => {
        let data = originalBeaches

        let first_index = (page - 1) * limitItemsPerPage
        let last_index = data.length > limitItemsPerPage + ((page - 1) * limitItemsPerPage)
         ? limitItemsPerPage + ((page - 1) * limitItemsPerPage) 
         : data.length
        
        setBeaches(data.slice(first_index, last_index));
    }

    return(
        <Fragment>
            <div className="list-card">
                { beaches.map((beach, index) => {
                    return (
                        <Card
                            key={index}
                            id={beach._id}
                            name={beach.name}
                            image={beach.image}
                            scrollPosition={scrollPosition}
                        />
                    )
                }) }
            </div>
            <div className="pagination">
                <Pagination count={Math.ceil(originalBeaches.length / limitItemsPerPage)}
                    onChange={handleChange}
                    showFirstButton showLastButton />
            </div>
          </Fragment>
    );
}

export default trackWindowScroll(ListCard);