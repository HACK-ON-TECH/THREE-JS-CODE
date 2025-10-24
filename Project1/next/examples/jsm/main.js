// cursor animation

function cursor() {
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");
  
    // NOW WE ARE GOING TO ADD AN EVENT LISTER ON OUR MOUSE
  
    body.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.x + "px",
        y: e.y + "px",
      });
    });
  }
  cursor();
  
  // section1 aniamtion
  
  function section1() {
    let tl = gsap.timeline();
    tl.from(".header", {
      y: -50,
      opacity: 0,
      duration: 1,
    });
  
    tl.from(".text-content h1, .text-content p", {
      y: 100,
      opacity: 0,
      duration: 0.8,
    });
  }
  section1();
  
  // section 2 aniamtion
  
  function section2() {
    let sectionTwo = document.querySelector(".section2");
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");
  
    // mouse enter event listener
  
    sectionTwo.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        innerHTML: "<i class='fa-solid fa-volume-high'></i>",
        fontSize: "25px",
        color: "black",
        margin: "20px",
        background: "white",
      });
  
      // body color change 
  
      gsap.to(body, {
        background: "#0f0f0f",
        color: "white",
      });
    });
  
    // mouse cursor leave aniamtion for section 2
  
    sectionTwo.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        margin: 0,
        innerHTML: "",
      });
  
      // body color change
  
      gsap.to(body, {
        background: "white",
        color: "#0f0f0f",
      });
    });
  }
  section2();
  
  // section 3 aniamtion
  
  function section3() {
    let cursor = document.querySelector(".cursor");
    let sectionThree = document.querySelector(".section3");
  
    // cursor to black in section 3
  
    sectionThree.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        background: "#0f0f0f",
      });
    });
  }
  section3();
  
  // section 4 aniamtion
  
  function section4() {
    let sectionFour = document.querySelector(".section4");
    let cursor = document.querySelector(".cursor");
  
    sectionFour.addEventListener("mouseenter", () => {
      cursor.style.background = "#0f0f0f";
    });
  
    gsap.to(sectionFour, {
      background: "#0f0f0f",
      color: "white",
  
      scrollTrigger: {
        trigger: ".section4 .four .moving-text",
        start: "bottom center",
        end: "botttom center",
        scrub: 2,
        // markers: true,
      },
    });
  
    gsap.to(".services", {
      color: "white",
      scrollTrigger: {
        trigger: ".section4 .four .moving-text",
        start: "bottom center",
        end: "botttom center",
        scrub: 2,
        // markers: true,
      },
    });
  
    // chnaging color of the cursor when the background color changes
  
    sectionFour.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        background: "white",
        scrollTrigger: {
          trigger: ".section4 .four .moving-text",
          start: "bottom center",
          end: "bottom center",
          scrub: 0.1,
          // markers: true, for checking the proper place of the object used
        },
      });
    });
  
    // project
  
    let parentEl = document.querySelector(".bg");
    let childEl = document.querySelectorAll(".first-project .first");
  
    childEl.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        let ids = item.getAttribute("data-id");
        let bgEl = document.querySelector(`.id-${ids}`);
        // console.log(bgEl); checking in the console that its showing the video which we are selecing
  
        // for video playing accoring to the section
  
        parentEl.querySelectorAll("video").forEach((video) => {
          video.style.display = "none";
        });
  
        bgEl.style.display = "block"; //now u can see we are getting video according to our list that we have made in our html
  
        // NOW WE WANT OUR CURSOR TO INCREASE ITS SIZE WHEN IT ENTER TO THE RED DIV
  
        gsap.to(cursor, {
          height: "100px",
          width: "100px",
          duration: 0.1,
          innerHTML: "<P>See Projects</P>",
          fontSize: "15px",
          margin: "20px",
        });
      });
  
      // NOW WE WANT IT TO COME BACK TO ITS NORAML POSITON ON MOUSE LEAVE
  
      item.addEventListener("mouseleave", () => {
        let ids = item.getAttribute("data-id");
        let bgEl = document.querySelector(`.id-${ids}`);
  
        parentEl.querySelectorAll("video").forEach((video) => {
          video.style.display = "none";
        });
  
        bgEl.style.display = "none";
  
        // NOW WE WANT OUR CURSOR TO CAME BACK TO ITS NORMAL SIZE WHEN IT COME OUT TO THE RED DIV
  
        gsap.to(cursor, {
          height: "18px",
          width: "18px",
          duration: 0.1,
          innerHTML: "",
          margin: 0,
        });
      });
    });
  }
  section4();
  
  // ===========================SECTION5 ANMATIONS============
  
  function section5() {
    let sectionFive = document.querySelector(".section5");
    let cursor = document.querySelector(".cursor");
  
    // FOR CHANGING OUR CURSOR COLOR TO BLACK
  
    sectionFive.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        background: "#0f0f0f",
        duration: 0.1,
      });
    });
  
    gsap.from(".section5 .five .left h1, .section5 .five .left h5", {
      y: 100,
      opacity: 0,
      stagger: 1,
      duration: 3,
  
      scrollTrigger: {
        trigger: ".section5 .five",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      },
    });
  }
  section5();
  
  //SECTION7 ANIMATION
  
  function section7() {
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");
    let sectionSeven = document.querySelector(".section7");
  
    gsap.to(body, {
      background: "#0f0f0f",
      color: "white",
      scrollTrigger: {
        trigger: ".section6 .right",
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });
  
    // LET CHANGE OUR CURSOR TO WHITE WHEN BACKGROUND IS BLACK
  
    sectionSeven.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        background: "white",
        duration: 0.1,
        scrollTrigger: {
          trigger: ".section6 .right",
          start: "bottom 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    });
  
    // LET CHANGE OUR CURSOR TO balc WHEN BACKGROUND IS white
    sectionSeven.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        background: "black",
        duration: 0.1,
        scrollTrigger: {
          trigger: ".section6 .right",
          start: "bottom 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    });
  }
  section7();
  