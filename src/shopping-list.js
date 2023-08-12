import './js/index/loader';
import './js/index/gotop';
import './js/index/modal';
import './js/burger-menu/burger-menu';
import './js/header/anti-flicker.js';
import './js/header/header.js';
import './js/banner/support-ukraine';

import createPagination from './js/pagination/pagination';
import LocalStorageManager from './js/service-local-storage/local-storage-manager';

const SHOPPING_LIST_LS = 'shopping list';

const data = LocalStorageManager.getData(SHOPPING_LIST_LS);

createPagination(data, 1, true);
