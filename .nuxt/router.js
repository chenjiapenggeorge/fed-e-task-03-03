import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _530c5358 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _5e409289 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _6a0a06ff = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _2e69d882 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _7c511666 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _6aaa06d2 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _60d551e8 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _530c5358,
    children: [{
      path: "",
      component: _5e409289,
      name: "home"
    }, {
      path: "/login",
      component: _6a0a06ff,
      name: "login"
    }, {
      path: "/register",
      component: _6a0a06ff,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _2e69d882,
      name: "profile"
    }, {
      path: "/settings",
      component: _7c511666,
      name: "settings"
    }, {
      path: "/editor",
      component: _6aaa06d2,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _60d551e8,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
