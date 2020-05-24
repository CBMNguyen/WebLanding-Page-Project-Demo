$(document).ready(
    function(){
        $('h1').click(
            function(){
                $(this).css('color','aqua');
            }
        )
        alert('Hello, Nice to meet you.');
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '600px'
            }
        )

        // Crolling mooth.
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 900);
            event.preventDefault();
        });

        $('.mobile').click(
            function(){
                $('.main-nav').slideToggle(200);

                if( $('.mobile').hasClass('fa-bars')){
                    $(".mobile").addClass('fa-times');
                    $(".mobile").removeClass('fa-bars');
                }else{
                    $(".mobile").addClass('fa-bars');
                    $(".mobile").removeClass('fa-times');
                }
            }
        )
    }
)