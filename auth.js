// LOGIN
//Para já para dar logout, abrir o f12 e colocar este código:firebase.auth().signOut()

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  //Retirar isto depois
  console.log("Email:", email);
  console.log("Password:", password);
  //Até aqui

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        closeModal('login');
  })
  .catch((error) => {
    alert("Erro: " + error.message);
  });
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("userInfo").style.display = "flex";
    document.getElementById("loginButton").style.display = "none";

    const nome = user.displayName || user.email;
    document.getElementById("userName").textContent = nome;
  } else {
    document.getElementById("userInfo").style.display = "none";
    document.getElementById("loginButton").style.display = "block";
  }
});


// REGISTO
document.getElementById("registerBtn").addEventListener("click", () => {
  const nome = document.getElementById("regNome").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

      // Atualizar o nome do utilizador
      return userCredential.user.updateProfile({
        displayName: nome
      });
    })
    .then(() => {
      alert("Conta criada com sucesso!");
      closeModal('register');
    })
    .catch((error) => {
      alert("Erro: " + error.message);
    });
});
