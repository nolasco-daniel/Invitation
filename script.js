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
        this.starSymbols = ['★', '✦', '✶', '✷']; // literal stars
    }

    render() {
        const card = this.invitation.createCard();
        this.app.appendChild(card);
        this.addEvents(card);
        this.addStars(150); // add 150 literal stars
    }

    addEvents(card) {
        const yesBtn = card.querySelector(".yes");
        const noBtn = card.querySelector(".no");

        yesBtn.addEventListener("click", () => {
            card.innerHTML = `
                <h1>✨ You just made me really happy ✨</h1>
                <p>Thank you, Ayheca 💖</p>
                <p>I can't wait to see you under the stars 🌌</p>
            `;
        });

        noBtn.addEventListener("mouseenter", () => this.evadeButton(noBtn));
        noBtn.addEventListener("click", e => {
            e.preventDefault();
            this.evadeButton(noBtn);
        });
    }

    evadeButton(button) {
        const parent = button.parentElement;
        const maxX = parent.offsetWidth - button.offsetWidth;
        const maxY = parent.offsetHeight - button.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }

    addStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.textContent = this.starSymbols[Math.floor(Math.random() * this.starSymbols.length)];
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.fontSize = `${Math.random() * 14 + 6}px`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            document.body.appendChild(star);
        }
    }
}

// START APP
const invite = new Invitation("Ayheca", "");
const ui = new UIController(invite);
ui.render();
