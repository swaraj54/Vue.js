import DashboardComponent from "@/components/DashboardComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import SettingsComponent from "@/components/SettingsComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardComponent,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileComponent,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsComponent,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
