(function($){

   var currentPath = null;
   var options = {
        "bProcessing": false,
        "bServerSide": false,
        "bPaginate": false,
        "bAutoWidth": false,
        "searching": false,
        "info": false,
        "ordering": false,
         "scrollCollapse": true,
        "fnCreatedRow" :  function( nRow, aData, iDataIndex ) {
          if (!aData.IsDirectory) return;
          var path = aData.Path;
          $(nRow).bind("click", function(e){
             $.get('/files?path='+ path).then(function(data){
              table.fnClearTable();
              table.fnAddData(data);
              currentPath = path;
            });
            e.preventDefault();
          });
        },
        "aoColumns": [
          { "sTitle": "", "mData": null, "bSortable": false, "sClass": "head0", "sWidth": "55px",
            "render": function (data, type, row, meta) {
              if (data.IsDirectory) {
                return "<a href='#' target='_blank'>&nbsp;" + data.Name +"</a>";
              } else {
                  return "<a href='/" + data.Path + "' target='_blank'>&nbsp;" + data.Name +"</a>";
              }
            }
          }
        ]
   };

  var table = $(".linksholder").dataTable(options);

  $.get('/files').then(function(data){
      table.fnClearTable();
      table.fnAddData(data);
  });

})(jQuery);
