$(document).ready(function () {
    var floorPath = $(".home-image path");
	var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var viewFlatsButton = $('.view-flats');
    var flatPath = $(".flats path");
    var flatItem = $(".flat-item");
    var flatLink = $(".flat-list li a");

	floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
		currentFloor = $(this).attr("data-floor");
		$(".counter").text(currentFloor);
	});

    flatPath.on("mouseover", function () {
        flatItem[$(this).attr("data-flat") - 1].children[0].classList.add("active");
        $(this)[0].style.opacity = 1;
    });

    flatPath.on("mouseout", function() {
        flatItem[$(this).attr("data-flat") - 1].children[0].classList.remove("active");
        $(this)[0].style.opacity = 0;
    });

    flatLink.on("mouseover", function() {
        flatPath[$(this)[0].getAttribute("data-flat") - 1].style.opacity = 1;
    });

    flatLink.on("mouseout", function() {
        flatPath[$(this)[0].getAttribute("data-flat") - 1].style.opacity = 0;
    });

    floorPath.on("click", toggleModal);
    modalCloseButton.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);

    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    function toggleModal() {
        modal.toggleClass("is-open");
    }
});
