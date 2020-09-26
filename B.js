let random = 0

function roll() {
    for (let i = 1; i < 10; i++) {
        random = Math.floor(Math.random() * 10 + 1);
    };
    let result = document.querySelector('.result')
    result.textContent = random
    console.log('dice', random)
    if (this.sodudoan == random) {
        alert('Trúng thưởng')
    } else {
        alert('Chúc bạn may mắn lần sau')
    }
}

function so_du_doan() {
    let sodudoan = document.querySelector('.numberdice').value;
    if (sodudoan > 10 || sodudoan < 1) {
        alert('Hãy nhập lại')
    } else {
        roll()
    }
}
let button_rolldice = document.querySelector('.rolldice')
button_rolldice.addEventListener('click', so_du_doan)