// Create the dataset in the usual way
// Note the additional options you can specify for parsing the CSV file
var dataset = new recline.Model.Dataset({
  url: '{{page.root}}/demos/data/sample.csv',
  backend: 'csv',
  state: {
          gridOptions: {
            editable: true,
	    // Enable support for row add
            enabledAddRow: true,
	    // Enable support for row delete
	    enabledDelRow: true,
	    // Enable support for row Reoder 
	    enableReOrderRow:true,
            autoEdit: false,
            enableCellNavigation: true
          },
          columnsEditor: [
            { column: 'date', editor: Slick.Editors.Date },
            { column: 'title', editor: Slick.Editors.Text }
          ]
        }

});

// remember this is async so if you want to do something you need to call it in done method e.g.
// dataset.fetch.done(function(dataset) { console.log(dataset.recordCount)});
dataset.fetch();

// show the data for illustrations sake
var grid = new recline.View.SlickGrid({
  model: dataset
});
$('#my-online-csv').append(grid.el);


