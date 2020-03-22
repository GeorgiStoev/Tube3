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
    signUp(email, password) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                alert(`Account created for ${user.email}`);
                Router.go({ path: Router.path });
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
    }
}