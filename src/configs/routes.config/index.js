import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute,
    {
        key: 'porto',
        path: '/porto',
        component: React.lazy(() => import('views/Porto')),
        meta: {
            layout: 'simple',
            header: 'Helloworld',
        }
    },
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: ['admin'],
    },
]

export const protectedRoutes = [
    
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



