import routesConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

// Public routes
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
    {
        path: '/@:nickname',
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
