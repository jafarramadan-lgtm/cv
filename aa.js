document.addEventListener(
'DOMContentLoaded',()=>{
    const two=document.querySelector('.two');
    const next1=document.querySelector('.next1') ;
    if(two && next1){
        next1.addEventListener('click',(e) =>{e.preventDefault();
            const currentZIndex=window.getComputedStyle(two).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        two.style.zIndex=zIndexAsNumber- 4;


        });
    }
}
);
document.addEventListener(
'DOMContentLoaded',()=>{
    const three=document.querySelector('.three');
    const next1=document.querySelector('.next1') ;
    if(three && next1){
        next1.addEventListener('click',(e) =>{e.preventDefault();
            const currentZIndex=window.getComputedStyle(three).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        three.style.zIndex=zIndexAsNumber+4;


        });
    }
}
);
document.addEventListener(
'DOMContentLoaded',()=>{
    const four=document.querySelector('.four');
    const n2=document.querySelector('.n2') ;
    if(four && n2){
        n2.addEventListener('click',(e) =>{e.preventDefault();
                        const currentZIndex=window.getComputedStyle(four).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        four.style.zIndex=zIndexAsNumber- 4;
        

        });
    }
}
);

document.addEventListener(
'DOMContentLoaded',()=>{
    const five=document.querySelector('.five');
    const n2=document.querySelector('.n2') ;
    if(five && n2){
        n2.addEventListener('click',(e) =>{e.preventDefault();
                        const currentZIndex=window.getComputedStyle(five).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        five.style.zIndex=zIndexAsNumber+ 8;
        

        });
    }
}
);


document.addEventListener(
'DOMContentLoaded',()=>{
    const seven=document.querySelector('.seven');
    const n3=document.querySelector('.n3') ;
    if(seven && n3){
        n3.addEventListener('click',(e) =>{e.preventDefault();
            const currentZIndex=window.getComputedStyle(seven).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        seven.style.zIndex=zIndexAsNumber+ 100;
        });
    }
}
);



document.addEventListener(
'DOMContentLoaded',()=>{
    const seven=document.querySelector('.seven');
    const prev2=document.querySelector('.prev2') ;
    if(seven && prev2){
        prev2.addEventListener('click',(e) =>{e.preventDefault();
            const currentZIndex=window.getComputedStyle(seven).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        seven.style.zIndex=zIndexAsNumber- 100;


        });
    }
}
);



document.addEventListener(
'DOMContentLoaded',()=>{
    const four=document.querySelector('.four');
    const prev1=document.querySelector('.prev1') ;
    if(four && prev1){
        prev1.addEventListener('click',(e) =>{e.preventDefault();
            const currentZIndex=window.getComputedStyle(four).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        four.style.zIndex=zIndexAsNumber+4;


        });
    }
}
);



document.addEventListener(
'DOMContentLoaded',()=>{
    const five=document.querySelector('.five');
    const prev1=document.querySelector('.prev1') ;
    if(five && prev1){
        prev1.addEventListener('click',(e) =>{e.preventDefault();
            const currentZIndex=window.getComputedStyle(five).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        five.style.zIndex=zIndexAsNumber-8;


        });
    }
}
);

document.addEventListener(
'DOMContentLoaded',()=>{
    const three=document.querySelector('.three');
    const prev=document.querySelector('.prev') ;
    if(three && prev){
        prev.addEventListener('click',(e) =>{e.preventDefault();
            const currentZIndex=window.getComputedStyle(three).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        three.style.zIndex=zIndexAsNumber-4;


        });
    }
}
);



document.addEventListener(
'DOMContentLoaded',()=>{
    const two=document.querySelector('.two');
    const prev=document.querySelector('.prev') ;
    if(two && prev){
        prev.addEventListener('click',(e) =>{e.preventDefault();
            const currentZIndex=window.getComputedStyle(two).zIndex;
            const zIndexAsNumber=parseInt(currentZIndex,10);
        two.style.zIndex=zIndexAsNumber+4;


        });
    }
}
);
