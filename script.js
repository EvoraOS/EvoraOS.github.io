<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWahves5Bhz8q_Xe3EIRcw7DxkgQHYQS4",
    authDomain: "evoraos.firebaseapp.com",
    projectId: "evoraos",
    storageBucket: "evoraos.firebasestorage.app",
    messagingSenderId: "536499661903",
    appId: "1:536499661903:web:228d963c70a6a74df88e3a",
    measurementId: "G-QPJ8KHT5GM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
