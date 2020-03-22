import firebase from 'firebase';
//import Router from '../../router';

export default {
    listByCategory(category) {
        const videos = [];
        firebase
            .firestore()
            .collection('videos')
            .where("category", '==', category)
            .onSnapshot((videoRef) => {
                videoRef.forEach((doc) => {
                    const video = doc.data();
                    video.id = doc.id;
                    videos.push(video);
                });
            });
        return videos;
    }
}