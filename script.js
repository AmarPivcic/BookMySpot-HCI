document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const toggleButton = document.querySelector("#menuicon");
  const closeButton = document.querySelector(".close-btn");

  toggleButton.addEventListener("click", function () {
    burgerMenu.style.width = "280px";
  });

  closeButton.addEventListener("click", function () {
    burgerMenu.style.width = "0";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const newQuestionInput = document.getElementById("newQuestionInput");
  const addButton = document.getElementById("addButton");
  const chatboxin = document.querySelector(".chatboxin");

  addButton.addEventListener("click", function () {
    const question = newQuestionInput.value;
    if (question.trim() !== "") {
      // Create a new question container
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("chat-container");
      questionContainer.innerHTML = `
                <div class="chat-sender img">
                <svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg"
                width="25" height="25" fill="currentColor" class="bi bi-question-diamond"
                viewBox="0 0 16 16">
                <path
                    d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                <path
                    d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
                </div>
                <div class="chat-sender msg">
                    <strong>Your Name</strong>
                    <div class="chatmsg">${question}</div>
                </div>
            `;

      // Append the new question to the chat container
      chatboxin.appendChild(questionContainer);

      // Clear the input field
      newQuestionInput.value = "";

      // Simulate an answer (you can replace this with your actual response logic)
      setTimeout(() => {
        const answerContainer = document.createElement("div");
        answerContainer.classList.add("chat-container");
        answerContainer.innerHTML = `
                  <div class="chat-respond msg">
                      <div class="flippd">
                          <strong>Chatbot</strong>
                          <div class="chatmsg"style="color: rgb(15,15,15);" >Hvala na pitanju! Vaša poruka je primljena, i uskoro ćete dobiti odgovor. Molimo vas za malo strpljenja.</div>
                      </div>
                  </div>
                  <div class="chat-respond img">
                  <svg style="margin-left: 5px;" xmlns="http://www.w3.org/2000/svg"
                  width="25" height="25" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
                  <path
                      d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
              </svg>
                  </div>
              `;

        // Append the answer to the chat container
        chatboxin.appendChild(answerContainer);
      }, 1001);
    }
  });
});

jQuery(document).ready(function ($) {
  tab = $(".tabs h3 a");

  tab.on("click", function (event) {
    event.preventDefault();
    tab.removeClass("active");
    $(this).addClass("active");

    tab_content = $(this).attr("href");
    $('div[id$="tab-content"]').removeClass("active");
    $(tab_content).addClass("active");
  });
});
