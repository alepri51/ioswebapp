module.exports = {
    apps : [
        {
            name: "web.app",
            script: "node",
            args: ['./index.js'],
            watch: false,
            instances: 1,
            namespace: 'WEB.APP',
            env: {
                
            }
        }
    ]
};