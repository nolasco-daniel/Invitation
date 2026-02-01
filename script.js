class Invitation {
    constructor(name, event) {
        this.name = name;
        this.event = event;
    }

    createCard() {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h1>🌙 ${this.event} ✨</h1>

            <p>Hi <b>${this.name}</b> 💫</p>
            <p>
                Of all the people I could ask,  
                you're the one I really want to spend this night with.
            </p>

            <p class="highlight">
                Will you be my date for the Grand Ball?
            </p>

            <div class="buttons">
                <button class="yes">Yes 💖</button>
                <button class="no">No 🙈</button>
            </div>
        `;

        return card;
    }
}

class UIController {
    constructor(invitation) {
        this.invitation = invitation;
        this.app = document.getElementById("app");
    }

    render() {
        const card = this.invitation.createCard();
        this.app.appendChild(card);
        this.addEvents(card);
    }

    addEvents(card) {
        const yesBtn = card.querySelector(".yes");
        const noBtn = card.querySelector(".no");

        // YES button
        yesBtn.addEventListener("click", () => {
            card.innerHTML = `
                <h1>✨ You just made me really happy ✨</h1>
                <p>Thank you, Ayheca 💖</p>
                <p>I can't wait to see you under the stars 🌌</p>
            `;
        });

        // NO button: super fast evasive
        noBtn.addEventListener("mouseenter", () => this.evadeButton(noBtn));
        noBtn.addEventListener("click", (e) => {
            e.preventDefault(); // prevent accidental click
            this.evadeButton(noBtn);
        });
    }

    evadeButton(button) {
        const parent = button.parentElement;
        const maxX = parent.offsetWidth - button.offsetWidth;
        const maxY = parent.offsetHeight - button.offsetHeight;

        // bigger random jump for faster evasive
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
}

// START APP
const invite = new Invitation("Ayheca", "");
const ui = new UIController(invite);
ui.render();
