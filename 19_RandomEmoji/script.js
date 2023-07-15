const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

let emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=61948feb409dacfe1b6703952ac5e106fb0aee9c"
  );

  data = await response.json();
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();
console.log(emoji);

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
