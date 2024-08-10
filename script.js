

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
  
    menuIcon.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  });
  
  let fetchedData;
  
  fetchData()
  
   async function fetchData(){
  try{
        const response= await fetch('https://restcountries.com/v3.1/all')
        if(!response.ok){
          throw new error('failed to fetch data')
        }
   
      const data = await response.json()
      console.log(data)
      fetchedData=data
      
      createHtml(fetchedData);
  
  
      }
   catch (error){
         console.log(error)
       }
  
  
   }
  
  
   function createHtml(data){
    let html='';
    console.log(data)
  
    for(let country of data){
     
      
      console.log(country.flags.png)
      html=html+  ` <article class="article">
  
      <h1 class="title">${country.name.official}</h1>
   
      <img src=${country.flags.png} alt="">
    </article>`
      
  
  
     
    }
  
    const htmlContent= document.getElementById('container')
     htmlContent.innerHTML=html
     
  
  
  
   }
  
   