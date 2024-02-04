import ApplicationPage from './pages/ApplicationPage';
import CreatepostPage from './pages/CreatepostPage';
import FindeduPage from './pages/FindeduPage';
import FindjobdetailPage from './pages/FindjobdetailPage';
import FindjobPage from './pages/FindjobPage';
import HomePage from './pages/HomePage';
import JobeduPage from './pages/JobeduPage';
import LoginPage from './pages/LoginPage';
import PostsdetailPage from './pages/PostsdetailPage';
import PostsPage from './pages/PostsPage';
import RecseekPage from './pages/RecseekPage';
import RegisterationPage from './pages/RegisterationPage';

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/application',
        component: ApplicationPage,
    },
    {
        path: '/createpost',
        component: CreatepostPage,
    },
    {
        path: '/findedu',
        component: FindeduPage,
    },
    {
        path: '/findjob/detail',
        component: FindjobdetailPage,
    },
    {
        path: '/findjob',
        component: FindjobPage,
    },
    {
        path: '/jobedu',
        component: JobeduPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/posts/detail',
        component: PostsdetailPage,
    },
    {
        path: '/posts',
        component: PostsPage,
    },
    {
        path: '/recseek',
        component: RecseekPage,
    },
    {
        path: '/registeration',
        component: RegisterationPage,
    },
];

export default routes;