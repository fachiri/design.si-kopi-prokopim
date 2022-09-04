$(".navToggler").click(function () {
    $(".navCollapse").toggleClass("d-block")
    $(".navCollapse").addClass("active")
    $(".navTogglerIcon").toggleClass("d-none")
    $(".navDismissIcon").toggleClass("d-none")
})

if ($(window).width() < 975) {
    latestNewsCardHeight = $(".latestNewsCard").height() + 48 - 68
    $(".rightSideNewsContainer").css("margin-top", latestNewsCardHeight+"px")
}