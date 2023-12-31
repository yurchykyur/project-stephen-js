import './js/components/gotop';
import './js/components/modal';
import './js/header/burger-menu';
import './js/header/anti-flicker.js';
import './js/header/header.js';
import './js/banner/support-ukraine';

import createPagination from './js/shopping-list/pagination';
import LocalStorageManager from './js/service-local-storage/local-storage-manager';

const SHOPPING_LIST_LS = 'shopping list';

const data = LocalStorageManager.getData(SHOPPING_LIST_LS);

createPagination(data, 1, true);
