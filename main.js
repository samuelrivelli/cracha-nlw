const linksSocialMedia = {
  github: 'samuelrivelli',
  youtube: 'RocketSeat',
  facebook: 'samuel.magalhaesrivelli',
  instagram: 'samuel_rivelli',
  twitter: 'SamuelRivelli'
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
      userName.textContent = data.name
      userBio.textContent = data.bio
    })
}
getGitHubProfileInfos()
