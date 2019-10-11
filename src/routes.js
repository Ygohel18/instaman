const r = name => require(`./pages/${name}.vue`).default

export default [
    {path: '/', component: r('Index')},
    {path: '/login', component: r('Login')},
]
