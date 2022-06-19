
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("<a href='http://www.rememberaaronsw.com/oneyearlater/' target='_blank'> Gone, but never forgotten ❤️.Thank you Aaron 🙏</a>");
  createText("I ❤️ Linux 🐧 and Open-Source");
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(700);
  createText("<a href='https://app.netlify.com/' target='_blank'><i class='fas fa-database'></i> Hosted with ❤️ on Netlify</a>");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about me", "Who am i and what do i do.");
  createCode("ls", "See list of commands.");
  createCode("social -a", "All my social networks.");
  createCode("exit", "To exit from the server");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/kanishk-pachauri🦄";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "ls"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("blogs", "All my Blogs")
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/Mr-Sunglasses' target='_blank'><i class='fab fa-github white'></i> github.com/Mr-Sunglasses</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, my name is Kanishk ;)")
    createText("A Python Developer and a Flutter Developer and <span class='blue'>and A Linux Lover from India</span> and I Build Beautiful IOS apps and also I had worked on different machine learning algorithm using Python.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/Mr-Sunglasses' target='_blank'><i class='fab fa-github white'></i> github.com/Mr-Sunglasses</a>")
    createText("<a href='https://www.linkedin.com/in/kanishk-pachauri-0161261b0/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/kanishk-pachauri</a>")
    createText("<a href='https://www.instagram.com/kanishk.pachauri_/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/kanishk.pachauri_</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  else if(value === "blogs"){
    trueValue(value);
    createText("<a href='https://blog-kanishk.netlify.app/' target='_blank'><i class='fab fa-blogger'></i> blog-kanishk.netlify.app</a>")
    createText("<a href='https://blog-kanishk.vercel.app/' target='_blank'><i class='fab fa-blogger'></i> blog-kanishk.vercel.app</a>")

  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "exit"){
    createText("Bye Bye 👋 😢");
    await delay(700);
    
    // We can use this
    // window.location.replace("http://sidanmor.com");
    window.location.href = "https://search.brave.com/" ;
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();