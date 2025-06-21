import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import TripInfoView from "@/views/TripInfoView.vue";
import DashboardView from "@/views/DashboardView.vue";
import DocumentView from "@/views/DocumentView.vue";

const router = createRouter({
    history: createWebHistory("http://localhost:5173/"),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/login",
            name: "loginPage",
            component: LoginView
        },
        {
            path: "/trip/:id",
            name: "tripInfos",
            component: TripInfoView
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashboardView
        },
        {
            path: "/document/:id",
            name: "document",
            component: DocumentView
        }
    ]
});

export default router;