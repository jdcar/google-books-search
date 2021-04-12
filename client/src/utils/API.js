import axios from 'axios'

export default {
    getBooks: function() {
        return axios('/api/books')
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
      },
}