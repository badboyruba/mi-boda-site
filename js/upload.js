// SDK modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxyVnfeo6Pxi58Q-QGVxZPTa3_2WbEXXE",
  authDomain: "boda-peru.firebaseapp.com",
  projectId: "boda-peru",
  storageBucket: "boda-peru.firebasestorage.app",
  messagingSenderId: "30450032616",
  appId: "1:30450032616:web:faeac62eef1a1ee5d68e5d"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Elemente DOM
const form = document.getElementById("uploadForm");
const fileInput = document.getElementById("imageFile");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = fileInput.files[0];
  if (!file) return;

  const storageRef = ref(storage, 'event-photos/' + Date.now() + "_" + file.name);

  try {
    await uploadBytes(storageRef, file);
    statusText.innerText = "¡Foto subida con éxito!";
    statusText.classList.add("success");
    fileInput.value = "";
  } catch (err) {
    statusText.innerText = "Error: " + err;
  }
});
