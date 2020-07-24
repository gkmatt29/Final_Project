
    d3.select("#exampleFormControlSelect2").addEventListener("change", populateTable(this.value))
    
    function DropDown(mood) {
      var pannel = d3.select("#dropdown")

      fetch(`https://spotifymoodml.herokuapp.com/mood/${mood}`).then(data=>data.json()).then(d=>{
          console.log(data)
          d.results.forEach(r=>{
          o = document.createElement("option")
          o.text = r
          pannel.add(o)
})

    function populateTable(song) {
    var pannel = d3.select("#table")
  ​
    fetch(`https://spotifymoodml.herokuapp.com/similar/${song}`).then(data=>data.json()).then(d=>{
        console.log(data)
        d.results.forEach(r=>{
        const row = pannel.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(r).forEach((val) => {
          let cell = row.append("td");
            cell.text(val);
          }
        );
      });
    })
    }

        })}