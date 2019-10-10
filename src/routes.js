const r = name => require(`./pages/${name}.vue`).default

export default [
    {path: '/login', component: r('Login')},
]
