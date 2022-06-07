import './styles/styles.scss';
import service from './service';
import imageMarkup from './templates/image-markup.hbs?raw';
import handlebars from 'handlebars';
import { fetchNoResults,totalHitsResult } from './notifix'; 
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


const refs = {
    searchQuery: document.querySelector('.searchQuery'),
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    spinner: document.querySelector('.spinner'),
    observer: document.querySelector('.observer')
};
refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    service.query = form.elements.searchQuery.value;
    refs.gallery.innerHTML = ''; 
    service.resetPage();

    io.observe(refs.observer);
});

function createMarkup(data) {
        const markup = handlebars.compile(imageMarkup)(data.hits);
        refs.gallery.insertAdjacentHTML('beforeend', markup);
        // refs.loadMoreBtn.addEventListener('click', fetchQuery);
};
  
function fetchQuery() {
    // refs.loadMoreBtn.classList.add('is-hidden');
    refs.spinner.classList.remove('d-none');
    service.fetchImages().then(data => {
        if (data.totalHits > 0 ) {
            createMarkup(data);
            totalHitsResult(data.total);    
        }
        else {
            fetchNoResults();
        }
    })
        .finally(() => {
            refs.spinner.classList.add('d-none');
        });
};

const onEntry = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !service.isLoading) {
            fetchQuery();
        }
    });
};
const options = {
    rootMargin: '400px',
};
const io = new IntersectionObserver(onEntry, options);

const lightbox = new PhotoSwipeLightbox({
  gallery: '.gallery',
  children: '.photo-card',
  secondaryZoomLevel: '1.0',
  pswpModule: () => import('photoswipe'),
});
lightbox.init();

