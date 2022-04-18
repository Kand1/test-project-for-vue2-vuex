import Vue from "vue";
import VueRouter from "vue-router"
import Main from "@/pages/MainPage";
import PhotosPage from "@/pages/PhotosPage";
import {createWebHashHistory } from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/main',
        component: Main
    },
    {
        path: '/',
        component: PhotosPage
    }
]

export default new VueRouter({
    mode: "hash",
    routes
})