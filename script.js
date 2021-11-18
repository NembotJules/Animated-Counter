const counters = document.querySelectorAll('.counter'); // Collecting the all the elements with the class of counter
const speed = 200; 

counters.forEach(counter=> { // Applying to each element with the class of counter
    const updateCount = ()=> { // The function which will update each counter
        const target = +counter.getAttribute('data-target'); // Getting the value of the attribute data-target, and convert it to a number
        const count  = +counter.innerText // Getting the counter innerText(0 string) and converting it to a number
        const inc = target / speed; // The incrementation constant.
        if( count < target) {
            counter.innerText = count + inc; // Incrementing the counter progressively to the final target value; 
            setTimeout(updateCount, 1); // Calling the function updateCount each 1ms time, in order to act like a loop; 
        }
        else {
            count.innerText = target; // If the count is greater or equal to the target we simply set the count value to the target.
        }
    }
    updateCount();
})

