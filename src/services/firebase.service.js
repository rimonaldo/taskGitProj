import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3cDSRUOUaTd6adpIRez_lFPgXEw-48N4",
  authDomain: "tasker-57fe8.firebaseapp.com",
  projectId: "tasker-57fe8",
  storageBucket: "tasker-57fe8.appspot.com",
  messagingSenderId: "1037517625586",
  appId: "1:1037517625586:web:7e2bf21855f085395b586b",
  measurementId: "G-DB6RPW6P1B",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "task");

// get collection data when page is loaded.
window.addEventListener("load", onInit);

function onInit() {
  // real-time collection data

  onSnapshot(colRef, (snapshot) => {
    console.log("snapshot :>> 123", snapshot);
    const tasks = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    // _renderBooksTable(books)
  });

  // getting the collection - not-real-time way:
  // getDocs(colRef)
  //   .then((snapshot) => {
  //     const books = snapshot.docs.map((doc) => {
  //       return { id: doc.id, ...doc.data() }
  //     })
  //     _renderBooksTable(books)
  //   })
  //   .catch((err) => console.error(err))
}

// adding docs
const addBookForm = document.querySelector(".add");

// addBookForm.addEventListener('submit', (ev) => {
//   ev.preventDefault()
//   addDoc(colRef, {
//     title: addBookForm.title.value,
//     author: addBookForm.author.value,
//   })
//     .then(() => {
//       addBookForm.reset()
//     })
//     .catch((err) => {
//       console.log('err :>> ', err)
//     })
// })

// deleting docs
const deleteBookForm = document.querySelector(".delete");

// deleteBookForm.addEventListener('submit', (ev) => {
//   ev.preventDefault()
//   const docRef = doc(db, 'books', deleteBookForm.id.value)
//   deleteDoc(docRef)
//     .then(() => {
//       console.log('book was successfully deleted.')
//       deleteBookForm.reset()
//     })
//     .catch((err) => {
//       console.log('err :>> ', err)
//     })
// })

// update docs
// const updateBookForm = document.querySelector('.update')
// updateBookForm.addEventListener('submit', async (ev) => {
//   ev.preventDefault()
//   const docRef = doc(db, 'books', updateBookForm.id.value)
//   const docSnap = await getDoc(docRef)
//   console.log('docSnap.data()', docSnap.data());

//   updateDoc(docRef, {
//     ...docSnap.data(),
//     title: updateBookForm.title.value
//   })

//   // .then((doc) => {
//   //   console.log('doc',doc);
//   //   // console.log('book was successfully deleted.')
//   //   updateBookForm.reset()
//   // })
//   // .catch((err) => {
//   //   console.log('err :>> ', err)
//   // })
// })

// document.querySelector('.books-btn').addEventListener('click', toggleBooks)
// function toggleBooks() {
//   const elContainer = document.querySelector('.books-container')
//   const elButton = document.querySelector('.books-btn')
//   elContainer.classList.toggle('show')
//   elButton.innerText = elContainer.classList.contains('show') ? 'Hide Books' : 'Show Books'
// }

function _renderBooksTable(books) {
  const strHTML = books
    .map((book) => {
      return `<tr>
                <td data-label="id">${book.id}</td>
                <td data-label="title">${book.title}</td>
                <td data-label="author">${book.author}</td>
              </tr>`;
    })
    .join("");
  document.querySelector(".books-table").innerHTML = strHTML;
}

// Auth:
const provider = new GoogleAuthProvider();
const auth = getAuth();

const elLoginBtn = document.querySelector(".login-btn");

// elLoginBtn.addEventListener('click', onSignInWithGoogle)
// function onSignInWithGoogle() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log('user', user);
//       _renderLoggedUser(user)
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// }

const elUserImg = document.querySelector(".user-img");
function _renderLoggedUser(user) {
  console.log("user", user?.reloadUserInfo?.photoUrl);
  elUserImg.setAttribute("src", user.reloadUserInfo.photoUrl);
  elUserImg.hidden = false;
  elLoginBtn.hidden = true;
}

export default {
  db,
  colRef,
};
