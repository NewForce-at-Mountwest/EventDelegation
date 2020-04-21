// When the user clicks on any given link, they should see an h1 element with an appropriate heading and some lorem ipsum text. For example, when the user clicks on the "Home" link, they should see a heading that says "Home" and some dummy text.

const linkHTML = (pageHeader) => `<div>
    <h1 class="m-3">${pageHeader}</h1>
    <p class="m-4">If what you're doing doesn't make you happy - you're doing the wrong thing. You create the dream - then you bring it into your world. There we go. In nature, dead trees are just as normal as live trees. Nothing wrong with washing your brush.</p>
</div>`;

document.querySelector("#Home-link").addEventListener("click", () => {
  console.log("HIIIIIIIII");
  document.querySelector("#page-content").innerHTML = linkHTML(
    event.target.id.split("-")[0]
  );
});

document.querySelector("#About-link").addEventListener("click", () => {
  console.log("HIIIIIIIII");
  document.querySelector("#page-content").innerHTML = linkHTML(
    event.target.id.split("-")[0]
  );
});
document.querySelector("#Project-link").addEventListener("click", () => {
  console.log("HIIIIIIIII");
  document.querySelector("#page-content").innerHTML = linkHTML(
    event.target.id.split("-")[0]
  );
});

document.querySelector("#Contact-link").addEventListener("click", () => {
    console.log("HIIIIIIIII");

    let contentElement = document.querySelector("#page-content")
    contentElement.innerHTML = linkHTML(
      event.target.id.split("-")[0]
    );

    contentElement.innerHTML += `<form class="container">
    <div class="row">
    <input type="text" class="col m-2" placeholder="Name" id="name-input">
    <textarea class="col m-2" cols="30" rows="1" placeholder="message" id="message-input"></textarea>
    </div>
    </form>
    <button class="btn btn-primary m-3" id="send-button">Send</button>`
  });

//   When the user clicks the "Send" button, the message inputs should clear and they should see a confirmation message below the form that says "Your message has been sent"

document.querySelector("body").addEventListener("click", () => {
    if(event.target.id === "send-button"){
        const nameText = document.querySelector("#name-input")
        const messageText =document.querySelector("#message-input")


        document.querySelector("#page-content").innerHTML += `<div>
            <h1 class="m-4">${nameText.value}</h1>
            <p class="m-5">Your message has been sent</p>

        </div>`
    }
})
