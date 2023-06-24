<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrasi</title>
    <style>
        @import url(headerFooter.css);
        @import url(fontSetting.css);



.container{
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10px 10px 10px 10px;
    box-shadow:  0px 0px 10px 2px rgb(225, 225, 225);
    margin-right: 10%;
    margin-left: 30%;
    width: 65%;
    height: 300px;
    background-color:   white;
}

.container1{
    box-shadow:  0px 0px 10px 2px rgb(225, 225, 225);
    border-radius: 5px;
    margin-top: 50px;
    margin-left: 5%;
    float: left;
    width: 300px;
    height: 185px;
    background-color: white;
}

.container2{
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 5%;   
    clear: both;
    float: left;
    background-color: rgb(57,160,255);
    width: 300px;
    height: 100px;
}


body{
    background-color: rgb(242,246,249);
}

.spanData{
    margin-left: 100px;
    font-size: 16px;
    margin-left: 300px;
}

.imgPortrait{
    position: absolute;
    margin-left: 8%;
    margin-top: 2%;
    float: left;
}

.informasi{
    padding-top: 20px;
    text-align: center;
}

.borderline{
    margin-bottom: 10px;
    border-bottom: solid rgb(159,205,241) 1px;
}

.borderline1{
    margin-top: 0px;
    margin-left: 5%;
    margin-right: 5%;
    border-bottom: dashed rgb(159,205,241) 1px;
}

.profil1{
    margin-top: -18px;
    border-radius: 5px 5px 0px 0px;
    background-color: rgb(57,160,255);
    padding-bottom: 1px;
    color: white;
}

#profil1Id{
    font-size: 18px;
    
}

.profilSpan{
    margin-left: 20px;
    padding-top: 11px;
}

span.fontGrey{
    font-size: 14px;
    padding: 0px;
    margin: 0px;
}

.informasiAkun1{
    padding: 0px;
    text-align: left;
    margin-left: 25px;
    font-size: 15px;
    color: rgb(71,114,255);
}

.informasiAkun{
    padding: 0px;
    text-align: left;
    margin-left: 25px;
    font-size: 15px;
}

.a{
    text-decoration: none;
}

.a:hover{
    color: rgb(71,114,255);
}




    </style>
</head>
<body>
<header>
        <p id="EzChineseP">
            <a id="EzChineseImgHref" href="index.html">
                <object align="center" width="140px" height="110px" data="Pictures/Billy In Hat.png"></object>
            </a>    Ez Chinese
        </p>
        
        <p id="navBar">
            <a class="navbarPaddingLeft" href="index.html">Home       </a>
            <a class="navbarPaddingLeft" href="courses.html">Courses       </a>
            <a class="navbarPaddingLeft" href="superQuiz.html">Super Quiz       </a>
            <a class="navbarPaddingLeft" href="tentang.html">About         </a>
            <a class="navbarPaddingRightLeft" href="registration.html">Login</a>
        </p>
    </header>
    
    <!-- Body -->

<div class="container1">
    <div id="profil1Id" class="fontGrey profil1"> 
        <p class="profilSpan"> Profil </p> 
    </div><br>
    <span class="fontGrey "><div class="informasiAkun1">Informasi Akun</div></span><br>
    <div class="borderline1"></div><br>
    <span class="fontGrey"><div class="informasiAkun"> <a class="a" href="registration.html">Edit Profile</a></div></span>
</div>
<!-- <div class="container2"></div> -->

<div class="container" >
    <p class="fontBlack informasi">Informasi Akun</p>
    <div class="borderline"></div>
    <img src="Pictures/portrait.png" class="imgPortrait" alt=""> <br>
        <div class="fontGrey spanData">
            <?php
            if(isset($_POST['simpan'])){
                $Nama=$_POST['Nama'];
                echo nl2br("Nama : $Nama \n");

                $Gender=$_POST['Gender'];
                echo nl2br("Jenis Kelamin : $Gender \n");
                
                $Age=$_POST['Umur'];
                echo nl2br("Umur : $Age Tahun \n");

                $Username=$_POST['Username'];
                echo nl2br("Username : $Username \n");

                $Email=$_POST['Email'];
                echo nl2br("Email : $Email \n");

                $Password=$_POST['Password'];
                echo nl2br("Password : $Password \n");
            }
            ?>
        </div>
</div>

  <div class="footerPadding"></div>
    <footer>
        <address>
            <p class="footerP" > <object class="footerIcon" align = "center" data ="Icons/icons8-copyright-all-rights-reserved-24.png" width="20px" height="20px" alt=""> </object> 2022 Ez Chinese</p>
            <p class="footerP" > <object class="footerIcon" align = "center" data ="Icons/icons8-phone-50 (1).png" width="20px" height="20px" alt=""></object> Phone : 08123456789</p>
            <p class="footerP" > <object class="footerIcon" align = "center" data ="Icons/icons8-mail-50.png"      width="20px" height="20px" alt=""></object> E-mail : ezchinese@gmail.com</p>
            <p class="footerP" > <object class="footerIcon" align = "center" data ="Icons/icons8-instagram-24.png" width="20px" height="20px" alt=""></object> Instagram : @ezchinese</p>
            <p class="footerP" > <object class="footerIcon" align = "center" data ="Icons/icons8-internet-30.png"  width="20px" height="20px" alt=""></object> EzChinese.com Jepara Tech Ltd. </p>
        </address>
        </footer>

</body>
</html>