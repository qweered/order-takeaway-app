/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const MenuLazyImport = createFileRoute('/menu')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const MenuLazyRoute = MenuLazyImport.update({
  path: '/menu',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/menu.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/menu': {
      preLoaderRoute: typeof MenuLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([IndexLazyRoute, MenuLazyRoute])

/* prettier-ignore-end */
