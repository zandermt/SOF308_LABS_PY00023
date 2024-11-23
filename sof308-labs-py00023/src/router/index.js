import { createRouter, createWebHistory } from "vue-router";
import Sof308Lab1 from "../components/Sof308Lab1.vue";
import Lab2Bai1 from "@/components/Lab2/Lab2Bai1.vue";
import Lab2Bai2 from "../components/Lab2/Lab2Bai2.vue";
import Lab2Bai3 from "../components/Lab2/Lab2Bai3.vue";
import Lab2Bai4 from "../components/Lab2/Lab2Bai4.vue";
import Sof308Lab3 from "../components/Lab3/Sof308Lab3.vue";
import Lab3Post from "@/components/Lab3/Lab3Post.vue";
import Lab3PostDetail from "@/components/Lab3/Lab3PostDetail.vue";
import Lab5Bai1 from "@/components/Lab5/Lab5Bai1.vue";
import Lab5Bai2 from "@/components/Lab5/Lab5Bai2.vue";
import Lab5Bai3 from "@/components/Lab5/Lab5Bai3.vue";
import Lab5Bai4 from "@/components/Lab5/Lab5Bai4.vue";
import Lab6Bai1 from "@/components/Lab6/Lab6Bai1.vue";
import Lab6Bai2 from "@/components/Lab6/Lab6Bai2.vue";
import Lab6Bai3 from "@/components/Lab6/Lab6Bai3.vue";
import Lab6Bai4 from "@/components/Lab6/Lab6Bai4.vue";

const routes = [
  { path: "/Sof308Lab1", component: Sof308Lab1 },
  { path: "/Lab2/Lab2Bai1", component: Lab2Bai1 },
  { path: "/Lab2/Lab2Bai2", component: Lab2Bai2 },
  { path: "/Lab2/Lab2Bai3", component: Lab2Bai3 },
  { path: "/Lab2/Lab2Bai4", component: Lab2Bai4 },
  { path: "/Lab3/Sof308Lab3", component: Sof308Lab3 },
  { path: "/Lab3/Lab3Post", component: Lab3Post },
  { path: "/Lab3/Lab3PostDetail", component: Lab3PostDetail },
  { path: "/Lab5/Lab5Bai1", component: Lab5Bai1 },
  { path: "/Lab5/Lab5Bai2", component: Lab5Bai2 },
  { path: "/Lab5/Lab5Bai3", component: Lab5Bai3 },
  { path: "/Lab5/Lab5Bai4", component: Lab5Bai4 },
  { path: "/Lab6/Lab6Bai1", component: Lab6Bai1 },
  { path: "/Lab6/Lab6Bai2", component: Lab6Bai2 },
  { path: "/Lab6/Lab6Bai3", component: Lab6Bai3 },
  { path: "/Lab6/Lab6Bai4", component: Lab6Bai4 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
