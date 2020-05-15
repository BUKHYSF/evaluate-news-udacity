//import checkvalidity
import {checkvalidity} from "./checkvalidity";

function handleSubmit(event) {
    event.preventDefault()

    
    
    //now check input
    // here I am going to choose them in one step instead of one by one.
    // I use 2 then which make sometime diffuclt to read but it will cut time and easier way it will update reslut in UI even.
    
    
    const  inputs = document.querySelector('#name').value
    if (checkvalidity(inputs)== true) {


        console.log("::: Form Submitted :::")
        fetch(`http://localhost:3030/test?input=${inputs}`)
            .then(info => res.json())
            .then(function (info) {
                document.querySelector('#results').innerHTML = `
            <div>
            <p>polarity : ${info.polarity}</p>

             <p>subjectivity : ${info.subjectivity}</p>

             <p>polarity confidence : ${info.polarity_confidence}</p> 

             <p>subjectivity confidence : ${info.subjectivity_confidence}</p>

             <p>Text : ${info.text}</p>

             </div>`
            })
    }
}
// now we export handlesubmit which I could devide it by three but I like to make it eeasier in one not more 
export {handleSubmit}

