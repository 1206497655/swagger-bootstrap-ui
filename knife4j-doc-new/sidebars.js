const donateHtml = `
<div class="sidebar_donate">
    <div class="sidebar_sponsor">虚位以待</div>
    <div class="sidebar_sponsor_submit">
        <a href="/docs/community/donate">成为赞助商</a>
    </div>
<div>
`

module.exports = {
    docs: [ {
        type: 'html',
        value: donateHtml,
        defaultStyle: true
    },
    'quick-start/quick-start',
    'v4/plan',
     {
        type: 'category',
        label: '序章',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'introduction/introduction-index',
        },
        items: [
            'introduction/introduction-index',
            'introduction/introduction-background',
            'introduction/support',
            'introduction/ui',
            'introduction/gvp',
            'introduction/milestone'
        ],
    }, {
        type: 'category',
        label: '社区',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'community/community',
        },
        items: [
            'community/community-get-helps',
            'community/joinus',
            'community/sourcecode',
            'community/apache',
            'community/changelog',
            
            'community/donate',
            
            'community/simple-demo',
        ],
    }, {
        type: 'category',
        label: '增强特性',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'features/features',
        },
        items: [
            'features/enhance',
            'features/i18n',
            'features/author',
            'features/selfdocument',
            'features/accessControl',
            'features/apiSort',
            'features/tagSort',
            'features/requestCache',
            'features/dynamicRequestParameter',
            'features/exportDocument',
            'features/filterRequestParameter',
            'features/includeRequestParameter',
            'features/search',
            'features/clearCache',
            'features/dynamicRequestDescription',
            'features/dynamicResponseDescription',
            'features/host',
            'features/afterScript',
            'features/oauth2',
            'features/postman',
            'features/globalParameter',
            'features/swaggermodels',
            'features/customHome',
            'features/customFooter',
            'features/jsr303',
            'features/forbidDebug',
            'features/forbidSearch',
            'features/forbidOpenApi',
            'features/gitVersion'
        ],
    }, {
        type: 'category',
        label: '中间件生态',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'middleware/middleware',
        },
        items: [
            'middleware/knife4jCloud',
            'middleware/knife4jAggregation',
            'middleware/knife4jAggregationDesktop',
        ],
    },
    {
        type: 'category',
        label: '版本升级',
        link: {
            type: 'generated-index',
            title: '升级',
            slug: '/upgrading',
            keywords: ['upgrading'],
        },
        items: [
            {
                type: 'autogenerated',
                dirName: 'upgrading',
            },
        ],
    }],
    oas: [{
        type: 'html',
        value: donateHtml,
        defaultStyle: true
        },
        'oas/oas-intro',
        {
            type: 'category',
            label: 'OpenAPI规范',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'oas/openapi-spe',
            },
            items: [
                'oas/openapi-spe',
                'oas/openapi2',
                'oas/openapi3'
            ],
        },
        {
            type: 'category',
            label: 'Java注解',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'oas/annotation-introduction',
            },
            items: [
                'oas/openapi2-annotation',
                'oas/openapi3-annotation'
            ],
        } 
    ],
    "middleware-sources":[
        {
            type: 'html',
            value: donateHtml,
            defaultStyle: true
        },
        "middleware-sources/middle-index",
        {
        type: 'category',
        label: 'Aggregation微服务聚合中间件',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'middleware-sources/aggregation-introduction',
        },
        items: [
            'middleware-sources/aggregation-introduction',
            'middleware-sources/aggregation-disk',
            'middleware-sources/aggregation-cloud',
            'middleware-sources/aggregation-eureka',
            'middleware-sources/aggregation-nacos'
        ],
        },
        {
        type: 'category',
        label: 'Desktop独立渲染组件',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'middleware-sources/desktop-introduction',
        },
        items: [
            'middleware-sources/desktop-introduction',
            'middleware-sources/desktop-install',
            'middleware-sources/desktop-use',
            'middleware-sources/desktop-test'
        ],
        }
    ],
    "changelog":[ {
        type: 'html',
        value: donateHtml,
        defaultStyle: true
    },
    {
        type: 'category',
        label: '4.x版本',
        link: {
            type: 'doc',
            id:"changelog/changelog-index"
        },
        items: [
            {
                type: 'autogenerated',  
                dirName: 'changelog/4.x',
            },
        ]
    },
    {
        type: 'category',
        label: '2.x版本',
        link: {
            type: 'doc',
            id:"changelog/changelog-index"
        },
        items: [
            {
                type: 'autogenerated',  
                dirName: 'changelog/2.x',
            },
        ]
    },
    {
        type: 'category',
        label: '1.x版本1',
        link: {
            type: 'doc',
            id:"changelog/changelog-index"
        },
        items: [
            {
                type: 'autogenerated',  
                dirName: 'changelog/1.x',
            },
        ]
    }
    ],
    "faq":[ {
        type: 'html',
        value: donateHtml,
        defaultStyle: true
    },
    {
        type: 'category',
        label: 'FAQ',
        link: {
            type: 'doc',
            id:"faq/faq-index"
        },
        items: [
            {
                type: 'autogenerated',  
                dirName: 'faq',
            },
        ]
    } 
    ],
    "action":[ 
        {
        type: 'html',
        value: donateHtml,
        defaultStyle: true
    },
    "action/action-simple"
    ,{
        type: 'category',
        label: 'Spring 单体架构',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'action/action-index',
        },
        items: [
            'action/mavenbom',
            'action/springmvc',
            'action/springboot'
        ],
        }
        ,{
            type: 'category',
            label: 'Spring微服务架构',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'action/action-index',
            },
            items: [
                'action/springcloud-gateway',
                'action/springcloud-zuul' 
            ],
            }

            ,{
                type: 'category',
                label: 'OAuth2.0',
                collapsed: true,
                link: {
                    type: 'doc',
                    id: 'action/action-index',
                },
                items: [
                    'action/oauth2-implicit',
                    'action/oauth2-authorization_code' ,
                    'action/oauth2-client_credentials',
                    'action/oauth2-password'
                ],
                }
                ,{
                    type: 'category',
                    label: '微服务聚合实战',
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: 'action/action-index',
                    },
                    items: [
                        'action/aggregation-disk',
                        'action/aggregation-cloud' ,
                        'action/aggregation-eureka',
                        'action/aggregation-nacos',
                        'action/aggregation-docker'
                    ],
                    }
                    ,{
                        type: 'category',
                        label: 'ASP.NET Core',
                        collapsed: true,
                        link: {
                            type: 'doc',
                            id: 'action/action-index',
                        },
                        items: [
                            'action/dotnetcore-knife4j-how',
                            'action/dotnetcore-knife4j-guid'  
                        ],
                        }
    ]
}