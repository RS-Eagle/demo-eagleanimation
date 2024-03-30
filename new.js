let animation = new rsAnimate(document.querySelector("h2"));


animation.textAnimate({
    path: document.querySelector(".ss"),
    inAni: "wave",
    onView:true,
    pauseTime:1000,
    aniSpeed:4.9
})

animation.textAnimate({
        path: document.querySelector(".hi"),
        repeat:true,
        inAni: "topFade",
        baseColor: "white",
        inColor:"white",
       
})


// ------All Valid Input----------
//     path : document.querySelector(".hi") 
//     repeat:true,
//     inAni: "wave",
//     baseColor: "white",
//     inColor:"white",
//     inDir:"left",
//     outDir:"left",
//     pauseTime:0,
//     speedControl:false,
//     aniSpeed:4.9,
//     onView:false