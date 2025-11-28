    const chatButton = document.getElementById('chatButton');
  const hidden = document.getElementById('chat');

  chatButton.addEventListener('click', () => {
    // Přepínání mezi skrytým a viditelným
    if (hidden.style.display === 'none' || hidden.style.display === '') {
      hidden.style.display = 'block';
    } else {
      hidden.style.display = 'none';
    }
  });

  const dashboardButton = document.getElementById('dashboards');
  const hiddenDashboard = document.getElementById('dashboard');

  dashboardButton.addEventListener('click', () => {
    // Přepínání mezi skrytým a viditelným
    if (hiddenDashboard.style.display === 'none' || hiddenDashboard.style.display === '') {
      hiddenDashboard.style.display = 'block';
    } else {
      hiddenDashboard.style.display = 'none';
    }
  });  


 

  

const chat = document.getElementById("chat");

const dialog = [
    { from: "me", text: "Hey Rebel, I would like to go to Iceland next summer, it is my dream, what should i do for that?" },
    { from: "other", text: "Hi Zoe, let me compare all options for you based on your transactions on your account and other parameters. What is expected amount of money what you need?" },

    { from: "me", text: "Well, I expect around 3000 euros." },
    { from: "other", text: "Ok, got it. Give me a moment." },
    { from: "other", text: "Here are options for you<br>Invest in defense<br>Invest in green<br>Invest in crypto<br><br>What option fit for you? Let me know and I will calculate it" },    

    { from: "me", text: "For me is fine green, also i was thinking in past about BTC." },
    { from: "other", text: "Perfect, I have prepared those possible savings and investments for you. You can save each month following items:<br><span class=\"badge rounded-pill text-bg-danger\">X</span>24$ AppleTV+ subscription<br><span class=\"badge rounded-pill text-bg-danger\">X</span>103€ Insurance<br><span class=\"badge rounded-pill text-bg-success\">+</span>123€ Investments<br><br> " }
];

let index = 0;
let isTyping = false;

function showTyping() {
    const box = document.createElement("div");
    box.className = "typing";
    box.id = "typingBox";
    box.innerHTML = `<div class="dot"></div><div class="dot"></div><div class="dot"></div>`;
    chat.appendChild(box);
    chat.scrollTop = chat.scrollHeight;
}

function removeTyping() {
    const box = document.getElementById("typingBox");
    if (box) box.remove();
}

function showDivByID($id) {
    const box = document.getElementById($id);
    hidden.style.display = 'block';
}

function typeMessage(from, text) {
    return new Promise(resolve => {
        isTyping = true;

        if (from === "other") showTyping();

        setTimeout(() => {
            removeTyping();

            const bubble = document.createElement("div");
            bubble.className = "msg " + from;

            let i = 0;
            const interval = setInterval(() => {
                bubble.innerHTML = text.slice(0, i);
                if (i === 0) chat.appendChild(bubble);
                chat.scrollTop = chat.scrollHeight;

                i++;
                if (i > text.length) {
                    clearInterval(interval);
                    isTyping = false;
                    resolve();
                }
            }, 25);
        }, from === "other" ? 700 : 200);
    });
}

async function nextMessage() {
    if (isTyping) return;
    if (index >= dialog.length) return;

    const msg = dialog[index];
    index++;

    await typeMessage(msg.from, msg.text);
}

chat.addEventListener("click", nextMessage);



  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: '€ / month',
        data: [12345, 13456, 12300, -14222, 12222, 14000],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

 const decisionButton = document.getElementById('decision');
  const hiddenDecision = document.getElementById('decisionDashboard');

  decisionButton.addEventListener('click', () => {
    // Přepínání mezi skrytým a viditelným
    if (hiddenDecision.style.display === 'none' || hiddenDecision.style.display === '') {
      hiddenDecision.style.display = 'block';
    } else {
      hiddenDecision.style.display = 'none';
    }
  });  
