import { createRouter, createWebHistory } from 'vue-router';
import UsersList from '@/pages/UsersList.vue';
import teamMembers from '@/components/teams/TeamMembers.vue';
import NotFound from '@/pages/NotFound.vue';
import teamsList from '@/pages/TeamsList.vue';
import TeamsFooter from '@/pages/TeamsFooter.vue';
import UserFooter from '@/pages/UserFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: teamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: teamMembers,
          props: true,
        },
      ],
    }, //alias: '/' }, our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: { default: UsersList, footer: UserFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(from, to);
        next();
      },
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  if (to.meta.needsAuth) {
    console.log('This site needs authentication!');
    next(false);
  } else {
    next(true);
  }
  // console.log(to, from);
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
});

router.afterEach(function (to, from) {
  //sending analytics data
  console.log('Global afterEach');
  console.log(from, to);
});

export default router;
