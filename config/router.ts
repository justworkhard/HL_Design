const routes = [
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            {
                name: 'login',
                path: '/user/login',
                component: './user/login',
            },
        ],
    },
    {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
            {
                path: '/',
                component: '../layouts/BasicLayout',
                authority: ['admin', 'user'],
                routes: [
                    {
                        path: '/',
                        redirect: '/welcome',
                    },
                    {
                        path: '/welcome',
                        name: 'welcome',
                        icon: 'smile',
                        component: './Welcome',
                    },
                    {
                        name: '组件管理',
                        icon: 'table',
                        path: '/components',
                        routes: [
                            {
                                name: 'Cell',
                                icon: 'table',
                                path: '/components/Cell',
                                component: './components/Cell',
                            },
                            {
                                name: 'navbar',
                                icon: 'table',
                                path: '/components/Navbar',
                                component: './components/navbar',
                            },
                            {
                                name: 'scrollList',
                                icon: 'table',
                                path: '/components/scrollContent',
                                component: './components/scrollContent',
                            }
                        ]
                    },
                    {
                        component: './404',
                    },
                ],
            },
            {
                component: './404',
            },
        ],
    },
    {
        component: './404',
    },
]
export default routes