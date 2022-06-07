import axios from 'axios';

export default {
    searchImg:  '',
    page: 1,
    isLoading: false,
    async fetchImages() {
        this.isLoading = true;
        const url = 'https://pixabay.com/api/';
        const key = '27783872-f200130df473948fa8b794bc2';
        const filter = `?key=${key}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

        return await axios
            .get(`${url}${filter}`)
            .then(response => {
                this.page += 1;
            return response.data;
            }).finally(() => {
                this.isLoading = false;
        });
    },
    resetPage() {
        this.page = 1;
    },
    get query() {
        return this.searchImg;
    },
    set query(value) {
        this.searchImg = value;
  },
};