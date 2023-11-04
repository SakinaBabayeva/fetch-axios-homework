const customersDiv=document.getElementById('customers')


// function fetchdata(){
//     fetch ('https://northwind.vercel.app/api/customers')
// .then(res=>res.json())
// .then(data=>{
//     data.forEach(item=>{
//         const p=document.createElement('p')
//         p.innertext=item.name
//         customersDiv.appendChild(p)
//     })





// } )

// }


    
//     window.onload=()=>{
//     fetchdata()

//     }


const inpOne=document.getElementById('name')
btn.addEventListener('click', function () {
        fetch('https://northwind.vercel.app/api/customers', {
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: inpOne.value,
               }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("data gonderildi" + data);
              });
    })






    