window.addEventListener('load', function() {

    // to change the background Position of Sprites Pics
    function changeSpritesPosition(selector) {
        let pics = document.querySelectorAll(selector);

        // console.log(pics);

        for (let i = 0; i < pics.length; i++) {
            // console.log(pics[i].offsetHeight);

            let index = i * pics[i].offsetHeight;
            // console.log(index);

            pics[i].style.backgroundPosition = `0 ${-index}px`;
        }
    };

    // middle-nav
    changeSpritesPosition('.icon-pic');


    // text info  of nav-info 
    function changeInfoUnderPics(arr, selector) {
        let info = document.querySelectorAll(selector);

        for (let i = 0; i < info.length; i++) {
            // console.log(info[i]);
            info[i].innerText = arr[i]
        }
    }


    // change background pics url
    function changeBackgroundPicUrl(arr, selector, sizeX, position) {

        let pics = document.querySelectorAll(selector);

        for (let i = 0; i < pics.length; i++) {
            console.log(pics[i]);
            pics[i].style.background = `url(${arr[i]}) no-repeat ${position}`
            pics[i].style.backgroundSize = `${sizeX}px auto`;
        }
    }



    // middle nav 
    const nav_info = ['Spots', 'Around', 'Tasty Food', 'For One Day', 'Local Special']

    changeInfoUnderPics(nav_info, '.nav-info');


    // main nav pics
    const main_nav_item_bgk_left = ['./images/hotel.png', './images/flight.png', './images/travel.png'];
    const main_nav_item_bgk_right = ['./images/hotel_side.png', './images/flight_side.png', './images/travel_side.png'];

    //left side pic
    changeBackgroundPicUrl(main_nav_item_bgk_left, '.left-side', 100, 'bottom right');
    //right side pic
    changeBackgroundPicUrl(main_nav_item_bgk_right, '.right-side', 60, 'bottom left')


    // main nav info
    const double_nav_info = ['Hotel', 'Local Hotel', 'Home Stay', 'Super Cheap', 'Flight', 'Train Ticket', 'Shop Ticket', 'Super Cheap', 'Private Car', 'Travel', 'Tickets', 'Local Special', 'For One Day', 'Super Cheap'];

    changeInfoUnderPics(double_nav_info, '.main-nav-common a')
})