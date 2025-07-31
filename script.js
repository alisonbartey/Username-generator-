function generateUsername() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const username = adj + noun + suffix;
  document.getElementById('username').innerText = username;
}

function copyUsername() {
  const text = document.getElementById('username').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('Username copied to clipboard!');
  });
}

document.addEventListener('DOMContentLoaded', generateUsername);
