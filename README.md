# 301-practice-4

## 1. In an express server application, what does dotenv do

*Storing configuration in the environment separate from code.*


## 2. What does the following code do:

function render( item ) {
  let markup = $('#item-template').html();
  let runTemplate = Handlebars.compile(markup);
  $("#list").append( runTemplate(markup) );
};

*it's do render the item using the handelbars into the html page.*


## 3. What is the difference between relative and absolute positioning in CSS? In which SMACSS file would you put a rule with positioning?

*position: relative places an element relative to its current position without changing the layout around it, whereas position: absolute places an element relative to its parent's position and changing the layout around it.*