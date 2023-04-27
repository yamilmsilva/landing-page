const cursor_circle = document.querySelector(".cursor-circle"),
    cursor = document.querySelectorAll(".cursor");
    elements = document.querySelectorAll(".getHover");
    image_wrap = document.querySelector(".image-wrap");



let timeline = gsap.timeline({
    defaults:{duration:1.3, ease:"power3.inOut"},// since this repeats 
}); 

timeline
        .to(".image-wrap", {
            height: "550px",
            backgroundSize:"105%",
            duration:1.5,
            ease:"power4.inOut",
        })
        // close and up of pic
        .to(".image-wrap", {
            height: "350px",
            backgroundPosition:"50% 58%", //i can edit this if i wan to show more face//
            y:"0",
            /*duration:1.3,
            ease:"power3.inOut",*/
            },
            1.5
        )
        .from(
            ".big-name",
            {
                y:getYDistance(".big-name"),
                /*duration: 1.3,
                ease:"power3.inOut",*/
            },
            1.5
        )
        .from(".hide", {
                opacity: "0", 
                /*duration: 1.3,
                ease: "power3.inOut",*/
            },
            1.5
        )

        function getYDistance(el) {
            return(
                window.innerHeight - document.querySelector(el).getBoundingClientRect().
                top
            );
        }

       
        window.addEventListener("mousemove", (e) => {
             //console. log ("hellooo");
            let xPosition = e.clientX;
            let yPosition = e.clientY;

            //console.log(xPosition, yPosition)

            cursor.forEach((el) => {
            el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% +
                 ${yPosition}px))`;
            el.style.opacity = "1";
            });
        });

elements.forEach((el) => {
    el.addEventListener("mouseover", () => {
       // console.log("hovered!");
       cursor_circle.classList.add("biggerCursor");
    });
    el.addEventListener("mouseout", () => {
       // console.log("hovered!");
       cursor_circle.classList.remove("biggerCursor");
    });
});

image_wrap.addEventListener("mousemove", (e) => {
    //console.log("moving"); 
    let rect = image_wrap.getBoundingClientRect(), //Image top and left position
        x = e.clientX - rect.left, //mouse x position within the image
        y = e.clientY - rect.top; //mouse y position within the image


        let xSpeed = 0.008,
            ySpeed = 0.02;

        //console.log(x, y);
        let xMoving = x - image_wrap.clientWidth / 2;
        let yMoving = y - image_wrap.clientHeight / 2;

        //console.log(xMoving, yMoving);

        image_wrap.style.backgroundPosition = `calc(50% + ${
            xMoving * xSpeed
        }px) calc(58% + ${yMoving * ySpeed}px)`;
});

image_wrap.addEventListener ("mouseover", () => {
    image_wrap. style.transition = ".2s background-position";
    setTimeout(() => {
    image_wrap. style.transition = "0s background-position";
    }, 200);
});

image_wrap.addEventListener ("mouseout", () => {
    image_wrap. style.transition = ".5s background-position";
    image_wrap.style.backgroundPosition = "50% 58%";
});


setTimeout (() => {
    image_wrap.style.pointerEvents = "auto";
}, timeline.endTime() * 1000);
    I