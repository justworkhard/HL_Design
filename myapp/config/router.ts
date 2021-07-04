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
        name: '记忆大师',
        path: '/memoryH5',
        component: './memoryH5',
        layout: false,
    },
    {
        name: '全部题库',
        path: '/wordList',
        component: './wordList',
        layout: false,
    },
    {
        name: '可忆首页',
        path: '/memory',
        component: './memory/index',
        layout: false,
    },
    {
        name: '笔记列表',
        path: '/memory',
        component: './memory/index',
        layout: false,
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
                        icon: 'AlignCenterOutlined',
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
                            },
                            {
                                name: 'suspendButton',
                                icon: 'table',
                                path: '/components/suspendButton',
                                component: './components/suspendButton',
                            },
                        ]
                    },
                    {
                        name: '监控平台',
                        icon: 'RadarChartOutlined',
                        path: '/endFontWatch',
                        routes: [
                            {
                                name: '列表',
                                icon: 'table',
                                path: '/endFontWatch/index',
                                component: './endFontWatch/index',
                            }
                        ]
                    },
                    {
                        name: '页面定制',
                        icon: 'HighlightOutlined',
                        path: '/pageSelf',
                        routes: [
                            {
                                name: '页面定制',
                                icon: 'table',
                                path: '/pageSelf/index',
                                component: './pageSelf/index',
                            }
                        ]
                    },
                    {
                        name: '图床管理',
                        icon: 'PictureOutlined',
                        path: '/imgManage',
                        routes: [
                            {
                                name: '图床管理',
                                path: '/imgManage/index',
                                component: './imgManage/index',
                            }
                        ]
                    },
                    {
                        name: '工具类',
                        icon: 'ToolOutlined',
                        path: '/publicUtil',
                        routes: [
                            {
                                name: '首页',
                                path: '/publicUtil/index',
                                component: './publicUtil/index',
                            },
                            {
                                name: '精度计算',
                                path: '/publicUtil/acount',
                                component: './publicUtil/acount',
                            },
                            {
                                name: '类型检查',
                                path: '/publicUtil/check',
                                component: './publicUtil/check',
                            },
                        ]
                    },
                    {
                        name: '助手',
                        icon: 'ToolOutlined',
                        path: '/helper',
                        routes: [
                            {
                                name: '专业英语',
                                path: '/helper/english',
                                component: './helper/english',
                            },

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