const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Matrix rain effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrixArray = matrix.split("");

const fontSize = 10;
const columns = canvas.width / fontSize;

const drops = [];
for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(57, 58, 89, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';
    
    for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let commandHistory = [];
let historyIndex = -1;

function redirect() {
  window.location.href = "assets/Kanishk_Resume.pdf";
}

function redirect_blog() {
  window.location.href = "https://blog.kanishkk.xyz";
}

function redirect_work_meet() {
  window.location.href = "";
}

function redirect_friendly_meet() {
  window.location.href = "";
}

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("keydown", function (event) {
  const input = document.querySelector("input");
  if (event.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      input.value = commandHistory[historyIndex];
    }
  } else if (event.key === "ArrowDown") {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      input.value = "";
    }
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("<a href='http://www.rememberaaronsw.com/oneyearlater/' target='_blank'> Gone, but never forgotten ❤️. Thank you Aaron 🙏</a>");
  createText("I ❤️ Linux 🐧, Free Libre and Open-Source Software");
  createText("<a href='https://www.gnu.org/philosophy/free-sw.html' target='_blank'> Learn more about Free Libre and Open-Source Software Philosophy.</a>");
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(700);
  createText("<a href='https://app.netlify.com/' target='_blank'><i class='fas fa-database'></i> Hosted with ❤️ on Netlify</a>");
  await delay(1500);
  createText("You can run several commands:");

  createCode("about me", "Who am i and what do i do.");
  createCode("ls", "See list of commands.");
  createCode("meet", "Schedule some time to meet");
  createCode("social -a", "All my social networks.");
  createCode("blogs", "All my Blogs");
  createCode("resume", "To see my Resume");
  createCode("contact", "Contact me 🤝");
  createCode("exit", "To exit from the server");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/kanishk-pachauri🦄";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const input = document.querySelector("input");
  const value = input.value;
  commandHistory.push(value);
  historyIndex = commandHistory.length;
  
  if (value === "ls") {
    trueValue(value);
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("meet", "Schedule some time to meet");
    createCode("social -a", "All my social networks.");
    createCode("blogs", "All my Blogs");
    createCode("resume", "To see my Resume");
    createCode("contact", "Contact me 🤝");
    createCode("exit", "To exit from the server");
    createCode("clear", "Clean the terminal.");
  } else if (value === "projects") {
    trueValue(value);
    createText("<a href='https://github.com/Mr-Sunglasses' target='_blank'><i class='fab fa-github white'></i> github.com/Mr-Sunglasses</a>");
  } else if (value === "resume") {
    trueValue(value);
    redirect();
  } else if (value === "contact") {
    trueValue(value);
    createText("<a href='https://t.me/thisiskanishkP' target='_blank'><i class='fab fa-telegram'></i> t.me/thisiskanishkP</a>");
    createText("<a href='mailto:itskanishkp.py@gmail.com' target='_blank'><i class='far fa-envelope-open'></i> itskanishkp.py@gmail.com</a>");
  } else if (value === "about me") {
    trueValue(value);
    createText("Kanishk Pachauri is a 🎓 Computer Science and Engineering student from India 🇮🇳. Passionate about open-source and free software since high school, he actively contributes to projects like PSF, Robyn, and FOSSCU 🌐🔧. In 2022, he interned with the Python Software Foundation 🐍🌐 and with the Google Cloud Team ☁️. Kanishk frequently shares his open-source knowledge through talks at Pydelhi, PyCon France 2023, PyCon Australia 2023, FOSS United Delhi, and FOSSCU 🗣️🎤. In his free time, he enjoys working on open-source projects and playing around with new technologies 🎮🔓.");
  } else if (value === "meet") {
    trueValue(value);
    createText("<a href='https://calendly.com/itskanishkp/kanishk-open-source-work-related' target='_blank'>Work 📂 (Open-Source) Related ( Click me 🤙🏻 )</a>");
  } else if (value === "social -a") {
    trueValue(value);
    createText("<a href='https://github.com/Mr-Sunglasses' target='_blank'><i class='fab fa-github white'></i> github.com/Mr-Sunglasses</a>");
    createText("<a href='https://www.linkedin.com/in/kanishk-pachauri-0161261b0/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/kanishk-pachauri</a>");
  } else if (value === "social") {
    trueValue(value);
    createText("Didn't you mean: social -a?");
  } else if (value === "blogs") {
    trueValue(value);
    redirect_blog();
  } else if (value === "image") {
    trueValue(value);
    window.location.href = "assets/image/kanishk.jpg";
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach((e) => e.parentNode.removeChild(e));
  } else if (value === "exit") {
    createText("Bye Bye 👋 😢");
    await delay(700);
    window.location.href = "https://search.brave.com/";
  } else {
    falseValue(value);
    createText(`command not found: ${value}`);
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
