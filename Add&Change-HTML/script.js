//---------- Example 1 <h1> ----------

// Step 1: Create the Element
const newH1 = document.createElement("h1"); // .create Element use to create an element

// Step 2: Add Attributes/Properties
newH1.textContent = "I like Pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";


// Step 3: Append Element to DOM
document.body.prepend(newH1); // .append means adding an element to the end
                            // .prepend means adding an element to the beginning
                            
document.querySelector('#box1').append(newH1);

// const box2 = document.querySelector('#box2');
// document.body.insertBefore(newH1, box2); // Used to insert the newH1 before box2
                                    // .insertBefore(newElement, currentElement)




// Step 4: Remove HTML Element

document.querySelector('#box1').removeChild(newH1); // removes the element from the body
