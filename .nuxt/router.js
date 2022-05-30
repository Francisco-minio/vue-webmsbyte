import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b6c1432 = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _8a2fd474 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _d64a4610 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5e82800f = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1a752b26 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blank-page",
    component: _0b6c1432,
    name: "blank-page___Es"
  }, {
    path: "/contact",
    component: _8a2fd474,
    name: "contact___Es"
  }, {
    path: "/en",
    component: _d64a4610,
    name: "index___en"
  }, {
    path: "/login",
    component: _5e82800f,
    name: "login___Es"
  }, {
    path: "/register",
    component: _1a752b26,
    name: "register___Es"
  }, {
    path: "/en/blank-page",
    component: _0b6c1432,
    name: "blank-page___en"
  }, {
    path: "/en/contact",
    component: _8a2fd474,
    name: "contact___en"
  }, {
    path: "/en/login",
    component: _5e82800f,
    name: "login___en"
  }, {
    path: "/en/register",
    component: _1a752b26,
    name: "register___en"
  }, {
    path: "/",
    component: _d64a4610,
    name: "index___Es"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
