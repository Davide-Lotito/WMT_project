/**
 * how far you scroll the page
 */
function scrollFunction() {
    let onTop = document.getElementById("back-on-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        onTop.style.display = "block";
    } else {
        onTop.style.display = "none";
    }
}

/**
 * back on top
 */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * Show the progress bar
 */
function progressBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

/*groups function on the same event*/
window.onscroll = function () {
    scrollFunction();
    progressBar();
}

document.getElementById("back-on-top").addEventListener("click", ()=>{
    topFunction();
})