import axios from 'axios'

export const fetchReviews = () => {
    return axios
    .get('https://sg-nc-games.onrender.com/api/reviews')
    .then((res) => {
        
        return res.data.reviews
    })
}

export const fetchCategories = () => {
    return axios
    .get('https://sg-nc-games.onrender.com/api/categories')
    .then((res) => {
        return res.data.categories
    })
}