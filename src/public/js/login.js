const form = document.getElementById('loginForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    let data = new FormData(form);
    let obj = {};
    data.forEach((value,key)=>obj[key]=value);
    fetch('/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(result=>result.json()).then(json=>location.href = 'https://www.plataformapascal.com/NV/');
})

const form2 = document.getElementById('loginForm2');

form2.addEventListener('submit',evt=>{
    evt.preventDefault();
    let data = new FormData(form2);
    let obj = {};
    data.forEach((value,key)=>obj[key]=value);
    fetch('/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(result=>result.json()).then(json=>location.href = 'https://www.plataformapascal.com/NV/');
})