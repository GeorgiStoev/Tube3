import firebase from 'firebase';
import Router from '../../router';

export default {
    signIn(email, password) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Router.go({ path: Router.path });
            },
            err => {
                alert(err.message);
            });
    },
    signUp(firstName, lastName, imageUrl, email, password) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                firebase
                    .firestore()
                    .collection("users")
                    .add({
                        firstName,
                        lastName,
                        imageUrl,
                        email,
                        favourites: [],
                        uid: firebase.auth().currentUser.uid
                    })
                    .then(() => {
                        alert(`Account created for ${user.email}`);
                        Router.go({ path: Router.path });
                    })
                    .catch((err) => {
                        alert(err.message);
                    });
            },
            err => {
                alert(err.message);
            });
    },
    signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            Router.go({ path: Router.path });
          });
    },
    getUserById(id) {
        return firebase
            .firestore()
            .collection('users')
            .where("uid", "==", id);
            // .onSnapshot((userRef) => {
            //     userRef.forEach((doc) => {
            //         user = doc.data();
            //         console.log(user)
            //     });
            // });
    },
    getCurrentUser() {
        const id = firebase.auth().currentUser.uid;
        return firebase
            .firestore()
            .collection('users')
            .where("uid", "==", id);
            // .onSnapshot((userRef) => {
            //     userRef.forEach((doc) => {
            //         user = doc.data();
            //         console.log(user)
            //     });
            // });
    },
    updateUser(id, user) {
        console.log(id)
        firebase
            .firestore()
            .collection('users')
            .doc(id)
            .set(user)
            .then(() => {
                Router.push('/video-favourites');
            });
    }
}