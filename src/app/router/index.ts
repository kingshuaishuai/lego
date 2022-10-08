import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/app/views/HomeView.vue'),
    },
    {
      path: '/editor/:id',
      name: 'EditorPage',
      component: () => import('@/app/views/EditorView.vue'),
    },
    {
      path: '/template/:id',
      name: 'TemplateDetailPage',
      component: () => import('@/app/views/TemlateDetail.vue'),
    },
  ],
});

export default router;
