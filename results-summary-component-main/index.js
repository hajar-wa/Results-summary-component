const dataSection = document.getElementById("data-section")
const categoryList = document.getElementById("category-list")
const category = document.getElementById("category")
let jsonData = []

async function getData(){
    try{
        const response = await fetch("./data.json")
        const data = await response.json()
        jsonData = data
        console.log("data fetched successfully", jsonData)
        processData();
    }
    catch(error) {
        console.log("error fetching the JSON data:", error )
}
}
function processData() {
    // Now jsonData is available here
    jsonData.forEach(item => {
      console.log(`Category: ${item.category}, Score: ${item.score}, Icon: ${item.icon}`);
      dataSection.innerHTML += 
                    `
                    <ul class = "category-list" id = "category-list">
                        <li class = "display category"><span class = "icon"><img src = ${item.icon} /></span class = "category" id = "category"> ${item.category} </li>
                        <li><span class = "score">${item.score} </span>  <span class = "out-of-hundred" > / 100</span></li>
                    </ul>
                    `
                    switch(item.category){
                        case "Reaction":
                            dataSection.lastElementChild.style.backgroundColor = "hsla(0, 100%, 67%, .1)";
                            dataSection.lastElementChild.style.color = "hsl(0, 100%, 67%)";
                        break;
                        case "Memory":
                            dataSection.lastElementChild.style.backgroundColor = "hsla(39, 100%, 56%, .1)";
                            dataSection.lastElementChild.style.color = "hsl(39, 100%, 56%)";

                        break;
                        case "Verbal":
                            dataSection.lastElementChild.style.backgroundColor = "hsla(166, 100%, 37%, .1)";
                            dataSection.lastElementChild.style.color = "hsla(166, 100%, 37%)";

                        break;
                        case "Visual":
                            dataSection.lastElementChild.style.backgroundColor = "hsla(234, 85%, 45%, .1)";
                            dataSection.lastElementChild.style.color = "hsl(234, 85%, 45%)";

                    }
    }


);

}

  getData()