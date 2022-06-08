import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c2a55fd = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _3141c04a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6a47684d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _33ef0b64 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _552fa2f8 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))

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
    component: _7c2a55fd,
    name: "blank-page___Es"
  }, {
    path: "/contact",
    component: _3141c04a,
    name: "contact___Es"
  }, {
    path: "/en",
    component: _6a47684d,
    name: "index___en"
  }, {
    path: "/login",
    component: _33ef0b64,
    name: "login___Es"
  }, {
    path: "/register",
    component: _552fa2f8,
    name: "register___Es"
  }, {
    path: "/en/blank-page",
    component: _7c2a55fd,
    name: "blank-page___en"
  }, {
    path: "/en/contact",
    component: _3141c04a,
    name: "contact___en"
  }, {
    path: "/en/login",
    component: _33ef0b64,
    name: "login___en"
  }, {
    path: "/en/register",
    component: _552fa2f8,
    name: "register___en"
  }, {
    path: "/",
    component: _6a47684d,
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
