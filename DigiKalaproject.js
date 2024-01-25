$(document).ready(function () {
    $('.daste').hover(function () {
        $('#arrow-down' ).css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.item-list').css('display' , 'block')
        $('.org-daste').css('display' , "block")
    }
    , function () {
        $('#arrow-down').css('display', " inline")
        $('#arrow-top').css('display' , "none")
        $('.item-list').css('display' , 'none')
        $('.org-daste').css('display' , "none")

        })
    $('.item-list').hover(function () {
        $(this).show()
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.org-daste').css('display' , "block")

    }
     , function () {
           $('.item-list').css('display' , "none")
        })
    $('.mobile').hover(function () {
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.big-listitem').css('display' , "flex")
        $('.org-daste').css('display' , "block")

        }
    , function () {
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.big-listitem').css('display' , "none")
        })
    $('.big-listitem').hover(function () {
        $(this).css('display' , "flex")
        $('.item-list').css('display' , "block")
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.org-daste').css('display' , "block")


        }
    , function () {
        $('#arrow-down').css('display', " inline")
        $('#arrow-top').css('display' , "none")
        $('.item-list').css('display' , "none")
        $('.big-listitem').css('display' , "none")
        $('.org-daste').css('display' , "none")


        })

})