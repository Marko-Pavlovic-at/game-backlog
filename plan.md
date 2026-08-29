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
    - use CSS Grid 
    - cards should be next to each other 3 top 2 bottom


    notes: 
    i have to look up foreach syntax

    the laptop keyboard is weird need to fix it <> is fn + L but fn + shift + L is also screenshot so i cant do > in js since its the same

i need a container for each card otherwise i cant style it in css properly

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