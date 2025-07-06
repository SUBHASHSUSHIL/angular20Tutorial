import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlowStatement } from './components/control-flow-statement/control-flow-statement';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';
import { PipeComp } from './components/pipe-comp/pipe-comp';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { PipeEx } from './components/pipe-ex/pipe-ex';
import { ResourceApi } from './components/resource-api/resource-api';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'admin',
                component: Admin
            },
            {
                path: "control-flow-statement",
                component: ControlFlowStatement
            },
            {
                path: 'data-binding',
                component: DataBinding
            },
            {
                path: 'login',
                component: Login
            },
            {
                path: 'signal-ex',
                component: SignalEx
            },
            {
                path: 'att-directive',
                component: AttDirective
            },
            {
                path: 'pipe-comp',
                component: PipeComp
            },
            {
                path: 'get-api',
                component: GetApi
            },
            {
                path: 'users',
                component: User
            },
            {
                path: 'reactive-user',
                component: ReactiveUser
            },
            {
                path: 'pipe-ex',
                component: PipeEx
            },
            {
                path: 'resource-api',
                component: ResourceApi
            }
        ]
    },
];
