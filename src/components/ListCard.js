import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import API_URL from '../config'
import './styles/ListCard.css'
import Pagination from '@material-ui/lab/Pagination';

export default class ListCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beaches: [],
            originalBeaches: [],
            limitItemsPerPage: 5
        }
    }

    componentDidMount() {
        axios.get(API_URL + 'beachlist/').then(
            res => {
                console.log(res)
                this.setState({ beaches: (res.data).slice(0,5) })
                this.setState({ originalBeaches: res.data })
            }
        ).catch()
    }

    handleChange = (e,page) => {
        let data = this.state.originalBeaches
        let limit_items = this.state.limitItemsPerPage

        let first_index = (page - 1) * limit_items
        let last_index = data.length > limit_items + ((page - 1) * limit_items)
         ? limit_items + ((page - 1) * limit_items) 
         : data.length
        
        this.setState({ beaches: data.slice(first_index, last_index) })
        
    }

    render() {
        return (
            <Fragment>
                <div className="list-card">
                    { this.state.beaches.map((beach, index) => {
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
                    <Pagination count={Math.ceil(this.state.originalBeaches.length / this.state.limitItemsPerPage)} onChange={this.handleChange} showFirstButton showLastButton />
                </div>
          </Fragment>
        )
    }
}