import axios from "axios";

export default {
    state: {
        photos: [],
        dialogVisible: false,
        currentPhoto: {}
    },
    mutations: {
        setPhotos(state, payLoad) {
            state.photos = payLoad
        },
        showDialog(state) {
            state.dialogVisible = true
        },
        hideDialog(state) {
            state.dialogVisible = false
        },
        setCurrentPhoto(state, payLoad) {
            state.currentPhoto = payLoad
        },
        addPhoto(state, payLoad) {
            state.photos.push(payLoad)
        }
    },
    getters: {
        getAllPhotos(state) {
            return state.photos
        },
        getDialogVisible(state) {
            return state.dialogVisible
        },
        getCurrentPhoto(state) {
            return state.currentPhoto
        }
    },
    actions: {
        fetchPhotos(context) {
            axios.get("https://jsonplaceholder.typicode.com/photos?_limit=7")
                .then(response => context.commit('setPhotos', response.data))
        }
    }
}