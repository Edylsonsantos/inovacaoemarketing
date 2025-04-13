import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

    const firebaseConfig = {
        apiKey: "",
        authDomain: "nome-do-projecto.firebaseapp.com",
        projectId: "",
        storageBucket: "nome-do-projecto.appspot.com",
        messagingSenderId: "codigo-do-projecto",
        appId: "",
        measurementId: ""
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const submitBtn = document.getElementById("submit-btn");
const txt = document.getElementById("txtBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");
  var phone = document.getElementById('phone').value;
  var moeda = document.getElementById('moeda').value;

  const verificarNumero = /^\d{9}$/;
  const codeMoz = "+258";
  if (!name || !phone || !email || !password) {
    result.style.background = "rgba(255, 0, 0, 0.199)";
    result.style.display = "block";
    result.innerHTML = "Por favor, preencha todos os campos.";
} else {
  if (!verificarNumero.test(phone)) {
      result.style.background = "rgba(255, 0, 0, 0.199)";
      result.style.display = "block";
      result.innerHTML = "Por favor, insira um número de telefone válido Moçambicano.";
      submitBtn.textContent = "Criar";
      notVisible();
    }else{
  submitBtn.textContent = "Aguarde...";
  const originalTelefone = codeMoz + phone;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

    const userData = {
      name: name,
      uid: user.uid,
      email: user.email,
      telefone: originalTelefone,
      moeda: moeda
    };

    result.style.background = "rgba(2, 129, 2, 0.212)";
    const userRef = ref(db, 'users/' + user.uid);
    set(userRef, userData)
      .then(() => {
        result.style.display = "block";
        result.innerHTML = "Registro realizado com sucesso!";
        submitBtn.textContent = "Autenticando....";
        notVisible();
        setTimeout(() => {
          window.location.href = "/";
          submitBtn.textContent = "Criar";
        }, 4000);
        // Sucesso
      })
      .catch((error) => {
        //result.innerHTML = "Erro ao salvar os dados do usuário.";
      });
  })
  .catch((error) => {
    if (error.code === "auth/invalid-email") {
      result.style.background = "rgba(255, 0, 0, 0.199)";
      result.style.display = "block";
      result.innerHTML = "Email inválido. Por favor, forneça um email válido.";
      submitBtn.textContent = "Criar";
      notVisible();
    } else if (error.code === "auth/weak-password") {
      result.style.background = "rgba(255, 0, 0, 0.199)";
      result.style.display = "block";
      result.innerHTML = "Senha fraca. Sua senha deve ser mais forte.";
      submitBtn.textContent = "Criar";
      notVisible();
    } else if (error.code === "auth/user-not-found") {
      result.style.background = "rgba(255, 0, 0, 0.199)";
      result.style.display = "block";
      result.innerHTML = "Usuário não cadastrado. Por favor, registre-se primeiro.";
      submitBtn.textContent = "Criar";
      notVisible();
    } else {
      result.style.background = "rgba(255, 0, 0, 0.199)";
      result.style.display = "block";
      result.innerHTML = "Erro ao registrar o usuário, verifique e tente novamente.";
      submitBtn.textContent = "Criar";
      notVisible();
    }
  });
      }
        }
});

function notVisible() {
  setTimeout(() => {
    result.style.display = "none";
  }, 4000);
}
