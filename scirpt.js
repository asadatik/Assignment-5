  
  const  cardnumber = document.getElementsByClassName("btn-card") ;
    avalableSet =8 ;
     count = 0 ;
     value = 0 ;
  for (   cards of  cardnumber       ) {
    
    cards.addEventListener("click" , function (event){
    //  set the inner text of set number
       count = count +1 ;    
        avalableSet = avalableSet-1 ; 
        value = value+550 ;
        
        // append section///
        let seatNumber = event.target.innerText ;
        let Economoy = "Economoy";
         let money = 550 ;
          
        let selectedseatcontainer = document.getElementById("selected-seat-container");
         let li = document.createElement("li");
        
         let p1 = document.createElement("p");
         p1.innerText = seatNumber;
         let p2 = document.createElement("p");
         p2.innerText = Economoy ;

         let p3 = document.createElement("p");
         p3.innerText = money ;
         li.appendChild(p1);
         li.appendChild(p2);   
         li.appendChild(p3);
      if(  count < 5      ){
        selectedseatcontainer.appendChild(li);  } 

      
        if(count>=5) {
           cards.removeEventListener("click", function(){});
           cards.classlist.remove("bg-[#1DD100]");
          //  alert( "sorry .A  person"        );
          //  return ;
          
           
        } 
        event.target.style.backgroundColor ="#1DD100"
       setInnerText(  "totalTaka" , value  )
      setInnerText("selectedSet" , count )
      setInnerText("AvailableSET" , avalableSet  )
      setInnerText( "grandTotal" ,   value                 )

    }  ) }
 


// set inner text function
function setInnerText  ( id , value     )
{   document.getElementById(id).innerText = value }
  


                   
// coupon function//
let applied  =  document.getElementById("Apply-korun") ;
    applied.addEventListener( "click", function (  ) {
      let totalTaka = document.getElementById("totalTaka").innerText;
      console.log(totalTaka) ;
     let couponDin = document.getElementById("coupon-din").value ;
        console.log(   couponDin     )
      if(  totalTaka>=2200){
       if( couponDin === "NEW15"){
        let grandTotal = document.getElementById("grandTotal");
            let  discount = totalTaka * .15 ;
             let discountPrice = totalTaka - discount ;
            grandTotal.innerText = discountPrice;
          let hiddenpart = document.getElementById("hiddenpart");
          hiddenpart.classList.add("hidden");
       } else {
          alert("invalid coupon");
       }
                                 
        
      } else {              
          alert (      "please ,at least buy 4 tickets "            );
      }

  

 }    )

