function updateScroll() {
    const scroll = window.scrollY;

    const height = window.innerHeight;
    const halfHeight = height / 2;

    // if (scroll > halfHeight) {
    //     document.querySelector(".view#view-1 > .view-content").style.top = halfHeight + "px";
    // } else {
    //     document.querySelector(".view#view-1 > .view-content").style.top = scroll + "px";
    // }
    //
    // if (scroll > 3 * halfHeight) {
    //     document.querySelector(".view#view-2 > .view-content").style.top = halfHeight + "px";
    // } else if (scroll > 2 * halfHeight) {
    //     document.querySelector(".view#view-2 > .view-content").style.top = (scroll - 2 * halfHeight) + "px";
    // } else {
    //     document.querySelector(".view#view-2 > .view-content").style.top = "0px";
    // }
    //
    // if (scroll > 5 * halfHeight) {
    //     document.querySelector(".view#view-3 > .view-content").style.top = halfHeight + "px";
    // } else if (scroll > 4 * halfHeight) {
    //     document.querySelector(".view#view-3 > .view-content").style.top = (scroll - 4 * halfHeight) + "px";
    // } else {
    //     document.querySelector(".view#view-3 > .view-content").style.top = "0px";
    // }

    for (let i = 1; i <= 3; i++) {
        const a = (i - 1) * 2;
        const e = document.querySelector( ".view#view-" + i +" > .view-content");

        if (scroll > (a + 1.5) * halfHeight) {
            const b = Math.max(0, 1 - ((scroll - (a + 1.5) * halfHeight) / 300));
            e.style.opacity = (b * 100) + "%";
        } else {
            e.style.opacity = "1";
        }

        if (scroll > a * halfHeight) {
            e.style.top = Math.min(halfHeight, scroll - a * halfHeight) + "px";
        } else {
            e.style.top = "0";
        }
    }
}

document.addEventListener("scroll", (event) => {updateScroll()});

window.scrollTo(0, 0);
