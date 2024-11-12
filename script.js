// const getData = new Promise((resolve, rejects) =>{
//     resolve("she said yes");
//     rejects("she said no")
// });

// getData.then(respone =>{
//     console.log(respone);
// }).catch(erro =>{
//     console.log(erro);
// })


const object = {
    id: 10001,
    name: "pary",
    salary: 200,
}
const geetData = ()=>{
    return new Promise((resolve,rejects)=>{
        let isFound = object.name === name;
        if (isFound){
        resolve(object)
        }else{
            rejects("this is not found ")
        }
    });
    
}

geetData('pary').then(res =>{
    console.log(res);
}).catch(error =>{
    console.log(error);
})
