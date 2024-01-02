

<script src="./sheet.json"></script>


function getData(status){
      
      
    var orignalData = JSON.parse(data);
    var actualData = orignalData.filter(a=>{if(a.status==status)return a})
    
    var btn = (status == 'available' ? 'Buy' : (status == 'upcoming' ? 'Coming Soon' : 'Out Of Stock'));

    
     


    var add = '<div class="swiper mySwiper"><div class="swiper-wrapper ">'
    for(let i=0; i<actualData.length; i++ )
    {
      
      add += '<div class=" swiper-slide card" style="width: 22rem; float : left; margin:1px; text-align: center">'
      add += '<img src="'+actualData[i].image+'" class="" alt="..." >'
      add += '<div class="card-body">'
      add += '<h5 class="card-title">'+actualData[i].imagename+'</h5>'
      add += '<p class="card-text">'+actualData[i].price+'</p>'
      add += '<p class="card-text" style="color:blue">'+actualData[i].actulprice+'</p>'
             add +='<div>'
             add +='C:\Users\USER\Desktop\New folder\task9\assets\css'
             add+='.checked {'
             add+='color: blue;}'
            //  add +='</style>'
             for(let j=0; j<5; j++)
            {
              let starValue =actualData[i].starratingValue*1>j?" checked":''
              add+=' <span class="fa fa-star'+starValue+'"></span>'
            }
             add+='</div>'
              add += '<a href="#" class="btn btn-warning"><p class="card-text" style="color:">'+btn+'</p></a>'
              add += '</div>'
              add += '</div>'
            add += '</div>'
    }

    add += '</div>'
    add += '<div class="swiper-button-prev"></div>'
    add += '<div class="swiper-button-next"></div>'
    add += '</div>'
     
      
    document.getElementById("products").innerHTML=add;
    changeSwiper()
    
  } 



  