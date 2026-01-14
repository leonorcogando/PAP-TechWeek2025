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

    const name = user.displayName || user.email;
    document.getElementById("userName").textContent = name;
  } else {
    document.getElementById("userInfo").style.display = "none";
    document.getElementById("loginButton").style.display = "block";
  }
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