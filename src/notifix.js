import { Notify } from 'notiflix/build/notiflix-notify-aio';

const fetchNoResults = () => {
  Notify.failure("Sorry, there are no images matching your search query. Please try again.", {
    timeout: 2000,
    showOnlyTheLastOne: true,
    cssAnimation: true,
  });
};
const totalHitsResult = total => {
  Notify.info(`Hooray! We found ${total} images.`, {
    timeout: 2000,
    showOnlyTheLastOne: true,
    cssAnimation: true,
    pauseOnHover: true,
  });
};
export {fetchNoResults, totalHitsResult };