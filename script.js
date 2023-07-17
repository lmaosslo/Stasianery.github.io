// Script for navigation bar
const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const navBtn=$('.fa-outdent')
const navbar=$('#navbar')
const body=$('body')
navBtn.addEventListener('click',function() {
    navbar.style.right=0+'px'
})
const closeBtn=$('#close')
closeBtn.addEventListener('click',function(e) {
    e.preventDefault()
    if (navbar.style.right==0+'px') {
        navbar.style.right=-350+'px'
    }
})
const paginate=$('#pagination')
const transBtns=$$('#pagination a')

transBtns.forEach(function(transBtn) {
    transBtn.addEventListener('mouseover',function(e) {
        e.preventDefault()
        transBtn.classList.add('active')
      
        if (e.target.innerText==1&&e.target.classList.contains('active')){
            transBtn.style.padding=`10px 30px`
            transBtn.nextElementSibling.style.padding=`10px 15px 10px 5px `
        }
     
    if (transBtn.classList.contains('active')) {
        if (transBtn.innerText==2&&transBtn.classList.contains('active')) {
        transBtn.style.padding=`10px 40px`
        transBtn.previousElementSibling.style.padding=`10px 5px 10px 15px `
        transBtn.nextElementSibling.style.padding=`10px 15px 10px 5px `
        console.log(transBtn.innerText)
        }
        if(transBtn.innerText==""&&transBtn.classList.contains('active')){

            transBtn.style.padding=`10px 30px`
            transBtn.previousElementSibling.style.padding=`10px 5px 10px 15px `
            transBtn.nextElementSibling.style.padding=`10px 15px 10px 5px `
        }
       }
      
    })
    transBtn.addEventListener('mouseout',function(e) {
        e.preventDefault()
        transBtn.classList.remove('active')
        if (e.target.innerText==1&&!e.target.classList.contains('active')){
            transBtn.nextElementSibling.style.padding=`10px 15px `
        }
       
       if (!transBtn.classList.contains('active')) {
        transBtn.style.padding=`10px 15px`
        transBtn.previousElementSibling.style.padding=`10px 15px`
        transBtn.nextElementSibling.style.padding=`10px 15px`
    }
    })
})


const MainImg=$('#MainImg')
const SmallImgCols=$$('.small-img-col')
SmallImgCols.forEach(function(SmallImgCol){
    SmallImgCol.addEventListener('click',function(e) {
        MainImg.src=e.target.src
    })
})
console.log(SmallImgCols,MainImg);
// testing code
{
   
    const ReadmoreBtn=$$(".blog-details a")
    const contentBlog=$$(".blog-details p")
    const blog=$$('.blog-details')
    
    ReadmoreBtn.forEach(function(item) {
    
        
       item.addEventListener('click',function(e) {
        e.preventDefault()
        if(e.target.dataset.id==1) {
            item.innerHTML=` <a data-id="1" class="concak moscow1 active"  href="#">ARE U SURE :)</a> `
            
            
                    const SureBtn=$('.moscow1')
                    SureBtn.addEventListener('click',function(e) {
                        
                        item.classList.remove('active')
                        
                     })
                     
            if (!item.classList.contains('active')) {
    
                const para = document.createElement("a");
                 para.innerText = "This is a paragraph.";
                item.innerHTML=`<p><strong>I want to cook 4 u 4ever 👨‍❤️‍👨</strong></p>
                <a id='-1' class="caiDB" href="#">SHOW LESS</a>
                `
                item.classList.remove('concak')
               
            }
        }
        if(e.target.id==-1){
            item.classList.add('active')
            item.classList.add('concak')
            item.innerText="CONTINUE READING"
        }
        if(e.target.dataset.id==2 ) {
     
            item.innerHTML=` <a data-id="2" class="concak moscow2 active"  href="#">ARE U SURE :)</a> `
           
           
            const SureBtn=$('.moscow2')
            SureBtn.addEventListener('click',function(e) {
                
                item.classList.remove('active')
                
             })
            if (!item.classList.contains('active')) {
    
                const para = document.createElement("a");
                 para.innerText = "This is a paragraph.";
                item.innerHTML=`<p><strong>Pls stay here with me <span class="	far fa-kiss-wink-heart"></span></strong></p>
                <a id='-2' class="caiDB" href="#">SHOW LESS</a>
                `
                item.classList.remove('concak')
               
            }
        }
        if(e.target.id==-2){
            item.classList.add('active')
            item.classList.add('concak')
            item.innerText="CONTINUE READING"
        }
        if(e.target.dataset.id==3) {
         
            item.innerHTML=` <a data-id="3" class="concak moscow3 active"  href="#">ARE U SURE :)</a> `
           
           
            const SureBtn=$('.moscow3')
            SureBtn.addEventListener('click',function(e) {
                
                item.classList.remove('active')
                
             })
            if (!item.classList.contains('active')) {
    
                const para = document.createElement("a");
                 para.innerText = "This is a paragraph.";
                item.innerHTML=`<p><strong>Pls don't go away darlin 😭	</strong></p>
                <a id='-3' class="caiDB" href="#">SHOW LESS</a>
                `
                item.classList.remove('concak')
               
            }
        }
        if(e.target.id==-3){
            item.classList.add('active')
            item.classList.add('concak')
            item.innerText="CONTINUE READING"
        }
        if(e.target.dataset.id==4) {
           item.innerHTML=` <a data-id="4" class="concak moscow4 active"  href="#">ARE U SURE :)</a> `
           
           
                   const SureBtn=$('.moscow4')
                   SureBtn.addEventListener('click',function(e) {
                       
                       item.classList.remove('active')
                       
                    })
                    
           if (!item.classList.contains('active')) {
   
               const para = document.createElement("a");
                para.innerText = "This is a paragraph.";
               item.innerHTML=`<p><strong>I amma giv u a kiss if u want UwU 💋</strong></p>
               <a id='-4' class="caiDB" href="#">SHOW LESS</a>
               `
               item.classList.remove('concak')
              
           }
       }
       if(e.target.id==-4){
           item.classList.add('active')
           item.classList.add('concak')
           item.innerText="CONTINUE READING"
       }
    })
    })
}