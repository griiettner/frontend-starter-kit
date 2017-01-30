
;(function($, window, document, undefined) {

  "use strict";

  $('#exportExcel').on('click', function () {
    $table.tableExport({
      type:'excel'
    });
  });
})( jQuery, window, document );