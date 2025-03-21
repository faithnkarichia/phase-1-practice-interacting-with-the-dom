document.addEventListener("DOMContentLoaded", function () {
  let plus = document.getElementById("plus");
  let minus = document.getElementById("minus");
  let pause = document.getElementById("pause");
  let heart = document.getElementById("heart");
  let likes = document.querySelector(".likes");
  let submit = document.getElementById("submit");
  let list = document.getElementById("list");
  let commentInput = document.getElementById("comment-input");
  let counterDisplay = document.getElementById("counter");
  let commentForm = document.getElementById("comment-form");
  let clickCount = 0;
  let counter = 0;
  let paused = false;

  let intId;

  function startCounter() {
    if (!paused) {
      intId = setInterval(() => {
        counter++;
        clickCount = 0;
        counterDisplay.textContent = counter;
      }, 1000);
    }
  }

  plus.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
  });
  minus.addEventListener("click", () => {
    counter--;
    counterDisplay.textContent = counter;
  });

  heart.addEventListener("click", () => {
    clickCount++;

    counterDisplay.textContent = counter;

    likes.innerHTML += `<li>${counter} has been clicked${clickCount} times</li>`;
  });

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cleanCommentInput = commentInput.value;
    let listItem = document.createElement("li");
    listItem.innerText = cleanCommentInput;
    list.appendChild(listItem);
    commentInput.value = "";
  });

  pause.addEventListener("click", () => {
    if (!paused) {
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;

      submit.disabled = true;
      pause.innerText = `Resume`;
      paused = true;

      clearInterval(intId);
    } else {
      
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;

      submit.disabled = false;
      pause.innerText = `Pause`;
      paused = false
      startCounter();
    }
  });

  startCounter();
});
