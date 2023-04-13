const emojiContainer = document.querySelector("#emojiContainer")
const pushBtn = document.querySelector("#push-btn")
const emojiInput = document.querySelector("#emoji-input")
const unshiftBtn = document.querySelector("#unshift-btn")
const popBtn = document.querySelector("#pop-btn")
const shiftBtn = document.querySelector("#shift-btn")

const myEmojis = ["👨‍💻", "⛷", "🍲"]


function renderEmojis() {
    let emojiItems = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiItems += `
        <span>
            ${myEmojis[i]}
        </span>
        `
    }
    emojiContainer.innerHTML = emojiItems
}
renderEmojis()

pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})