let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let nr = 0;
let x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0, x6 = 0, x7 = 0, x8 = 0, x9 = 0;
let text = document.getElementById("patrat_1");
let text1 = document.getElementById("patrat_2");
let text2 = document.getElementById("patrat_3");
let text3 = document.getElementById("patrat_4");
let text4 = document.getElementById("patrat_5");
let text5 = document.getElementById("patrat_6");
let text6 = document.getElementById("patrat_7");
let text7 = document.getElementById("patrat_8");
let text8 = document.getElementById("patrat_9");
let txt = document.getElementById("paragraph");
let txt1 = document.getElementById("paragraph1");
let container = document.getElementById("container");
let but = document.getElementById("paragraph2");
let ok5 = 0;


function apasa1() {

    if (ok5 == 0) {
        if (x1 == 0) {
            if (nr % 2 == 0) {
                text.textContent = "X";
                matrix[0][0] = 1;
                txt.textContent = "Este randul jucatorului O"
            }
            else {
                text.textContent = "O";
                matrix[0][0] = 2;
                txt.textContent = "Este randul jucatorului X";
            }
            x1 = 1;
            nr++;
            let ok = 1, ok1 = 1, ok2 = 1;

            for (i = 0; i <= 1; i++) {
                if (matrix[0][i] != matrix[0][i + 1])
                    ok = 0;
            }

            for (i = 0; i <= 1; i++) {
                if (matrix[i][0] != matrix[i + 1][0])
                    ok1 = 0;
            }

            for (i = 0; i <= 1; i++) {
                if (matrix[i][i] != matrix[i + 1][i + 1])
                    ok2 = 0;
            }

            text.style.fontSize = "40px";
            text.style.alignContent = "center";
            if (ok == 1 || ok1 == 1 || ok2 == 1) {
                if (matrix[0][0] == 1)
                    txt.textContent = "Jucatorul cu X a castigat";
                else
                    txt.textContent = "Jucatorul cu O a castigat";
                txt1.textContent = "S-a terminat";
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
                ok5 = 1;
            }
            else {
                let nr1 = 0;
                for (i = 0; i <= 2; i++)
                    for (j = 0; j <= 2; j++) {

                        if (matrix[i][j] == 0)
                            nr1++;
                    }
                if (nr1 == 0) {
                    txt.textContent = "Nu a castigat nimeni";
                    ok5 = 1;
                    but.style.visibility = "visible";
                    but.textContent = "Apasa aici";
                    but.style.textAlign = "center";
                }
            }
        }
    }
}

function apasa2() {

    if (ok5 == 0) {
        if (x2 == 0) {
            if (nr % 2 == 0) {
                text1.textContent = "X";
                matrix[0][1] = 1;
                txt.textContent = "Este randul jucatorului O";
            }
            else {
                text1.textContent = "O";
                matrix[0][1] = 2;
                txt.textContent = "Este randul jucatorului X";
            }
        }
        x2 = 1;
        nr++;

        let ok = 1; ok1 = 1;

        for (i = 0; i <= 1; i++) {
            if (matrix[0][i] != matrix[0][i + 1])
                ok = 0;
        }

        for (i = 0; i <= 1; i++) {
            if (matrix[i][1] != matrix[i + 1][1])
                ok1 = 0;
        }
        text1.style.fontSize = "40px";
        text1.style.alignContent = "center";

        if (ok == 1 || ok1 == 1) {
            if (matrix[0][1] == 1)
                txt.textContent = "Jucatorul cu X a castigat";
            else
                txt.textContent = "Jucatorul cu O a castigat";
            txt1.textContent = "S-a terminat";
            but.style.visibility = "visible";
            but.textContent = "Apasa aici";
            but.style.textAlign = "center";
            ok5 = 1;
        }
        else {
            let nr1 = 0;
            for (i = 0; i <= 2; i++)
                for (j = 0; j <= 2; j++) {

                    if (matrix[i][j] == 0)
                        nr1++;
                }
            if (nr1 == 0) {
                txt.textContent = "Nu a castigat nimeni";
                ok5 = 1;
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
            }
        }
    }
}

function apasa3() {

    if (ok5 == 0) {
        if (x3 == 0) {
            if (nr % 2 == 0) {
                text2.textContent = "X";
                matrix[0][2] = 1;
                txt.textContent = "Este randul jucatorului O";
            }
            else {
                text2.textContent = "O";
                matrix[0][2] = 2;
                txt.textContent = "Este randul jucatorului X";
            }
            x3 = 1;
            nr++;
            text2.style.fontSize = "40px";
            text2.style.alignContent = "center";
            let ok = 1, ok2 = 1, ok3 = 1;
            for (j = 0; j <= 1; j++) {
                if (matrix[0][j] != matrix[0][j + 1])
                    ok = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[i][2] != matrix[i + 1][2])
                    ok2 = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[i][2 - i] != matrix[i + 1][1 - i])
                    ok3 = 0;
            }
            if (ok == 1 || ok2 == 1 || ok3 == 1) {
                if (matrix[0][2] == 1)
                    txt.textContent = "Jucatorul cu X a castigat";
                else
                    txt.textContent = "Jucatorul cu O a castigat";
                txt1.textContent = "S-a terminat";
                ok5 = 1;
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
            }
            else {
                let nr1 = 0;
                for (i = 0; i <= 2; i++)
                    for (j = 0; j <= 2; j++) {

                        if (matrix[i][j] == 0)
                            nr1++;
                    }
                if (nr1 == 0) {
                    txt.textContent = "Nu a castigat nimeni";
                    ok5 = 1;
                    but.style.visibility = "visible";
                    but.textContent = "Apasa aici";
                    but.style.textAlign = "center";
                }
            }
        }
    }
}

function apasa4() {

    if (ok5 == 0) {
        if (x4 == 0) {
            if (nr % 2 == 0) {
                text3.textContent = "X";
                matrix[1][0] = 1;
                txt.textContent = "Este randul jucatorului 0";
            }
            else {
                text3.textContent = "O";
                matrix[1][0] = 2;
                txt.textContent = "Este randul jucatorul X";
            }

            x4 = 1;
            nr++;

            let ok = 1, ok1 = 1;

            for (i = 0; i <= 1; i++) {
                if (matrix[1][i] != matrix[1][i + 1])
                    ok = 0;
            }

            for (i = 0; i <= 1; i++) {
                if (matrix[i][0] != matrix[i + 1][0])
                    ok1 = 0;
            }
            text3.style.fontSize = "40px";
            text3.style.alignContent = "center";

            if (ok == 1 || ok1 == 1) {
                if (matrix[1][0] == 1)
                    txt.textContent = "Jucatorul cu X a castigat";
                else
                    txt.textContent = "Jucatorul cu O a castigat";
                txt1.textContent = "S-a terminat";
                ok5 = 1;
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
            }
            else {
                let nr1 = 0;
                for (i = 0; i <= 2; i++)
                    for (j = 0; j <= 2; j++) {

                        if (matrix[i][j] == 0)
                            nr1++;
                    }
                if (nr1 == 0) {
                    txt.textContent = "Nu a castigat nimeni";
                    ok5 = 1;
                    but.style.visibility = "visible";
                    but.textContent = "Apasa aici";
                    but.style.textAlign = "center";
                }
            }
        }
    }
}

function apasa5() {
    if (ok5 == 0) {
        if (x5 == 0) {
            if (nr % 2 == 0) {
                text4.textContent = "X";
                matrix[1][1] = 1;
                txt.textContent = "Este randul jucatorului O";
            }
            else {
                text4.textContent = "O";
                matrix[1][1] = 2;
                txt.textContent = "Este randul jucatorului X";
            }
            x5 = 1;
            nr++;
            let ok = 1, ok2 = 1, ok3 = 1, ok4 = 1;
            for (i = 0; i <= 1; i++) {
                if (matrix[i][1] != matrix[i + 1][1])
                    ok = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[1][i] != matrix[1][i + 1])
                    ok2 = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[i][i] != matrix[i + 1][i + 1])
                    ok3 = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[i][2 - i] != matrix[i + 1][1 - i])
                    ok4 = 0;
            }
            text4.style.fontSize = "40px";
            text4.style.alignContent = "center";
            if (ok == 1 || ok2 == 1 || ok2 == 1 || ok3 == 1) {
                if (matrix[1][1] == 1)
                    txt.textContent = "Jucatorul cu X a castigat";
                else
                    txt.textContent = "Jucatorul cu O a castigat";
                txt1.textContent = "S-a terminat";
                ok5 = 1;
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
            }
            else {
                let nr1 = 0;
                for (i = 0; i <= 2; i++)
                    for (j = 0; j <= 2; j++) {

                        if (matrix[i][j] == 0)
                            nr1++;
                    }
                if (nr1 == 0) {
                    txt.textContent = "Nu a castigat nimeni";
                    ok5 = 1;
                    but.style.visibility = "visible";
                    but.textContent = "Apasa aici";
                    but.style.textAlign = "center";
                }
            }
        }
    }
}

function apasa6() {
    if (ok5 == 0) {
        if (x6 == 0) {
            if (nr % 2 == 0) {
                text5.textContent = "X";
                matrix[1][2] = 1;
                txt.textContent = "Este randul jucatorului O";
            }
            else {
                text5.textContent = "O";
                matrix[1][2] = 2;
                txt.textContent = "Este randul jucatorului X";
            }
        }
        x6 = 1;
        nr++;
        let ok = 1, ok2 = 1;
        for (i = 0; i <= 1; i++) {
            if (matrix[1][i] != matrix[1][i + 1])
                ok = 0;
        }
        for (i = 0; i <= 1; i++) {
            if (matrix[i][2] != matrix[i + 1][2])
                ok2 = 0;
        }

        text5.style.fontSize = "40px";
        text5.style.alignContent = "center";
        if (ok == 1 || ok2 == 1) {
            if (matrix[1][2] == 1)
                txt.textContent = "Jucatorul cu X a castigat";
            else
                txt.textContent = "Jucatorul cu O a castigat";
            txt1.textContent = "S-a terminat";
            ok5 = 1;
            but.style.visibility = "visible";
            but.textContent = "Apasa aici";
            but.style.textAlign = "center";
        }
        else {
            let nr1 = 0;
            for (i = 0; i <= 2; i++)
                for (j = 0; j <= 2; j++) {

                    if (matrix[i][j] == 0)
                        nr1++;
                }
            if (nr1 == 0) {
                txt.textContent = "Nu a castigat nimeni";
                ok5 = 1;
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
            }
        }
    }
}

function apasa7() {
    if (ok5 == 0) {
        if (x7 == 0) {
            if (nr % 2 == 0) {
                text6.textContent = "X";
                matrix[2][0] = 1;
                txt.textContent = "Este randul jucatorului O";
            }
            else {
                text6.textContent = "O";
                matrix[2][0] = 2;
                txt.textContent = "Este randul jucatorului X";
            }
            x7 = 1;
            nr++;
            let ok = 1, ok1 = 1, ok2 = 1;
            for (i = 0; i <= 1; i++) {
                if (matrix[2][i] != matrix[2][i + 1])
                    ok = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[i][0] != matrix[i + 1][0])
                    ok1 = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[i][2 - i] != matrix[i + 1][1 - i])
                    ok2 = 0;
            }
            text6.style.fontSize = "40px";
            text6.style.alignContent = "center";
            if (ok == 1 || ok1 == 1 || ok2 == 1) {
                if (matrix[2][0] == 1)
                    txt.textContent = "Jucatorul cu X a castigat";
                else
                    txt.textContent = "Jucatorul cu O a castigat";
                txt1.textContent = "S-a terminat";
                ok5 = 1;
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
            }
            else {
                let nr1 = 0;
                for (i = 0; i <= 2; i++)
                    for (j = 0; j <= 2; j++) {

                        if (matrix[i][j] == 0)
                            nr1++;
                    }
                if (nr1 == 0) {
                    txt.textContent = "Nu a castigat nimeni";
                    ok5 = 1;
                    but.style.visibility = "visible";
                    but.textContent = "Apasa aici";
                    but.style.textAlign = "center";
                }
            }
        }
    }
}

function apasa8() {
    if (ok5 == 0) {
        if (x8 == 0) {
            if (nr % 2 == 0) {
                text7.textContent = "X";
                matrix[2][1] = 1;
                txt.textContent = "Este randul jucatorului O";
            }
            else {
                text7.textContent = "O";
                matrix[2][1] = 2;
                txt.textContent = "Este randul jucatorului X";
            }
            x8 = 1;
            nr++;
            let ok = 1, ok2 = 1;
            for (i = 0; i <= 1; i++) {
                if (matrix[2][i] != matrix[2][i + 1])
                    ok = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[i][1] != matrix[i + 1][1])
                    ok2 = 0;
            }
            text7.style.fontSize = "40px";
            text7.style.alignContent = "center";
            if (ok == 1 || ok2 == 1) {
                if (matrix[2][1] == 1)
                    txt.textContent = "Jucatorul cu X a castigat";
                else
                    txt.textContent = "Jucatorul cu O a castigat";
                txt1.textContent = "S-a terminat";
                ok5 = 1;
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
            }
            else {
                let nr1 = 0;
                for (i = 0; i <= 2; i++)
                    for (j = 0; j <= 2; j++) {

                        if (matrix[i][j] == 0)
                            nr1++;
                    }
                if (nr1 == 0) {
                    txt.textContent = "Nu a castigat nimeni";
                    ok5 = 1;
                    but.style.visibility = "visible";
                    but.textContent = "Apasa aici";
                    but.style.textAlign = "center";
                }
            }
        }
    }
}

function apasa9() {
    if (ok5 == 0) {
        if (x9 == 0) {
            if (nr % 2 == 0) {
                txt.textContent = "Este randul jucatorului O";
                text8.textContent = "X";
                matrix[2][2] = 1;
            }
            else {
                txt.textContent = "Este randul jucatorului X"
                text8.textContent = "O";
                matrix[2][2] = 2;
            }
            x9 = 1;
            nr++;
            let ok = 1, ok2 = 1, ok3 = 1;
            text8.style.fontSize = "40px";
            text8.style.alignContent = "center";
            for (i = 0; i <= 1; i++) {
                if (matrix[2][i] != matrix[2][i + 1])
                    ok = 0;
            }
            for (i = 0; i <= 1; i++) {
                if (matrix[i][2] != matrix[i + 1][2])
                    ok2 = 0;
            }

            for (i = 0; i <= 1; i++) {
                if (matrix[i][i] != matrix[i + 1][i + 1])
                    ok3 = 0;
            }

            if (ok == 1 || ok2 == 1 || ok3 == 1) {
                if (matrix[2][2] == 1)
                    txt.textContent = "Jucatorul cu X a castigat";
                else
                    txt.textContent = "Jucatorul cu O a castigat";
                txt1.textContent = "S-a terminat";
                ok5 = 1;
                but.style.visibility = "visible";
                but.textContent = "Apasa aici";
                but.style.textAlign = "center";
            }
            else {
                let nr1 = 0;
                for (i = 0; i <= 2; i++)
                    for (j = 0; j <= 2; j++) {

                        if (matrix[i][j] == 0)
                            nr1++;
                    }
                if (nr1 == 0) {
                    txt.textContent = "Nu a castigat nimeni";
                    ok5 = 1;
                    but.style.visibility = "visible";
                    but.textContent = "Apasa aici";
                    but.style.textAlign = "center";
                }
            }
            txt1.style.textAlign = "center";
        }
    }
}

function schimbare() {
    text.textContent = text1.textContent = text2.textContent = text3.textContent = text4.textContent = text5.textContent = text6.textContent = text7.textContent = text8.textContent = "";
    txt1.textContent = "";
    txt.textContent = "Este randul jucatorului cu X";
    matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    nr = 0;
    x1 = x2 = x3 = x4 = x5 = x6 = x7 = x8 = x9 = 0;
    but.textContent = "";
    but.style.visibility = "hidden";
    ok5 = 0;
}