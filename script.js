let myTabs = []
const inputElement = document.getElementById("input-element")
const inputBtn = document.getElementById("input-btn")
const ulElement = document.getElementById("ul-element")


// Check if there is any data in local storage and if it is there then parse it as JS array
const tabsFromLocalStorage = JSON.parse(localStorage.getItem("myTabs"))

// Check if tabsFromLocalStorage is truthy and if so then sey myTabs to its value and call renderTabs()
if(tabsFromLocalStorage) {
    myTabs = tabsFromLocalStorage
    render(myTabs)
}

const deleteBtn = document.getElementById("delete-btn")
// When double clicked on delete button, clear local storage, myTabs and the DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myTabs = []
    render(myTabs)
})


inputBtn.addEventListener("click", function() {
    myTabs.push(inputElement.value)
    inputElement.value = ""

    // localStorage stores only string, so we use first JSON.stringify() to convert our array to 
    // string and then use JSON.parse() to store that string as proper array again 
    localStorage.setItem("myTabs", JSON.stringify(myTabs)) 

    render(myTabs) 
})

// Render the links stored in array passed on calling render() function
function render(links) {

    let listItems = ""

    // Log out items in myTabs array using for loop
    for(let i=0 ; i<links.length ; i++) {

        // listItems += "<li><a target='_blank' href='" + myTabs[i] + "'>" + myTabs[i] + "</a></li>"
        listItems += `<li>
                        <a target='_blank' href='${links[i]}"'> 
                            ${links[i]} 
                        </a>
                    </li>`
        // ulElement.innerHTML += "<li>" + links[i] + "</li>"
        // OR: another method of doing same as above line
        // const li = document.createElement("li")
        // li.textContent = links[i];
        // ulElement.append(li)

    }

    // Render the listItems inside the unordered list using ulElement.innerHTML
    ulElement.innerHTML = listItems

}