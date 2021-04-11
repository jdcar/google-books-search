import axios from 'axios'

export default {
    getBooks: function() {
        return axios('/api/books')
    }
}