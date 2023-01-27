let count=0;


const value=document.getElementById('value');
const btns=document.querySelectorAll(".btn");

    console.log(btns);
    btns[0].addEventListener("click",function(){
        count--;
        value.innerHTML=count;
        if(count==0)
        {
            value.style.color="black";
        }
        if(count > 0 )
        {
            value.style.color="green";
        }
        if(count < 0)
        {
            value.style.color="red";
        }
    
    })

    btns[1].addEventListener("click",function()
    {
        count=0;
        value.innerHTML=count;
        if(count==0)
        {
            value.style.color="black";
        }
        if(count > 0 )
        {
            value.style.color="green";
        }
        if(count < 0)
        {
            value.style.color="red";
        }
    
    })

    btns[2].addEventListener("click",function()
    {
        count++;
        value.innerHTML=count;
        if(count==0)
        {
            value.style.color="black";
        }
        if(count > 0 )
        {
            value.style.color="green";
        }
        if(count < 0)
        {
            value.style.color="red";
        }
    
    })
   
