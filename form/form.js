window.addEventListener("load", function () {
  const submitBnt = document.getElementById("submit");
  const resetUserBnt = document.getElementById("userResetButton");

  const userNameInput = document.getElementById("userNameInput");
  const userSurnameInput = document.getElementById("userSurnameInput");

  const scoreResetButton = document.getElementById("scoreResetButton");

  const score1 = document.getElementById("score1");
  const score2 = document.getElementById("score2");
  const score3 = document.getElementById("score3");
  const score4 = document.getElementById("score4");
  const score5 = document.getElementById("score5");

  //   const handler = function () {
  //     if (userNameInput.value.length > 0 && userSurnameInput.value.length > 0) {
  //       submitBnt.disabled = false;
  //     } else {
  //       submitBnt.disabled = true;
  //     }
  //   };

  //   submitBnt.disabled = true;
  //   //submitBnt.setAttribute("disabled", true);

  //   resetUserBnt.addEventListener("click", function () {
  //     userNameInput.value = "";
  //     userSurnameInput.value = "";
  //     handler();
  //   });

  //   scoreResetButton.addEventListener("click", function () {
  //     score1.checked = false;
  //     score2.checked = false;
  //     score3.checked = false;
  //     score4.checked = false;
  //     score5.checked = false;
  //   });

  //   score1.addEventListener("change", handler);
  //   score2.addEventListener("change", handler);
  //   score3.addEventListener("change", handler);
  //   score4.addEventListener("change", handler);
  //   score5.addEventListener("change", handler);

  //   userNameInput.addEventListener("change", handler);
  //   userSurnameInput.addEventListener("change", handler);

  let state = {
    name: "",
    surname: "",
    score: null,
  };

  function setState(newState) {
    state = newState;
    console.log("New state:", newState);
    render();
  }

  function render() {
    userNameInput.value = state.name;
    userSurnameInput.value = state.surname;
    score1.checked = state.score == "1";
    score2.checked = state.score == "2";
    score3.checked = state.score == "3";
    score4.checked = state.score == "4";
    score5.checked = state.score == "5";
    if (
      state.name.length > 0 &&
      state.surname.length > 0 &&
      state.score != null
    ) {
      submitBnt.disabled = false;
    } else {
      submitBnt.disabled = true;
    }
  }

  userNameInput.addEventListener("change", function (event) {
    const newState = {
      name: event.target.value,
      surname: state.surname,
      score: state.score,
    };
    setState(newState);
  });

  render();
  console.log("Main script loaded");
});
