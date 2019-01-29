
# Life Timeline Prototype

> An exploration into visualizing one's life from a lifetime perspective.


## Functionality

To learn about the goal and conclusion of this project, please see the [Medium article](TODO).


## Technical Decisions

* [Airtable](https://airtable.com)
    * **Analysis:** Airtable was selected as the data provider mainly because it was an interesting tool that I wanted 
    more experience with. It has a simple API and was a good choice for this project — wouldn't hesitate to select it 
    for another prototype in the future.
    * **Production:** A real database would be used in a productized version of this project.
* [D3.js](https://d3js.org)
    * **Analysis:** While many options were evaluated, this was chosen because it's the most common data visualization 
    library at the time of writing and there didn't appear to be any major downsides.
    * **Production:** I would want to work with D3 more extensively before settling on it for a production version. 
* [D3 Timeline](https://github.com/commodityvectors/d3-timeline)  
    * **Analysis:** This ended up being a good choice — the default behavior of the extension met the needs of this 
    project nicely. It was easy to convert from the Airtable API into the data point schema required.
    * **Production:** Rather than using an existing extension in a production version, I would probably start a version 
    from scratch to allow for more behavior configurability (this one only has 2 parameters).
* Bright splashy color choices were modeled after the fine folks at [Fabulous](https://thefabulous.co).
    * **Analysis:** Choosing a color pallete arbitrarily and sticking to it was a good choice for this project. It 
    prevented me from agonizing over a design decision that had little value for the goals of the project — wouldn't 
    hesitate to make a similar decision in a future project. Selecting garish colors might have had the added 
    subconscious benefit of constantly reinforcing that this was a prototype and arbitrary decisions for some choices 
    were entirely acceptable.
    * **Production:** While fun, these wouldn't be the color choices for a production version! 


## Contributors

- Creator: [Tyler Charlesworth](https://github.com/TylerCharlesworth)

Fonts are subject to their own [licenses](https://fonts.google.com/attribution). 

## Contributing

This project is not actively developed. Feel free to fork!
