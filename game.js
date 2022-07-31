var name_1 = "Player 1";
var name_2 = "Player 2";

var p1_m = 0;
var p2_m = 0;
var dice1;
var dice2;
var round = 1;

function get_name() {
    name_1 = prompt("Enter the name of player 1 : ");
    name_2 = prompt("Enter the name of player 2 : ");
    const p1 = document.querySelector('p.player1')
    if (name_1 == "") { name_1 = "Player 1" }
    p1.innerHTML = name_1;
    const p2 = document.querySelector('p.player2')
    if (name_2 == "") { name_2 = "Player 2" }
    p2.innerHTML = name_2;
}

function roll() {
    document.getElementById("editbtn").disabled = true;
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    console.log(dice1, dice2);

    document.querySelector('.image1').setAttribute('src', 'dice_' + dice1 + '.png');
    document.querySelector('.image2').setAttribute('src', 'dice_' + dice2 + '.png');
    setPlayer();
    setTimeout(get_marks, 500);
}

function get_marks() {
    if (p1_m < 100 && p2_m < 100) {
        if (round == 1) {
            if (dice1 == 1 && dice2 == 1) {
                round = 2
                p1_m = 0;
            }
            else if (dice1 != dice2) {
                p1_m = p1_m + dice1 + dice2;
                if (p1_m >= 100) {
                    document.querySelector('p.marks1').innerHTML = p1_m;
                    setTimeout(wp(), 1000);
                }
                round = 2;
            }
            else {
                p1_m = p1_m + dice1 + dice2;
                if (p1_m >= 100) {
                    document.querySelector('p.marks1').innerHTML = p1_m;
                    setTimeout(wp(), 1000);
                }
            }
            document.querySelector('p.marks1').innerHTML = p1_m;
            return;
        }
        else if (round == 2) {
            if (dice1 == 1 && dice2 == 1) {
                round = 1;
                p2_m = 0;

            }
            else if (dice1 != dice2) {
                p2_m = p2_m + dice1 + dice2;
                if (p2_m >= 100) {
                    document.querySelector('p.marks2').innerHTML = p2_m;
                    setTimeout(wp(), 2000);
                }
                round = 1;
            }
            else {
                p2_m = p2_m + dice1 + dice2;
                if (p2_m >= 100) {
                    document.querySelector('p.marks2').innerHTML = p2_m;
                    setTimeout(wp(), 2000);
                }

            }
            document.querySelector('p.marks2').innerHTML = p2_m;
            return;
        }
    }
}

function wp() {
    document.getElementById("rllbtn").disabled = true;
    if (round == 1) {
        document.body.style.background = "url(winn.jpg)";
        document.querySelector('h1').innerHTML = "The Winner is " + name_1 + "!!!";
    }
    else if (round == 2) {
        document.body.style.background = "url(winn.jpg)";
        document.querySelector('h1').innerHTML = "The Winner is " + name_2 + "!!!";
    }

}

function setPlayer() {
    if (round == 1) {
        document.querySelector("p.player1").style.fontWeight = 'bold';
        document.querySelector('p.marks1').style.fontWeight = 'bold';
        document.querySelector("p.player2").style.fontWeight = 'normal';
        document.querySelector('p.marks2').style.fontWeight = 'normal';
    }
    else if (round == 2) {
        document.querySelector("p.player1").style.fontWeight = 'normal';
        document.querySelector('p.marks1').style.fontWeight = 'normal';
        document.querySelector("p.player2").style.fontWeight = 'bold';
        document.querySelector('p.marks2').style.fontWeight = 'bold';
    }
}

function reset() {
    location.reload();
}

function back() {
    location.assign("start_page.html");
}
