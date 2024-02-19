  
  const  cardnumber = document.getElementsByClassName("btn-card") ;
    avalableSet =8 ;
     count = 0 ;
     value = 0 ;
  for (   cards of  cardnumber       ) {
    
    cards.addEventListener("click" , function (event){
    //  set the inner text of set number
       count = count +1 ;    
        avalableSet = avalableSet-1 ; 
        value = value+500 ;
         
        // append section///
        let seatNumber = event.target.innerText ;
           
      
        
               
        
        if(  count>=5) {
           cards.removeEventListener("click")
           cards.classlist.remove("bg-[#1DD100]")
           
        } 
        event.target.style.backgroundColor ="#1DD100"
       setInnerText(  "totalTaka" , value  )
      setInnerText("selectedSet" , count )
      setInnerText("AvailableSET" , avalableSet  )
      setInnerText( "grandTotal" ,   value                 )
        
     

    }  )
                    
  }





// set inner text function
function setInnerText  ( id , value     )
{   document.getElementById(id).innerText = value }
  



