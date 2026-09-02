1. items on the page
    - Html Setup one Heading link css and js DONE
    - basic css Styling dark design only bg color and color in body DONE
    - js console.log something to see if it works DONE
    - first commit DONE
    - hardcode an Array with game objects shape is gamename status(done, playing, backlog) hours played DONE
    - build an empty container in html gameList and grab it in js DONE
    - loop thorugh array and append to the container DONE
    - make it look like a card with css DONE


2. 
    - use CSS Grid DONE
    - cards should be next to each other 3 top 2 bottom DONE

3. 
    - addGame Button top right corner DONE
    - build a form in HTML with Game Name Status and Hours Played and Add Button set it to display none DONE
    - use js to show it on button click DONE
    - hides it on close Button DONE
    - Style it DONE
    - Grab Dom Elements DONE
    - push values on button click DONE
    - use render in button DONE
    - clear inputs after submit DONE
    - reject empty inputs with error message DONE

4. Delete Logic
    - each card should be rendered with a delete button create it in JS give it a class set textcontent append it and style it DONE
    - the data needs ids declare them by date.now DONE
    - call the button inside render because it dosent exist outside of it  DONE
    - write a filter function that removes data from the array DONE
  
  5. Local Storage
    - Load at startup
    - Save on push

    notes: 
    i have to look up foreach syntax

    the laptop keyboard is weird need to fix it <> is fn + L but fn + shift + L is also screenshot so i cant do > in js since its the same

i need a container for each card otherwise i cant style it in css properly

---

CSS Grid

Display Grid makes childs grid items
grid-template-collumns defines columns 
repeat is value in columns so i dont have to tyoe 3 times fr grid-template-columns: repeat(2, 1fr);
auto fit is as many as fit
gap same as flex gap
minmax (200px, 1fr) each card is 200px and shares leftover space equally
repeat(auto-fit, minmax(200px, 1fr))

https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns

Tryouts: 

#gameList{
    /*css grid */
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
}

this already does what i wanted

#gameList{
    /*css grid */
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
}

i decided on this because it looks better.


#gameList{
    /*css grid */
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
}

this looks the best bit is weird since when i have full page on a big screen i only have one row but maybe i can use something instead of 200px or the 1fr

tried different fr but nothing changes
rem also not much different but settled for 15rem instead of 200px


---

i put the add button in the header in a container reason the sort buttons later go here as well

i want to research how to make a pop up modal

needs a pop up overlay
for some reason the overlay dosent cover the whole page
margin should be in child not parent when using flex otherwise body behaves weird
i added a modal div in the overlay div set the size and centered it with flexbox

now i hide the modal overlay

grab overlay and button in js 
declare showmodal as a function
call it on button click

modal shows up
add close button 


- honest note followed a tutorial https://dev.to/rajatamil/make-pop-up-modal-window-in-vanilla-javascript-4dd2


---
Local Storage

What should happen?

Page loads LS is empty nothing shows
when something is loaded into the Array i need setItem to save the new Array in LS meaning after push so in the submitbtn after the create card function
localstorage.set item has an key and a value the key is whatever i will use data and the value needs to be my Array as a string.
for that i will first create an variable and store the object as a string to later use it in the ls.setitem line.

what do i have now? 
- a variable at startup that saves the empty array
- i fill the array in submit button so the stringfied data should now live in LS

for some reason the object created is empty
i try to create it after the push

okay now it saves correctly now i need to retreive the date at startup

first i need to take the string and use parse

i did parse the string but i dont see it in the dom

no matter if i put it on startup or at render it dosent show up but its showed in ls

no matter what i try nothing works i feel like i am just one step away but i dont know what it is

i need to use the coverted data and push it to the array either in or before render

okay the push needs to stay after the innerhtml line in render just the data shape is wrong

The parsed value is Object Object