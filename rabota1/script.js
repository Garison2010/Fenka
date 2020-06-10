let kub = document.getElementById("kub");
let text = document.getElementById("text");
let result = document.getElementById("result");
let rad = document.getElementsByName("raz");
let bth_style = document.getElementById("bth_style");
let root = document.querySelector(":root");

let a = [];
let i = 0;
let g = 0;
let h = 0;
let k;
window.addEventListener("keydown", (e) => {

    console.log(e)
    if (e.key == "Enter") {
        let inputText = document.getElementById("inputText").value;
        text.innerHTML = inputText;
        a = text.innerHTML.split('');
        k = a.length;
        key();
        console.log(a[k - 1])
        a.forEach((element, i) => {
            if (element == "–" || element == "—") {
                a[i] = "-";
            }
        });

    }

    function key() {

        inputText.disabled = true;

        if (a[k - 1] == " ") {

            a.splice(k - 1, 1);
            console.log(a[k - 1])
            console.log("sfnsdf")
        }

        var gg = function (e) {

            if (e.key == "Enter") {
                console.log("asdasd")
                setInterval(() => {
                    g += 0.01;
                }, 10);
            }


            if (i == (a.length - 1)) {
                let scet = h / g * 60;
                console.log(scet)
                result.innerText = Math.floor(scet) + " симвлов/мин"
            }

            if (e.key == a[i] && a[i] != "&zwj;") {
                h++;
                console.log(h);
                console.log(a[i])
                a[i] = "<span class = 'active'>" + a[i] + "</span>";
                text.innerHTML = a.join('');


                if (a[i + 1] == " ") {
                    a[i + 1] = " &zwj;";
                    text.innerHTML = a.join('');
                }

                i++;
                window.removeEventListener("keydown", gg);

                key();

            } else if (a[i] == " &zwj;" || a[i] == " " && e.key == " ") {
                h++;
                console.log(h);
                a[i] = " ";

                if (e.key == a[i]) {
                    a[i] = " &zwj;";
                    i++;
                    window.removeEventListener("keydown", gg);
                    key();
                }

            }
        }

        window.addEventListener("keydown", gg)

    }
});



bth_style.addEventListener("click", () => {
    rad.forEach((element, i) => {

        if (element.checked) {
            switch (i) {
                case 0:
                    root.style.setProperty('--color-hed', 'rgb(125, 231, 116)');
                    root.style.setProperty('--color-activ', 'transparen');
                    root.style.setProperty('--color-block-text', 'rgb(226, 226, 226)');
                    root.style.setProperty('--red-text', 'rgb(0, 70, 0)');
                    break;
                case 1:
                    root.style.setProperty('--color-hed', 'rgb(255, 148, 148)');
                    root.style.setProperty('--color-activ', 'rgb(247, 132, 132)');
                    root.style.setProperty('--color-block-text', 'rgb(255, 226, 226)');
                    root.style.setProperty('--red-text', 'rgb(70, 0, 0)');
                    break;
                case 2:
                    root.style.setProperty('--color-hed', 'rgb(125, 125,255)');
                    root.style.setProperty('--color-activ', 'rgb(132, 132, 255)');
                    root.style.setProperty('--color-block-text', 'rgb(226, 226, 255)');
                    root.style.setProperty('--red-text', 'rgb(0, 0, 70)');
                    break;
            }
        }
    });
})


