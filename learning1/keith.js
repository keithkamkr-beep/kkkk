const originalCode = document.getElementById("editor").value;

function sayHello() {
    alert("你好！欢迎学习 JavaScript！");
}

function runCode() {
    const code = document.getElementById("editor").value;
    document.getElementById("preview").srcdoc = code;
}

function resetCode() {
    document.getElementById("editor").value = originalCode;
    runCode();
}

let answers = {};

function check(question, answer) {
    const correct = {
        1: 0,
        2: 1,
        3: 0
    };

    answers[question] = answer === correct[question];

    const result = document.getElementById("answer" + question);

    if (answers[question]) {
        result.innerHTML = "✅ 回答正确！";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ 再试试看！";
        result.style.color = "red";
    }

    const score = Object.values(answers)
        .filter(value => value).length;

    document.getElementById("score").innerText =
        "得分：" + score + " / 3";
}

runCode();