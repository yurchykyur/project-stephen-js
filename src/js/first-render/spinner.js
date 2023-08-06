import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const spinnerStart = () => {
  Loading.pulse('Wait loading, please...', {
    svgColor: '#000000',
  });
};

export const spinnerStop = () => {
  Loading.remove();
};

export const spinnerStartForCategories = () => {
  Loading.pulse('Wait loading, please...', {
    svgColor: '#000000',
  });
};

export const spinerStopForCategories = () => {
  Loading.remove();
};