'use strict';
{

    (function (d) {
        var config = {
            kitId: 'tkn6rxp',
            scriptTimeout: 3000,
            async: true
        },
            h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
    })(document);

    const btn = document.getElementById('btn');
    // const todaysRansuu = document.getElementById('todaysRansuu');
    const ul = document.querySelector('ul');
    const ulAll = document.querySelector('ul');
    const today = document.getElementById('today');

    const d = new Date();
    const y = d.getFullYear();
    const m = d.getMonth();
    const date = d.getDate();
    const day = d.getDay();

    const week = [
        '月',
        '火',
        '水',
        '木',
        '金',
        '土',
        '日'
    ];

    today.textContent = `${y}年${m + 1}月${date}日${week[day - 1]}曜日`

    // function ransuuMaker() {
    //     const n = Math.floor(Math.random() * 10000);
    //     const li = document.createElement('li');
    //     ulAll.appendChild(li);
    //     if (n < 1000) {
    //         const nn = String(n).padStart(4, '0');
    //         li.textContent = nn;
    //         ul.appendChild(li);
    //     } else {
    //         li.textContent = n;
    //         ul.appendChild(li);
    //     }
    //     return;
    // }
    let i = 0;
    const ransuuMaker = () => {
        i++;
        const n = Math.floor(Math.random() * 10000);
        const li = document.createElement('li');
        ulAll.appendChild(li);
        if (n < 1000) {
            const nn = String(n).padStart(4, '0');
            li.textContent = `${i}___${nn}`;
            ul.appendChild(li);
        } else {
            li.textContent = `${i}___${n}`;
            ul.appendChild(li);
        }
        return;
    }

    btn.addEventListener('click', () => {
        ransuuMaker();
    });
}
