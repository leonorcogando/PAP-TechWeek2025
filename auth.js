// LOGIN
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "main/main.html";
    })
    .catch((error) => {
      alert("Erro: " + error.message);
    });
});

// REGISTO
document.getElementById("registerBtn").addEventListener("click", () => {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Conta criada com sucesso!");
    })
    .catch((error) => {
      alert("Erro: " + error.message);
    });
});