import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/views/Home"), // 동적 import
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/Auth",
    name: "Auth",
    component: () => import("@/views/Auth"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("@/views/Profile"),
  },
  {
    path: "/EditProfile",
    name: "EditProfile",
    component: () => import("@/views/EditProfile"),
  },
  {
    path: "/AppRouter",
    name: "AppRouter",
    component: () => import("@/views/AppRouter"),
    props: true,
  },
];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
