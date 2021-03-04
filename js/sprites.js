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


    //sale_content

    function changeImgSrc(selector, arr) {
        let pics = document.querySelectorAll(selector);

        for (let i = 0; i < pics.length; i++) {
            pics[i].src = arr[i]
        }
    }



    // data
    // middle nav 
    const nav_info = ['Spots', 'Around', 'Tasty', 'One Day', 'Local']

    //sub nv
    const sub_nav_info = ['Travel', 'Wifi', 'Insurance', 'Shopping', 'Gide', 'Tickets', 'Presents', 'Visa', 'Social', 'More']

    // main nav pics
    //right
    const main_nav_item_bgk_left = ['./images/hotel.png', './images/flight.png', './images/travel.png'];
    //left
    const main_nav_item_bgk_right = ['./images/hotel_side.png', './images/flight_side.png', './images/travel_side.png'];


    // main nav info
    const double_nav_info = ['Hotel', 'Local Hotel', 'Home Stay', 'Super Cheap', 'Flight', 'Train Ticket', 'Shop Ticket', 'Super Cheap', 'Private Car', 'Travel', 'Tickets', 'Local Special', 'For One Day', 'Super Cheap'];

    //sale_content
    const sale_content_pic = ['./upload/pic1.jpg', './upload/pic2.jpg', './upload/pic3.jpg', './upload/pic4.jpg', './upload/pic5.jpg', './upload/pic6.jpg']




    // middle-nav background Pic
    changeSpritesPosition('.nav .icon-pic');

    // sub-nav background Pic
    changeSpritesPosition('.sub_nav .icon-pic');

    // middle nav 
    changeInfoUnderPics(nav_info, '.nav-info');

    //sub nv
    changeInfoUnderPics(sub_nav_info, '.sub_nav .nav-info');

    // main nav pics
    changeInfoUnderPics(double_nav_info, '.main-nav-common a')

    //left side pic
    changeBackgroundPicUrl(main_nav_item_bgk_left, '.left-side', 100, 'bottom right');

    //right side pic
    changeBackgroundPicUrl(main_nav_item_bgk_right, '.right-side', 60, 'bottom left');

    //sale-content pics
    changeImgSrc('.sale-content a img', sale_content_pic)
})