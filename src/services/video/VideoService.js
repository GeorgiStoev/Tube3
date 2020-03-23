import firebase from 'firebase';
import Router from '../../router';

export default {
    listByCategory(category) {
        const videos = [];
        firebase
            .firestore()
            .collection("videos")
            .where("category", '==', category)
            .onSnapshot((videoRef) => {
                videoRef.forEach((doc) => {
                    const video = doc.data();
                    video.id = doc.id;
                    videos.push(video);
                });
            });
        return videos;
    },
    add(name, category, videoUrl) {
        firebase
            .firestore()
            .collection("videos")
            .add({
                name,
                category,
                videoUrl,
                uploaderId: firebase.auth().currentUser.uid
            })
            .then(() => {
                Router.push("/");
            })
            .catch((err) => {
                alert(err.message);
            });
            
    },
    getVideoById(id) {
        return firebase
            .firestore()
            .collection('videos')
            .doc(id)
            .get();
    }
}