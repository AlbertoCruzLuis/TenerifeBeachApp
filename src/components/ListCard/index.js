import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Card from 'components/Card'
import API_URL from 'config'
import './style.css'
import Pagination from '@material-ui/lab/Pagination';

const ListCard = ({limitItemsPerPage = 5}) => {
    const [beaches, setBeaches] = useState([])
    const [originalBeaches, setOriginalBeaches] = useState([]);

    useEffect(() => {
        axios.get(API_URL + 'beachlist/').then(
            res => {
                console.log(res)
                setBeaches((res.data).slice(0,5))
                setOriginalBeaches(res.data);
            }
        ).catch()
    }, [])

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

export default ListCard;