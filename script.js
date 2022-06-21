let pesquisa = document.querySelector('#procurar');
let btn = document.querySelector('#btnProcurar');

btn.onclick = clickBtn;

function clickBtn() {
  linksSocialMedia.github = pesquisa.value;
  pesquisa.value = '';
  getGitHubProfileInfos();
}

pesquisa.addEventListener('keypress', function (e) {
  if (e.which == 13) {
    clickBtn();
  }
}, false);


let linksSocialMedia = {
  github: "xgusstavo",
  youtube: "channel/UCQozriSh9Hbey0U_Ucm83Vg",
  linkedin: "in/xgusstavo/",
  twitter: "xGusstavoo"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      pictureGithub.src = data.avatar_url
      nameGithub.textContent = data.name
      linkGithub.href = data.html_url
      userGithub.textContent = data.login
      bioGithub.textContent = data.bio
    })
}
getGitHubProfileInfos()
