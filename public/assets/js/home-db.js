import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

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
const db = getDatabase(app);
const emailSpan = document.getElementById("emailUser");
const nameSpan = document.getElementById("nameUser");
const siglaUser = document.getElementById("sigla-user");
const logoutButton = document.getElementById("logout-button");
const LinkLogin = document.getElementById("linkLogin");
const LinkRegistrar = document.getElementById("linkRegistrar");
const openModalUser = document.getElementById("openModal");
// Verificar o estado de autenticação do usuário
onAuthStateChanged(auth, (user) => {
  if (user) {
    // O usuário está autenticado
    LinkLogin.style.display = "none";
    LinkRegistrar.style.display = "none";
    openModalUser.style.display = "block";
    emailSpan.textContent = user.email;
    getUserData(user.uid);
  } else {
    // O usuário não está autenticado
    LinkLogin.style.display = "block";
    LinkRegistrar.style.display = "block";
    openModalUser.style.display = "none";
    emailSpan.textContent = "Do not premission!";
  }
});
// Função para obter os dados do usuário a partir do Realtime Database
function getUserData(uid) {
  const userRef = ref(db, `users/${uid}`);
  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        // Exibir os dados do usuário no HTML
        var name = userData.name;
        const palavras = name.split(" ");
        const primeirasLetras = palavras.map(palavra => palavra[0]);
        siglaUser.innerHTML = primeirasLetras;
        emailSpan.textContent = userData.email;
        nameSpan.textContent = userData.name;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Lidar com o logout
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Logout bem-sucedido
      window.location.href = "/";
      console.log("Logout bem-sucedido.");
    })
    .catch((error) => {
      // Trate erros de logout
      console.error("Erro ao fazer logout:", error);
    });
});

const hasLiked = localStorage.getItem("liked") === "true";

        const likeButton = document.getElementById("like-button");
        const likeCount = document.getElementById("like-count");

        // Substitua com a referência ao nó do Firebase onde você deseja armazenar "likes"
        const likesRef = ref(getDatabase(app), "likes");

        if (hasLiked) {
            likeButton.style.display = "none"; // Ocultar o botão "like" se já foi clicado
        }

        // Função para registrar um "like"
        function like() {
            if (!hasLiked) {
                const currentLikes = parseInt(likeCount.textContent, 10);
                const newLikes = currentLikes + 1;
                likeCount.textContent = newLikes;

                // Marcar como "liked" e ocultar o botão
                localStorage.setItem("liked", "true");
                likeButton.style.display = "none";

                // Salvar o "like" no Firebase Realtime Database
                set(likesRef, newLikes);
            }
        }

        likeButton.addEventListener("click", like);

        // Recuperar e exibir a contagem de "likes" do Firebase
        get(likesRef).then((snapshot) => {
            const likes = snapshot.val();
            if (likes !== null) {
                likeCount.textContent = likes;
            }
        });

        function updateViewCount() {
          const viewsRef = ref(getDatabase(app), "views");
          get(viewsRef).then((snapshot) => {
              let views = snapshot.val() || 0;
              views++;
              set(viewsRef, views); // Atualiza a contagem no Firebase
              document.getElementById("view-count").textContent = views; // Atualiza a contagem na página
          });
      }

      // Chame a função para atualizar a contagem de visualizações ao carregar a página
      updateViewCount();