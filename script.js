let myTabs = []
const inputElement = document.getElementById("input-element")
const inputBtn = document.getElementById("input-btn")
const ulElement = document.getElementById("ul-element")

inputBtn.addEventListener("click", function() {
    myTabs.push(inputElement.value)
    inputElement.value = ""
    renderTabs() 
})

function saveTab() {
    
}

function renderTabs() {

    let listItems = ""

    // Log out items in myTabs array using for loop
    for(let i=0 ; i<myTabs.length ; i++) {

        // listItems += "<li><a target='_blank' href='" + myTabs[i] + "'>" + myTabs[i] + "</a></li>"
        listItems += `<li>
                        <a target='_blank' href='${myTabs[i]}"'> 
                            ${myTabs[i]} 
                        </a>
                    </li>`
        // ulElement.innerHTML += "<li>" + myTabs[i] + "</li>"
        // OR: another method of doing same as above line
        // const li = document.createElement("li")
        // li.textContent = myTabs[i];
        // ulElement.append(li)

    }

    // Render the listItems inside the unordered list using ulElement.innerHTML
    ulElement.innerHTML = listItems

}