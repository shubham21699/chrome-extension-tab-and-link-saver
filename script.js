let myLinks = []
const inputElement = document.getElementById("input-element")
const inputBtn = document.getElementById("input-btn")
const ulElement = document.getElementById("ul-element")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


// Check if there is any data in local storage and if it is there then parse it as JS array
const tabsFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))

// Check if tabsFromLocalStorage is truthy and if so then sey myTabs to its value and call renderTabs()
if(tabsFromLocalStorage) {
    myLinks = tabsFromLocalStorage
    render(myLinks)
}

// When double clicked on delete button, clear local storage, myTabs and the DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLinks = []
    render(myLinks)
})


tabBtn.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id

        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks)) 
        render(myLinks)
    })

})


inputBtn.addEventListener("click", function() {
    myLinks.push(inputElement.value)
    inputElement.value = ""

    // localStorage stores only string, so we use first JSON.stringify() to convert our array to 
    // string and then use JSON.parse() to store that string as proper array again 
    localStorage.setItem("myLinks", JSON.stringify(myLinks)) 

    render(myLinks) 
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