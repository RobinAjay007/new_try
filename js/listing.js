let allhouse = document.getElementById("objectinsert");


let alldata=[{
    img:"images/house-1.png",
    type:"Private villa  in San Francisco",
    category:"Deluxe Queen Room With Street View",
    staycondition:"villa",
    rooms:"1 Bedroom / 1 Bathroom / Wifi / Kitchen",
    guest:"2 adults",
    price:100

},
{
    img:"images/house-1.png",
    type:"Private villa  in San Francisco",
    category:"Deluxe Queen Room With Street View",
    staycondition:"villa",
    rooms:"1 Bedroom / 1 Bathroom / Wifi / Kitchen",
    guest:"2 adults",
    price:400
},
{
    img:"images/house-1.png",
    type:"Private villa  in San Francisco",
    category:"Deluxe Queen Room With Street View",
    staycondition:"villa",
    rooms:"1 Bedroom / 1 Bathroom / Wifi / Kitchen",
    guest:"2 adults",
    price:100
},
{
    img:"images/house-1.png",
    type:"Private house  in San Francisco",
    category:"Deluxe Queen Room With Street View",
    staycondition:"house",
    rooms:"1 Bedroom / 1 Bathroom / Wifi / Kitchen",
    guest:"2 adults",
    price:100
},{
    img:"images/house-1.png",
    type:"Private house  in San Francisco",
    category:"Deluxe Queen Room With Street View",
    staycondition:"house",
    rooms:"1 Bedroom / 1 Bathroom / Wifi / Kitchen",
    guest:"2 adults",
    price:100
},
{
    img:"images/house-1.png",
    type:"Private house  in San Francisco",
    category:"Deluxe Queen Room With Street View",
    staycondition:"house",
    rooms:"1 Bedroom / 1 Bathroom / Wifi / Kitchen",
    guest:"2 adults",
    price:100
},{
    img:"images/house-1.png",
    type:"Private hostel  in San Francisco",
    category:"Deluxe Queen Room With Street View",
    staycondition:"hostel",
    rooms:"1 Bedroom / 1 Bathroom / Wifi / Kitchen",
    guest:"2 adults",
    price:100
},
{
    img:"images/house-1.png",
    type:"Private hostel  in San Francisco",
    category:"Deluxe Queen Room With Street View",
    staycondition:"hostel",
    rooms:"1 Bedroom / 1 Bathroom / Wifi / Kitchen",
    guest:"2 adults",
    price:100
}];

let itemlist=alldata.map((all)=>{
    return(
        `<div class="house"><div class="house-img"><img src=${all.img}></div>
        <div class="house-info"><p>${all.type}</p>
        <h3>${all.category}</h3>
        <p>${all.rooms}</p>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        <i class="fa-regular fa-star"></i>
        <div class="house-price">
        <p>${all.guest}</p>
        <h4>$ ${all.price}<span>/day</span></h4>
        </div>
        </div>
        </div>
        `
    )
})

allhouse.innerHTML=itemlist




let listing=()=>{


    let onlyhouse=document.getElementById("house")
    let onlyhostel=document.getElementById("hostel");

    if(onlyhouse.checked==true){
        console.log(onlyhouse.value);

      let housefilter=alldata.filter((h)=>{
        return h.staycondition=="house";
      })
       console.log(housefilter);
      let newhouselist=housefilter.map((newhouse)=>{
        return(
            `<div class="house"><div class="house-img"><img src=${newhouse.img}></div>
            <div class="house-info"><p>${newhouse.type}</p>
            <h3>${newhouse.category}</h3>
            <p>${newhouse.rooms}</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
            <i class="fa-regular fa-star"></i>
            <div class="house-price">
            <p>${newhouse.guest}</p>
            <h4>$ ${newhouse.price}<span>/day</span></h4>
            </div>
            </div>
            </div>
            `
        )
      })

      allhouse.innerHTML=newhouselist;

    }
    else if(onlyhostel.checked==true){
      
          let hostelfilter=alldata.filter((hos)=>{
            return hos.staycondition=="hostel";
          })
           
          let newhostellist=hostelfilter.map((newhostel)=>{
            return(
                `<div class="house"><div class="house-img"><img src=${newhostel.img}></div>
                <div class="house-info"><p>${newhostel.type}</p>
                <h3>${newhostel.category}</h3>
                <p>${newhostel.rooms}</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
                <i class="fa-regular fa-star"></i>
                <div class="house-price">
                <p>${newhostel.guest}</p>
                <h4>$ ${newhostel.price}<span>/day</span></h4>
                </div>
                </div>
                </div>
                `
            )
          })

          
          
          allhouse.innerHTML=newhostellist;
    }

}