let i = 0; 			// Start Point
let images = [];	// Images Array
let images2 = [];
let time = 1300;	// Time Between Switch
	 
// Image List

images[0] = "https://img.freepik.com/premium-photo/excited-young-man-doing-online-shopping-cyber-monday-black-friday-concept-big-sale-shopping-mall-positive-man-enjoying-shopping-quality-service-home-shopping-easy-fast_474717-49988.jpg?w=2000";
images[1] = "https://thumbs.dreamstime.com/b/man-shopping-bags-26038415.jpg";
images[2] = "https://st.depositphotos.com/3662505/5113/i/600/depositphotos_51137605-stock-photo-shopping.jpg";
images2[0] = "https://previews.123rf.com/images/pemotret/pemotret0901/pemotret090100122/4208408-aislados-j%C3%B3venes-caucasian-hombre-llevando-bolsas-de-la-compra.jpg?fj=1";
images2[1] = "https://previews.123rf.com/images/elwynn/elwynn1406/elwynn140600210/29290021-young-asian-man-shopping-and-holding-bags-full-length-portrait-isolated-on-white-background-.jpg";
images2[2] = "https://thumbs.dreamstime.com/b/young-asian-man-walking-holding-shopping-bags-full-body-portrait-56386404.jpg";


// Change Image
function changeImg(){
	
 


	// Check If Index Is Under Max
	if(i < images.length){
	  document.add1.src = images[i];
    document.add4.src = images2[i];
    // Add 1 to Index
	  i++;
    
	} 
  
  else  { 
		// Reset Back To O
		i = 0;

	}


	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;






















// animation-անիմացիա
const colors = ["#3CC157", "#2AA7FF", "#BDFF16", "#FCBC0F", "#FF75FD","#FF0077","#3A00FF"];

const numBalls = 70;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});




