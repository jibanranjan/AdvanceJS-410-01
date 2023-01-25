const input=document.getElementById("inputsearch")
const result= document.getElementById("result")

async function finder(){
    result.innerHTML=""
    
    const value=input.value
    console.log(value)

 const data= fetch(`https://api.github.com/search/users?q=${value}`)
 console.log(data)

 const response = await data
 console.log(response)
 const accounts= await response.json()
 console.log(accounts.items)
 accounts.items.map((ele)=>{
    console.log(ele)
    result.innerHTML +=`<div class="profile">
    <img src=${ele.avatar_url} alt="">
    <div class="name">
        <p>${ele.login}</p>
        <a href=${ele.html_url}>view Profile</a>

    </div>


</div>`
    
 })

}

async function finderall(){
   
    
    const value=input.value
    console.log(value)

 const data= fetch(`https://api.github.com/users`)
 console.log(data)

 const response = await data
 console.log(response)
 const accounts= await response.json()
 console.log(accounts.items)
 accounts.map((ele)=>{
    console.log(ele)
    result.innerHTML +=`<div class="profile">
    <img src=${ele.avatar_url} alt="">
    <div class="name">
        <p>${ele.login}</p>
        <a href=${ele.html_url}>view Profile</a>

    </div>


</div>`
    
 })
}

function cleardata(){
    input.value=""
    result.innerHTML=""
    finderall()
}

finderall()