function hideButtons() {
    // เลือกปุ่มทั้งหมดและเพิ่มคลาส 'hide' เพื่อทำให้ปุ่มหายไปพร้อมกัน
    document.querySelectorAll("button").forEach(button => {
        button.classList.add("hide");
    });
}

function sayHello() {
    document.getElementById("welcome-text").innerText = "Love u 3000 💕💕";
    document.body.style.backgroundColor = "lightgreen";

    // ซ่อนปุ่มทั้งหมด
    hideButtons();
}

function sayGoodbye() {
    document.getElementById("welcome-text").innerText = "ใจดิวสลายฮะมุง";
    document.body.style.backgroundColor = "lightcoral";

    // ซ่อนปุ่มทั้งหมด
    hideButtons();
}

