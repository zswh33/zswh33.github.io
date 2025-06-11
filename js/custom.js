

window.addEventListener("DOMContentLoaded", () => {

    const urlParams = (() => {
        const params = []
        window.location.href.split("?")[1].split("&").map(e => { const e2 = e.split('='); params.push([e2[0], e2[1]]) })
        return {
            get(k) {
                const r = params.find(e => e[0] == k)
                return r ? r[1] : undefined;
            }
        }
    })()
    if (urlParams.get('from') == 'travel.moe') {
        //one.moe 异次元之旅
        const nli = document.createElement("li");
        nli.innerHTML = `<a class="menu-text-color border-box" target="_blank" rel="noopener" href="https://travel.moe/go.html?travel=on">   <i class="menu-text-color menu-icon fa-solid fa-location-dot"></i>异次元之旅</a>`;
        nli.setAttribute('class', 'menu-item flex-start border-box');
        const menuList = document.querySelectorAll('.menu-list')[0];
        menuList.insertBefore(nli, Array.from(menuList.children).filter(e => e.classList.value.includes('search'))[0])

    }
})