import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDVpNC-fxCFjblA1M1euLVxvEcZMCOBm9Q",
        authDomain: "mini-store-web.firebaseapp.com",
        projectId: "mini-store-web",
        storageBucket: "mini-store-web.appspot.com",
        messagingSenderId: "378252508270",
        appId: "1:378252508270:web:47114ff8de7aabf6767a7f",
        measurementId: "G-LY6RKTJJDJ"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const submitBtn = document.getElementById("submit-btn");
    const txt = document.getElementById("txtBtn");
    const result = document.getElementById("result");

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
            txt.textContent = "Aguarde...";
            result.style.display = "block";
            result.textContent = "Login efectuado com sucesso.";
            result.style.background = "rgba(2, 129, 2, 0.212)";
            txt.textContent = "Autenticando...";
            setTimeout(() => {
                window.location.href = "/";
                txt.textContent = "Log In";
                notVisible();
            }, 4000);
    })
    .catch((error) => {
        result.style.display = "block";
        result.style.background = "rgba(255, 0, 0, 0.199)";
      if (error.code === "auth/invalid-email") {
        result.innerHTML = "Email inválido. Por favor, forneça um email válido.";
        txt.textContent = "Log In";
      notVisible();
      } else if (error.code === "auth/wrong-password") {
        result.innerHTML = "Senha incorreta. Por favor, verifique sua senha.";
        txt.textContent = "Log In";
      notVisible();
      } else if (error.code === "auth/user-not-found") {
        result.innerHTML = "Usuário não cadastrado. Por favor, registre-se primeiro.";
        txt.textContent = "Log In";
      notVisible();
      } else {
        result.innerHTML = "Verifique as credecnias e tente novamente.";
        txt.textContent = "Log In";
      notVisible();
      }
    });
    });

    function notVisible() {
        setTimeout(() => {
          result.style.display = "none";
        }, 4000);
      }