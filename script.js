//In this project, when I click on some of the boxes, they will show some text


//Here I am using querySelectorAll to grab all the elements with the class of "box"
let box = document.querySelectorAll('.box');
//The querySelectorAll will create a node list of these elements, so if we want to create an array out of the node list, we must do the following:
let boxArray = Array.from('box');


//Now that we've created an array, we can use the forEach() method to go through each element in the array and add an event listener to it 
box.forEach(function (target) {
    target.addEventListener('click', function () {

        //This will either be "true" or "false"
        var answer = target.dataset.show;

        if (answer === 'true') {
            target.innerHTML = target.dataset.text; 
        }

    })
})