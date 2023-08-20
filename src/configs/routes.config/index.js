import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute,
    {
        key: 'porto',
        path: '/home',
        component: React.lazy(() => import('views/Porto')),
        meta: {
            layout: 'simple',
            header: 'Helloworld',
        }
    }
]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: ['admin'],
    },
    {
        key: 'test',
        path: '/test',
        component: React.lazy(() => import('views/Home')),
        authority: ['admin'],
    },
    {
        key: 'projects',
        path: '/projects',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
   

   
]