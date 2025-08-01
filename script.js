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
function generateUsername() {
  // Ensure user is signed in (email check)
  const userEmail = document.getElementById("user-email").textContent;
  if (!userEmail || userEmail === "Loading...") {
    alert("Please sign in to generate usernames.");
    return;
  }

  // Generate username using premium words
  const adjective = premiumAdjectives[Math.floor(Math.random() * premiumAdjectives.length)];
  const noun = premiumNouns[Math.floor(Math.random() * premiumNouns.length)];
  const number = Math.floor(Math.random() * 1000);

  const username = `${adjective}${noun}${number}`;
  document.getElementById("username").textContent = username;
}
async function generateUsername() {
  const userEmail = document.getElementById("user-email").textContent;
  if (!userEmail || userEmail === "Loading...") {
    alert("Please sign in to generate usernames.");
    return;
  }

  const adjective = premiumAdjectives[Math.floor(Math.random() * premiumAdjectives.length)];
  const noun = premiumNouns[Math.floor(Math.random() * premiumNouns.length)];
  const number = Math.floor(Math.random() * 1000);
  const username = `${adjective}${noun}${number}`;

  document.getElementById("username").textContent = username;

  // Save to Firestore
  try {
    const user = auth.currentUser;
    await addDoc(collection(db, "usernames"), {
      uid: user.uid,
      email: user.email,
      username: username,
      timestamp: new Date()
    });
    console.log("Username saved to Firebase:", username);
  } catch (error) {
    console.error("Error saving username:", error);
  }
}
