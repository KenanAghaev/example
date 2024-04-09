const slides=document.querySelector(".slideshow-container");
fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(images => {
            images.map((data) => 
            {

const anadiv=document.createElement("div");
anadiv.classList.add("mySlides","fade");
const img=document.createElement("img");
img.src=data.image;
anadiv.append(img);
slides.prepend(anadiv);
            }
         
            
            
            );
        });







// {/* <div class="mySlides fade">
//      
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYXaaFS2q0QNMrJ_fDnZkHtNyf6RhLy6W2Fz41KGJAg&s.jpg" style="width:100%">
//       
//     </div> */}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}