const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const inp4 = document.getElementById('inp_range');
    const counter = document.getElementById('counter');

    const res = document.getElementById('res');
    var arr = [];
    var imgNum = 2;
    var range = 5;

    img1.addEventListener('click', function(){
        imgNum = 1;
        img2.checked = false;
        img3.checked = false;
        img1.checked = true;
        resImg(imgNum, range)
    });  
    img2.addEventListener('click', img2Start);
    function img2Start () {
        imgNum = 2;
        img1.checked = false;
        img3.checked = false;
        img2.checked = true;
        resImg(imgNum, range)
    }
    img3.addEventListener('click', function () {
        imgNum = 3;
        img1.checked = false;
        img2.checked = false;
        img3.checked = true;
        resImg(imgNum, range)
    });
    inp4.addEventListener('change', function (e) {  
        range = +e.target.value;
        counter.innerHTML = +e.target.value;
        resImg(imgNum, range)
    });

    function resImg(img, rows) {
        res.innerHTML ="";
        arr = [];
        for (let row = 0; row <= (img == 1 ? rows : rows * 2); row++) {
            arr[row] = getRow(img, rows, row);
        }
        for (let v = 0; v < arr.length; v++) {  // строки
            var html = '';
            for (let s = 0; s < arr[v].length; s++) { // елементи
                html += `<td>${arr[v][s]}</td>`;
            }
            res.innerHTML += `<tr>${html}</tr>`;
        }
    }

    function getRow(img, rows, row) {
        let temp = '';
        for (let posInRow = 0; posInRow <= rows * 2 + 4; posInRow++) {
            temp += getSymbol(img, rows, row, posInRow)
        }
        return temp.split('')
    }
    function getSymbol(img, rows, row, posInRow) {
        switch (img) {
            case 1:
                if (row == 0 || row == rows * 2) { return ' ' }
                if ((row == 1 || row == rows * 2 - 1) && rows >= 1 && (posInRow == rows + 2)) { return 'x' }
                if ((row == 2 || row == rows * 2 - 2) && rows >= 2 && (posInRow == rows + 1 || posInRow == rows + 2 || posInRow == rows + 3)) { return 'x' }

                if ((row == 3 || row == rows * 2 - 3) && rows >= 3 && (posInRow == rows || (posInRow > rows - 1 && posInRow < rows + 5))) { return 'x' }
                if ((row == 4 || row == rows * 2 - 4) && rows >= 4 && (posInRow == rows || (posInRow > rows - 2 && posInRow < rows + 6))) { return 'x' }
                if ((row == 5 || row == rows * 2 - 5) && rows >= 5 && (posInRow == rows || (posInRow > rows - 3 && posInRow < rows + 7))) { return 'x' }
                else { return ' ' }
                break
            case 2:
                if (row == 0 || row == rows * 2) { return 'x' }
                if ((row == 1 || row == rows * 2 - 1) && rows >= 1 && (posInRow == 0 || posInRow == rows + 2 || posInRow == rows * 2 + 4)) { return 'x' }
                if ((row == 2 || row == rows * 2 - 2) && rows >= 2 && (posInRow == 0 || posInRow == rows + 1 || posInRow == rows + 2 || posInRow == rows + 3 || posInRow == rows * 2 + 4)) { return 'x' }

                if ((row == 3 || row == rows * 2 - 3) && rows >= 3 && (posInRow == 0 || posInRow == rows || (posInRow > rows - 1 && posInRow < rows + 5) || posInRow == rows * 2 + 4)) { return 'x' }
                if ((row == 4 || row == rows * 2 - 4) && rows >= 4 && (posInRow == 0 || posInRow == rows || (posInRow > rows - 2 && posInRow < rows + 6) || posInRow == rows * 2 + 4)) { return 'x' }
                if ((row == 5 || row == rows * 2 - 5) && rows >= 5 && (posInRow == 0 || posInRow == rows || (posInRow > rows - 3 && posInRow < rows + 7) || posInRow == rows * 2 + 4)) { return 'x' }
                else { return ' ' }
                break
            case 3:
                if (row == 0 || row == rows * 2) { return ' ' }
                if ((row == 1 || row == rows * 2 - 1) && rows >= 1 && (posInRow == rows + 2)) { return 'x' }
                if ((row == 2 || row == rows * 2 - 2) && rows >= 2 && (posInRow == rows + 1 || posInRow == rows + 3)) { return 'x' }

                if ((row == 3 || row == rows * 2 - 3) && rows >= 3 && (posInRow == rows || posInRow == rows || posInRow == rows + 2 || posInRow == rows + 4)) { return 'x' }
                if ((row == 4 || row == rows * 2 - 4) && rows >= 4 && (posInRow == rows - 1 || posInRow == rows + 1 || posInRow == rows + 3 || posInRow == rows + 5)) { return 'x' }
                if ((row == 5 || row == rows * 2 - 5) && rows >= 5 && (posInRow == rows - 2 || posInRow == rows || posInRow == rows + 2 || posInRow == rows + 4 || posInRow == rows + 6)) { return 'x' }
                else { return ' ' }
                break
        }
    }

    console.log(arr);