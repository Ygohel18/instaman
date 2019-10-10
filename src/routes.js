const r = name => require(`./pages/${name}.vue`).default

export default [
    {path: '/', component: r('Login')},
]
