const navOpenBtn = document.getElementById("bar");
const nav = document.getElementById("navbar");
const navCloseBtn = document.getElementById("close");

navOpenBtn.addEventListener('click', ()=> {
  nav.classList.add("show-links");
})

navCloseBtn.addEventListener('click', ()=>{
  nav.classList.remove("show-links");
})



// const element = document.getElementById('myElement');
//             element.classList.toggle('class1');
//             element.classList.toggle('class2');

            // .classNavbar {
            //   display: flex;
            //   flex-direction: column;
            //   align-items: flex-start;
            //   justify-content: flex-start;
            //   position: fixed;
            //   top: 0;
            //   right: -300px;
            //   height: 100vh;
            //   width: 300px;
            //   background-color: #c91c1c;
            //   box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
            //   transition: 0.3s;
            //   padding: 80px 0 0 10px;
              
            // }
          
            // .show-links{
            //   right: 0px;
            // }
          