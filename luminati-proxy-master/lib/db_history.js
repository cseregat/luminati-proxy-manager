// LICENSE_CODE ZON ISC
'use strict'; /*jslint node:true, esnext:true*/

module.exports = [
    {
        schema: {
            schema_info: {
                hash: 'TEXT',
                version: 'TEXT',
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            ip: {
                ip: {type: 'UNSIGNED INTEGER', primary: true},
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            request: {
                port: {type: 'INTEGER', index: true},
                url: {type: 'TEXT', index: true},
                method: {type: 'TEXT', index: true},
                request_headers: 'TEXT',
                request_body: 'TEXT',
                response_headers: 'TEXT',
                status_code: {type: 'INTEGER', index: true},
                timestamp: {type: 'INTEGER', index: true},
                elapsed: {type: 'INTEGER', index: true},
                response_time: {type: 'INTEGER', index: true},
                node_latency: {type: 'INTEGER', index: true},
                proxy_peer: {type: 'TEXT', index: true},
                country: {type: 'TEXT', index: true},
                timeline: 'TEXT',
                super_proxy: 'TEXT',
                username: 'TEXT',
                content_size: {type: 'INTEGER', index: true},
            },
        },
        rename: {
            request: {
                proxy: 'super_proxy',
            },
        },
    },
    {
        schema: {
            schema_info: {
                hash: 'TEXT',
                version: 'TEXT',
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            ip: {
                ip: {type: 'UNSIGNED INTEGER', primary: true},
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            request: {
                port: {type: 'INTEGER', index: true},
                url: {type: 'TEXT', index: true},
                method: {type: 'TEXT', index: true},
                request_headers: 'TEXT',
                request_body: 'TEXT',
                response_headers: 'TEXT',
                status_code: {type: 'INTEGER', index: true},
                timestamp: {type: 'INTEGER', index: true},
                elapsed: {type: 'INTEGER', index: true},
                response_time: {type: 'INTEGER', index: true},
                node_latency: {type: 'INTEGER', index: true},
                proxy_peer: {type: 'TEXT', index: true},
                country: {type: 'TEXT', index: true},
                timeline: 'TEXT',
                proxy: 'TEXT',
                username: 'TEXT',
                content_size: {type: 'INTEGER', index: true},
            },
        },
        add: {
            request: ['proxy_peer'],
        },
    },
    {
        schema: {
            schema_info: {
                hash: 'TEXT',
                version: 'TEXT',
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            ip: {
                ip: {type: 'UNSIGNED INTEGER', primary: true},
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            request: {
                port: {type: 'INTEGER', index: true},
                url: {type: 'TEXT', index: true},
                method: {type: 'TEXT', index: true},
                request_headers: 'TEXT',
                request_body: 'TEXT',
                response_headers: 'TEXT',
                status_code: {type: 'INTEGER', index: true},
                timestamp: {type: 'INTEGER', index: true},
                elapsed: {type: 'INTEGER', index: true},
                response_time: {type: 'INTEGER', index: true},
                node_latency: {type: 'INTEGER', index: true},
                country: {type: 'TEXT', index: true},
                timeline: 'TEXT',
                proxy: 'TEXT',
                username: 'TEXT',
                content_size: {type: 'INTEGER', index: true},
            },
        },
        add: {
            request: ['request_body'],
        },
    },
    {
        schema: {
            schema_info: {
                hash: 'TEXT',
                version: 'TEXT',
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            ip: {
                ip: {type: 'UNSIGNED INTEGER', primary: true},
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            request: {
                port: {type: 'INTEGER', index: true},
                url: {type: 'TEXT', index: true},
                method: {type: 'TEXT', index: true},
                request_headers: 'TEXT',
                response_headers: 'TEXT',
                status_code: {type: 'INTEGER', index: true},
                timestamp: {type: 'INTEGER', index: true},
                elapsed: {type: 'INTEGER', index: true},
                response_time: {type: 'INTEGER', index: true},
                node_latency: {type: 'INTEGER', index: true},
                country: {type: 'TEXT', index: true},
                timeline: 'TEXT',
                proxy: 'TEXT',
                username: 'TEXT',
                content_size: {type: 'INTEGER', index: true},
            },
        },
        add: {
            request: ['response_time', 'node_latency', 'country'],
        },
        add_index: {
            request: ['port', 'url', 'method'],
        },
    },
    {
        schema: {
            schema_info: {
                hash: 'TEXT',
                version: 'TEXT',
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            ip: {
                ip: {type: 'UNSIGNED INTEGER', primary: true},
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            request: {
                port: {type: 'INTEGER'},
                url: 'TEXT',
                method: 'TEXT',
                request_headers: 'TEXT',
                response_headers: 'TEXT',
                status_code: {type: 'INTEGER', index: true},
                timestamp: {type: 'INTEGER', index: true},
                elapsed: {type: 'INTEGER', index: true},
                timeline: 'TEXT',
                proxy: 'TEXT',
                username: 'TEXT',
                content_size: {type: 'INTEGER', index: true},
            },
        },
        add: {
            request: ['port'],
        },
    },
    {
        schema: {
            schema_info: {
                hash: 'TEXT',
                version: 'TEXT',
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            ip: {
                ip: {type: 'UNSIGNED INTEGER', primary: true},
                timestamp: {type: 'INTEGER', default: 'CURRENT_TIMESTAMP'},
            },
            request: {
                url: 'TEXT',
                method: 'TEXT',
                request_headers: 'TEXT',
                response_headers: 'TEXT',
                status_code: {type: 'INTEGER', index: true},
                timestamp: {type: 'INTEGER', index: true},
                elapsed: {type: 'INTEGER', index: true},
                timeline: 'TEXT',
                proxy: 'TEXT',
                username: 'TEXT',
                content_size: {type: 'INTEGER', index: true},
            },
        },
    },
];
