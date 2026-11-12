
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    // 阻止网页自动刷新
    event.preventDefault();

    // 获取填写的资料
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const agree = document.getElementById("agree").checked;

    const message = document.getElementById("message");

    // 检查姓名
    if (name === "") {
        showError("请输入姓名！");
        return;
    }

    // 检查电话号码
    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
        showError("请输入正确的电话号码！");
        return;
    }

    // 检查 Gmail
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email)) {
        showError("请输入正确的 Gmail 地址！");
        return;
    }

    // 检查确认按钮
    if (!agree) {
        showError("请先确认你的个人资料！");
        return;
    }

    // 显示报名成功
    message.className = "success";

    message.innerHTML =
        "🎉 报名成功！<br>" +
        "姓名：" + escapeHTML(name) + "<br>" +
        "电话号码：" + escapeHTML(phone) + "<br>" +
        "Gmail：" + escapeHTML(email);

    form.reset();

});

function showError(text) {
    const message = document.getElementById("message");
    message.className = "error";
    message.textContent = "❌ " + text;
}

function escapeHTML(text) {
    return text.replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}
