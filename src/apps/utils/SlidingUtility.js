
// To DO used by landingPage and SelectedProperty Component
export function scrollingBackground(numberBackground, widthTotal) {
    let scrollValue = 0, scrolled = 0;
    setInterval(function () {
        scrolled++;
        if (scrolled < numberBackground)
            scrollValue = scrollValue + widthTotal;
        else {
            scrollValue = 0;
            scrolled = 0
        }
        if (scrollerView) { scrollerView.scrollTo({ x: scrollValue, y: 0, animated: false }); }

    }, 4000);

    if (scrollerViewApp) { scrollerViewApp.scrollTo({ x: 0, y: 0, animated: false }); }

}