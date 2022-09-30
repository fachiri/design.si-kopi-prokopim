// navbar toggler
$(".navToggler").click(function () {
    $(".navCollapse").toggleClass("d-block")
    $(".navCollapse").addClass("active")
    $(".navTogglerIcon").toggleClass("d-none")
    $(".navDismissIcon").toggleClass("d-none")
})

// news card responsiveness
if ($(window).width() < 975) {
    let latestNewsCardHeight
    if(window.location.pathname == '/news') {
        latestNewsCardHeight = $(".latestNewsCardContent").height() + 48 - 68
    } else {
        latestNewsCardHeight = $(".latestNewsCard").height() + 48 - 68
    }
    $(".rightSideNewsContainer").css("margin-top", latestNewsCardHeight+"px")
}

// scrollable with button for memberLists
let scrollDuration = 300;
let leftPaddle = $(".left-paddle")
let rightPaddle = $(".right-paddle")
let itemsLength = $('.memberItem').length;
let itemSize = $('.memberItem').outerWidth(true);
let paddleMargin = 20;

let getMenuWrapperSize = function() {
	return $('.memberWrapper').outerWidth();
}

let menuWrapperSize = getMenuWrapperSize();

$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});

let menuVisibleSize = menuWrapperSize;
let itemVisible = Math.floor(menuVisibleSize / itemSize)

// console.log("menuVisibleSize : "+ (menuVisibleSize - 96));
// console.log("itemSize : "+itemSize);
// console.log("itemVisible : "+itemVisible);

// some responsive behav for memberItem
itemSize = (( menuVisibleSize - 96 ) / itemVisible)
newItemSize = itemSize - 20
$('.memberItem img').css("width", newItemSize+"px")

let getMenuSize = function() {
	return itemsLength * itemSize;
};

let menuSize = getMenuSize();
let menuInvisibleSize = menuSize - menuWrapperSize;
let getMenuPosition = function() {
	return $('.memberLists').scrollLeft();
};
    $('.memberLists').on('scroll', function() {
        menuInvisibleSize = menuSize - menuWrapperSize;
        let menuPosition = getMenuPosition();
        let menuEndOffset = menuInvisibleSize - paddleMargin;
        if (menuPosition <= paddleMargin) {
            $(leftPaddle).addClass('d-none');
            $(rightPaddle).removeClass('d-none');
        } else if (menuPosition < menuEndOffset) {
            $(leftPaddle).removeClass('d-none');
            $(rightPaddle).removeClass('d-none');
        } else if (menuPosition >= menuEndOffset) {
            $(leftPaddle).removeClass('d-none');
            $(rightPaddle).addClass('d-none');
    }
});

$(rightPaddle).on('click', function() {
	$('.memberLists').animate( { scrollLeft: getMenuPosition() + itemSize}, scrollDuration);
});

$(leftPaddle).on('click', function() {
	$('.memberLists').animate( { scrollLeft: getMenuPosition() - itemSize }, scrollDuration);
});

// zoomist
new Zoomist('#struktur-organisasi', {
    zoomer: true,
    height: '100%',
    zoomer: {
      inEl: '.custom-in-zoomer',
      outEl: '.custom-out-zoomer',
      disableOnBounds: true
    },
})