$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){

            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");

           
        }if(this.scroll > 500){

            $('.scroll-up-btn') .addClass("show");

        }else{
            $('.scroll-up-btn').removeClass("show");
        }


    });


    // typing Animationv script

    var typed = new Typed(".typing", {
        strings: ['Bignner','Devloper','Blogger' ,'Designer','freelancer'],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-2", {
        strings: ['youtuber','Devloper','Blogger' ,'Designer','freelancer'],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    //  owl-carousel script

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:200,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }



    });

});





// css




body{
    margin: 0%;
    padding: 0;
    box-shadow:border-box;
    text-decoration: none;
    background-color: black;
   
    }
    html{
        scroll-behavior: smooth;
    }
    
    .navbar{
    
        position: fixed;
        width: 100%;
        /*background:red;*/
        font-size: 14px;
        margin: auto;
        padding: 5px;
        border: 0.5px solid rgb(43, 41, 41);
        background-color: rgb(247, 8, 8);
        z-index: 999;
        
    }
    .navbar .logo a {
        color: rgb(14, 13, 13);
        font-size: 45px;
        margin: 15px 0px;
        padding:17px;
        font-weight: 600;
        text-decoration: none;
        border: 4px solid rgb(202, 216, 13);
        border-radius: 45px;
        box-shadow: 5px 5px 5px rgb(165, 168, 165);
        
        
        /* transition-duration: 10s;
         transition-timing-function: ease-in; */ 
        transition: all 1s ease-out; 
        

        
    
    }
    /* .logo:hover{
        transform: translate(50px ,100px);
        background-color:rgb(233, 211, 12);
        border-radius: 100px;
        height: 100px;
        width: 200px;
        
    } */
     .navbar .logo a:hover{
        
        
            background-color:rgb(233, 211, 12);
            border-radius: 100px;
            font-size: 45px;
            transform: scale(1.12);
    
           
        
    } 
    .navbar .menu li  a{
        font-size: 7px;
        cursor: pointer;
        margin-left: 25px;
        transition: color 0.3s ease;
        
        }

/* navbar style */

.max-width{

    max-width: 1000px;
    padding: 0 80px;
    margin: auto
}
.navbar .sticky{
    padding: 30px 0;
    background: rgb(247, 242, 243);
}
.navbar .max-width{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar .logo a span{
    color: rgb(12, 11, 11);
    font-size: 45px;
    font-weight: 600;
    margin: auto;
    

}

.navbar .menu li  a i{

    font-size: 11px;
    color: rgb(216, 230, 28);
}
.navbar .menu li  a:hover{
    color: rgb(240, 239, 239);
}

.navbar .sticky .menu li  a:hover{
    color:white;
}
/*manu btn styling */

.manu-btn i{
    font-size: 20px;
    color: white;
    cursor: pointer;
    position: relative;
    top: 2px;
    left: 45px;
    
}
.scroll-up-btn{
    position: fixed;
    height: 45px;
    width: 42px;
    right: 30px;
    bottom: 30px;
    text-align: center;
    line-height: 45px;
    color: white;
    z-index: 9999;
    font-size: 30px;
    border-radius: 6px;
    cursor: pointer;
    opacity: 0;
    pointer-events:none ;
}

.navbar .menu li {
    list-style: none;
    display: inline-block;
    
}

.navbar .menu li a {
    color: rgb(5, 5, 5);
    display: inline-block;
    font-size: 15px;
    text-decoration: none;
  
    
}

/*home page*/

.home{
    display: flex;
    background: url('css/img1/pic14.jpg') no-repeat center;
    height: 100vh;
    background-size: cover;
    color: white;
    font-family: 'ubunto', sans-serif;

}
.home .max-width{
    margin: auto 0 auto 40px;
    position: relative;
    left: 0px;
    top: 2px;


}

.home .home-content .text-1{
    font-size: 20px;
    
}
.home .home-content .text-2{
    font-size: 40px;
    margin: 5px 0;
}

.home .home-content .text-3{
    font-size: 20px;
    margin: 5px 0px;
}
.home .home-content .text-3 span{

color: red;
font-weight: 500;
font-size: 40px;


}
.home .home-content .text-2 span{

    color: red;
    font-weight: 500;
    font-size: 50px;
    
}

.home .home-content a:hover{
    color:black;
    background: yellow;
    font-size: 50px;
}
.home .home-content a{
    display: inline-block;
    background: REd;
    font-size: 35;
    padding: 12px 25px;
    color: black;
    margin: 5px 0px;
    border-radius: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    border: 2px solid black;
    transition: all 1s ease;
}
/* all similar style  contain code  */
section .title{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    color: rgb(206, 10, 10);
    text-align: center;
}

section .title::before{
    content: "";
    position: absolute;
    width: 180px;
    bottom: 0;
    left: 50%;
   
    background-color: black;
    transform: translate(-50%);
}
section .title::after{
    
    /* border: 2px solid red; */
    position: absolute;
    /* bottom: -10px;
    left: 50%; */
    font-size: 20px;
    padding: 5px 5px;
    margin:4%;
    left: 47%;
    height: 3%;
    color: rgb(10, 10, 10);
    font-weight: 1000px;
    background: white;
    transform: translate(-50%); 
}
/* about section styling */
section{
    padding: 100px 0;
    background-color: white;
}
.about{
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.about .title{
    font-weight: 600;
}
.services .title{
    font-weight: 600;
}
.about .title::after{
    content: "Who i am";
    background-color: red;
    border-radius: 50%;
    font-weight: 500;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.about .services .skills , .teams, .contact , footer{ 
    font-family: 'Courier New', Courier, monospace;
}



.about .about-content,
.services .serv-content,
.skills .skills-content,
.contact .contact-contact{
    display: flex;
    flex-wrap:wrap ;
    align-items: center;
    justify-content: space-between;
}

.about .about-content .left{
    width: 35%;
}

.about .about-content .left img{
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 10px;  
}
.about .about-content .right{
    width: 55%;
    /* text-align: center; */
}
.about .about-content .right text{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}
.about .about-content .right .text span{
color: red;

}
.about .about-content .right p{
text-align: justify;

}
.about .about-content .right a{
    display: inline-block;
    background: REd;
    font-size: 35;
    padding: 10px 25px;
    color: rgb(241, 238, 238);
    margin: 5px 0px;
    border-radius: 10px;
    border: 4px solid rgb(246, 250, 17);
    transition: all 0.3s ease;
    }

    .about .about-content .right  a:hover{
        color: red;
        background: none;
    }
    .about .about-content .column{
        width: 50%;
        
    } 
    .skills .title{
        font-weight: 600;
        font-size: 30px;
    }
    .teams .max-width .title {
        font-weight: 600;
        font-size: 30px;
        
    }
     
    
/* .
services section strat */
.services , .teams{
    color: white;
   background: black; 
}

.services .title::before, .teams .title::before{
    background:rgb(10, 10, 10);
    
}
.services .title::after,.teams .title::after {
    width: 100px;
    content: " what i provide";
    border-radius: 50%;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
.services .serv-content .card{
    width: calc(26% -  10px );
    background: #222;
    text-align: center;
    padding: 10px 6px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.services .serv-content .card .box{
    transition: all 0.3s ease;
}
.services .serv-content .card .box:hover{
        transform: scale(1.12);
}
.services .serv-content .card:hover{
    background:red;
}
.services .serv-content .card i{
    font-size: 40px;
   transition:color 0.3s ease;
}
.services .serv-content .card:hover i{
    color: white;
}

.services .serv-content .card .text{
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
}

/* skill styling  */
section .title{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    color: rgb(206, 10, 10);
    text-align: center;
}

section .title::before{
    content: "";
    position: absolute;
    width: 180px;
    bottom: 0;
    left: 50%;
   
    background-color: black;
    transform: translate(-50%);
}

.skills .title::after{
    content: "what i konw";
    font-weight: 600;
    font-size: 15px;
    background-color: red;
    border-radius: 50%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.skills .skills-content .column{
    width: calc(50% -  30px);
}
.skills .skills-content .left .text{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;

}
.skills .skills-content .left p{
    text-align: justify;
}
.skills .skills-content .left a{
    display: inline-block;
    background: REd;
    font-size: 25;
    padding: 7px 15px;
    color: rgb(241, 238, 238);
    margin: 5px 0px;
    border-radius: 10px;
    border: 4px solid rgb(246, 250, 17);
    transition: all 0.3s ease;
}
.skills .skills-content .left a:hover{

color: red;
background: none;

}

.skills .skills-content .right .bars{
  margin-bottom: 15px;
}

.skills .skills-content .right .info{

    display: flex;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;

}
.skills .skills-content .right span{
    font-weight: 600;
    font-size: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.skills .skills-content .right .line{
    height: 5px;
    width: 100%;
    background: lightgray;
    position: relative;
}
.skills .skills-content .right .line::before{
    content: "";
    position: absolute;
    height: 100%;

    left: 0;
    top: 0;
    background: red;
}
.skills-content .right .html::before{
    width: 90%;
}
.skills-content .right .css::before{
    width: 90%;
}
.skills-content .right .JavaScript::before{
    width: 60%;
}
.skills-content .right .php::before{
    width: 70%;
}
.skills-content .right .python::before{
    width: 80%;
}
.skills-content .right .sql::before{
    width: 90%;
}

/* teams section :start */


.teams .title::after{
    content: "Who with me";
    border-radius: 50%;
    color: rgb(14, 13, 13);
   
   
}
.teams .carousel .card{
    background: #222;
    border-radius: 16px;
   
    text-align: center;
    transition: all 0.3s ease;

}
.teams .carousel .card:hover{
background: red;

}
.teams .carousel .card img{
    height: 130px;
    width: 130px;
    padding: 5px 5px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid crimson;
    transition: all 0.3s ease;


} 
.teams .carousel .card .box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}
.teams .carousel .card:hover .box{
    transform: scale(1.05);



}

.teams .carousel .card .text{
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
}
.teams .carousel .card:hover img{
    border-color: #fff;
}
.owl-dots{
    text-align: center;
    margin-top: 20px;
}
.owl-dot{
     height: 13px;
    width: 13px; 
    outline: none !important;
    border-radius: 50%;
    margin: 0 5px;
    border: 4px solid rgb(243, 227, 6) !important;
    border-radius: 50%;
    text-align: center;
    transition: all 0.3s ease;
}
.owl-dot.active{

width: 35px;
border-radius: 14px;

}
.owl-dot.active,
.owl-dot:hover{
    background-color: crimson !important;
}

                    /* Contact styling start */

.contact .title{
    font-weight: 600;
}
.contact .title::after{
    content: " get in touch";
    background-color: rgb(220, 207, 20);
    border-radius: 47%;
    font-size: 15px;
}
.contact .contact-contact .column{
    width: calc(50% - 30px);

}
.contact .contact-contact .text{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
   
.contact .contact-contact .left p{
    text-align: center;
}
.contact .contact-contact .left .icons{
    margin:10px 0;
}
.contact .contact-contact .row{

    display: flex;
    height: 65px;
    align-items: center;
}
.contact .contact-contact .row .info{
    margin-left: 30px;
}
.contact .contact-contact .row  i{
    font-size: 25px;
    color: red;
}

.contact .contact-contact .info .head{
    font-weight: 600;
}
.contact .contact-contact .info .sub-title{

    color: #333;
}
.contact .right form .fields{
    display: flex;
}
.contact .right form .field,
.contact .right form  .fields .field{

    height: 35px;
    width: 100%;
    margin-bottom: 15px;
}
.contact .right form .name{
    margin-right: 10px;
    
}
.contact .right form .email{
    margin-left: 10px;
}
.contact .right form .textareas{
    height: 80px;
    width: 100%;
}
.contact .right form .textareas textarea{
    padding-top: 10px;
    resize: none;
}
.contact .right form .button{
    height: 50px;
    width: 35%;
    
    
}

.contact .right form .button button{

width: 100%;
height: 100%;
border: 2px solid rgb(194, 226, 13);
background: rgb(236, 12, 4);
font-size: 15px;
font-weight: 600;
border-radius: 10px;
color: white;
transition: all 0.3s ease;
cursor: pointer;



}

.contact .right form .button button:hover{

color: crimson;
background: white;


}


.contact .right form .field input ,
.contact .right form .textareas textarea{
    height: 100%;
    width: 100%;
    border: 2px solid gray;
    border-radius: 6px;
    outline: none;
    font-size: 17px;
    padding: 0 17;
   
}
/* footer section start */
 footer{
      background: rgb(17, 17, 17);
      padding: 20px 23px;
      color: rgb(247, 241, 241);
      text-align: center;


 }
 footer span a{
     color: rgb(250, 15, 7);
 }
 footer span a:hover{
     text-decoration: underline;
 }


//  js

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){

            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");

           
        }if(this.scroll > 500){

            $('.scroll-up-btn') .addClass("show");

        }else{
            $('.scroll-up-btn').removeClass("show");
        }


    });


    // typing Animationv script

    var typed = new Typed(".typing", {
        strings: ['Bignner','Devloper','Blogger' ,'Designer','freelancer'],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-2", {
        strings: ['youtuber','Devloper','Blogger' ,'Designer','freelancer'],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    //  owl-carousel script

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:200,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }



    });

});






html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal profile Website</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/all.css">
    <script src="js/jquery.js"></script>
    <script src=" https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />


    <!-- <link rel="stylesheet" href="script.js"> -->

</head>


<body>
    <div class="scroll up btn">
        <i class=" fas fa-angle-up "></i>
    </div>
    <nav class=" navbar">
        <div class=" max-width">

            <div class=" logo"><a href="#"> portfo<span>lio</span></a> </div>

            <ul class="menu">
                <li><a href="#home"><i class="fas fa-house-user"></i><b>Home</a></li>
                <li><a href="#about"><i class="fas fa-cart-arrow-down"></i>About</a></li>
                <li><a href="#services"><i class="fas fa-bus"></i>Services</a></li>
                <li><a href="#skills"><i class="fas fa-book-reader"></i>Skills</a></li>
                <li><a href="#teams"><i class="fas fa-american-sign-language-interpreting"></i>Teams</a></li>
                <li><a href="#contact"><i class="fas fa-address-card"></i>Contact us</a></li>
            </ul>
            <div class="manu-btn">
                <i class="fas fa-bars">
                    <link rel="stylesheet" href="nav.html"></i>

            </div>
        </div>
    </nav>

    <!--home section sart---------->

    <section class="home" id="home">
        <div class="max-width">

            <div class="home-content">
                <div class="text-1">Hello,my name is</div>
                <div class="text-2">Rahul Cha<span><b>van</span></div>
                <div class="text-3">And I'am a<span class="typing"></span></div>
                <a href="#">Hire me</a>
            </div>
        </div>

    </section>
    <!-- about section start -->

    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="content left">
                    <img src="css/images/pic-13.jpg" alt="">

                </div>
                <div class="column right">

                    <div class="text">I'am Rahul and I'am a <span class="typing-2"></span></div>
                    <p> I am currently studying BE computer engineering from kjcoemr.

                        I have absolute knowledge about python, html, javascript, css, mysql & mongodb.
                        
                        I have also secured certificates from coursera in basic of python and introduction of mongodb and certificate of c & c++ .
                        
                        i desire to complete a masters degree and also complete my phd with the specialization in databases.
                        
                        I also have interest in sports and exploring new ideas and trying to implement them.
                        
                        I am a completely dedicated and focused person.Time management and teamwork are my strengths.
                        
                                                    
                        
                        
                                    Thats it about me! Thank you !
                        </p>
                    <a href="C:\Users\Susheela Mishra\Desktop">Download CV</a>

                </div>
            </div>
        </div>
    </section>
    <!-- service section start -->

    <section class="services" id="services">
        <div class="max-width">
            <h2 class="title"> My Services </h2>
            <div class="serv-content">

                <div class="card">
                    <div class="box">
                        <i class=" fas fa-paint-brush"></i>
                        <div class="text">Web Design</div>
                        <p>
                            We don't just build websites, we build websites that SELLS
                            We don't just sell websites, we create websites that SELL.</p>


                    </div>
                </div>

                <div class="card">
                    <div class="box">
                        <i class=" fas fa-chart-line"></i>
                        <div class="text">Advertising</div>
                        <p>A good advertisement is one which sells the product without drawing attention to itself</p>


                    </div>
                </div>

                <div class="card">
                    <div class="box">
                        <i class=" fas fa-code"></i>
                        <div class="text">Apps Design</div>
                        <p>You need to think about the app as the glue of your business</p>


                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- skilll section start -->
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title"> My Skills</h2>
            <div class="skills-content">
                <div class="column left">

                    <div class="text">My creative skills & exprinces. </div>
                    <p>I have absolute knowledge about python, html, javascript, css, mysql & mongodb.

                        I have also secured certificates from coursera in basic of python and introduction of mongodb and certificate of c & c++ 
                        </p>
                    <a href="#">Read more</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>60%</span>
                        </div>
                        <div class="line JavaScript"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>PHP</span>
                            <span>70%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>PYTHON</span>
                            <span>80%</span>
                        </div>
                        <div class="line python"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>SQL</span>
                            <span>90%</span>
                        </div>
                        <div class="line sql"></div>
                    </div>



                </div>
            </div>
    </section>

    <!-- team section start -->


    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">My Teams </h2>
            <div class="carousel owl-carousel">
                <div class="card">
                    <div class="box">
                        <img src="css/images/img1.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur os harum.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="css/images/img2.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur tae eos harum.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="css/images/img3.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetuitae eos harum.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="css/images/img4.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur aditae eos harum.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src="css/images/img5.jpg" alt="">
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur itae eos harum.</p>
                    </div>
                </div>
            </div>

        </div>


    </section>

    <!-- Contact Detail -->
    <section class="contact" id="contact">
        <div class="max-width">
            <h1 class="title">Contact me</h1>
            <div class="contact-contact">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>“If you really care about someone you will make time for them.”
                        “Life's rule number one: You're never too busy to keep in touch with an old friend.......</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Rahul Chavan</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Pune Kondhwa</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">rc69764@mail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Massage Me</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" required>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" required>
                        </div>
                        <div class="field textareas">
                            <textarea cols="30" rows="10" placeholder="Describe Project.." required></textarea>
                            <div class="button">
                                <button type="submit">Send Massage</button>
                            </div>
                        </div>
                       


                    </form>
                </div>
            </div>
    </section>

    <!-- footer section start -->
    <footer>

        <span> Created BY <a href="#">RC</a> || <span class="far fa-copyright"></span> 2020 All right reserved.  </span>
    </footer>

    <script src="script.js"></script>
</body>

</html>

    





