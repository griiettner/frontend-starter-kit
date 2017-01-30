/*
 *  jquery-bootstrap menu builder - v1.0.0
 *
 *  Made Paulo Griiettner
 *  Under MIT License
 */

;(function($, window, document, undefined) {

  "use strict";

  var pluginName = "bootMenuBuilder",
  defaults = {
    propertyName: "value"
  };

  function Plugin ( element, options ) {
    this.element = element;
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend( Plugin.prototype, {
    init: function() {
      this.setRow(this.settings.data);
    },
    setRow: function(data) {
      var _this = this;
      $.each(data, function(key, val) {
        $(_this.element).append(_this.getLi(
          val.name,
          val.name.split(' ').join('-').toLowerCase(),
          'child' in val ? _this.setChild(val.child) : '',
          val.link,
          val.icon
        ));
      });
    },
    setChild: function(data) {
      var _this = this,
      html = [];
      $.each(data, function(key, val) {
        html.push(_this.getLi(
          val.name,
          val.name.split(' ').join('-').toLowerCase(),
          'child' in val ? _this.setChild(val.child) : '',
          val.link,
          val.icon
        ));
      });

      return '<ul class="nav child_menu">' + html.join(' ') + '</ul>';
    },
    getLi: function(name, alias, child, link, icon) {
      var link = link !== undefined ? link : alias + '.html',
      icon = icon !== undefined ? '<i class="fa fa-' + icon + '"></i> ' : '';
      return '<li role="presentation"> \n' +
        '<a href="' + link + '">' + icon + name + '</a> \n' +
        child +
      '</li> \n';
    }
  });

  $.fn[ pluginName ] = function( options ) {
    return this.each( function() {
      if ( !$.data( this, "plugin_" + pluginName ) ) {
        $.data( this, "plugin_" +
          pluginName, new Plugin( this, options ) );
      }
    } );
  };
})(jQuery, window, document);

;(function($, window, document, undefined) {

  "use strict";

  $.fn.buildTable = function(params, options = {}) {
    var $table = {
      filters: params.filters !== null ? JSON.parse(params.filters) : {},
      fields: params.fields !== null ? (params.fields).trim() : [],
      jsonUrl: getJsonUrl(params.id, params.filters)
    }

    $table.columnsList = function(table) {
      var columnsSchema = {
        id: {
          field: 'id',
          checkbox: true,
          align: 'center',
          valign: 'middle'
        },
        date: {
          title: 'Registered',
          field: 'date',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        type: {
          title: 'Type',
          field: 'type',
          valign: 'middle',
          sortable: true,
          visible: false,
          class: 'field-type',
          filterControl: 'select',
          filterData: 'json:{"Client":"Client", "CVB":"CVB", "GSO / NSO": "GSO / NSO", "Hotelier": "Hotelier", "MSR / ME":"MSR / ME"}'
        },
        first_name: {
          title: 'First Name',
          field: 'first_name',
          valign: 'middle',
          sortable: true,
          visible: false,
          class: 'field-first_name',
          filterControl: 'input'
        },
        last_name: {
          title: 'Last Name',
          field: 'last_name',
          valign: 'middle',
          sortable: true,
          visible: false,
          class: 'field-last_name',
          filterControl: 'input'
        },
        badge_name: {
          title: 'Badge Name',
          field: 'badge_name',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        title: {
          title: 'Title',
          field: 'title',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        coordinator: {
          title: 'Coordinator',
          field: 'coordinator',
          valign: 'middle',
          align: 'center',
          sortable: true,
          visible: false,
          class: 'field-coordinator',
          filterControl: 'select',
          filterData: 'json:{"yes":"Yes", "no":"No"}'
        },
        coordinator_firstname: {
          title: 'Coordinator First Name',
          field: 'coordinator_firstname',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        coordinator_lastname: {
          title: 'Coordinator Last Name',
          field: 'coordinator_lastname',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        coordinator_phone: {
          title: 'Coordinator Phone',
          field: 'coordinator_phone',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        coordinator_email: {
          title: 'Coordinator e-mail',
          field: 'coordinator_email',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        participate_golf: {
          title: 'Golf',
          field: 'participate_golf',
          valign: 'middle',
          align: 'center',
          sortable: true,
          visible: false,
          class: 'field-participate_golf',
          filterControl: 'select',
          filterData: 'json:{"yes":"Yes", "no":"No"}'
        },
        participate_golf_club: {
          title: 'Golf Club',
          field: 'participate_golf_club',
          valign: 'middle',
          align: 'center',
          sortable: true,
          visiclass: 'field-participate_golf_club',ble: false,
          filterControl: 'select',
          filterData: 'json:{"yes":"Yes", "no":"No"}'
        },
        participate_golf_club_hand: {
          title: 'Golf Hand',
          field: 'participate_golf_club_hand',
          valign: 'middle',
          align: 'center',
          sortable: true,
          visible: false,
          class: 'field-participate_hand',
          filterControl: 'select',
          filterData: 'json:{"Right":"Right", "Left":"Left"}'
        },
        participate_pool: {
          title: 'Pool',
          field: 'participate_pool',
          valign: 'middle',
          align: 'center',
          sortable: true,
          visible: false,
          class: 'field-participate_pool',
          filterControl: 'select',
          filterData: 'json:{"yes":"Yes", "no":"No"}'
        },
        participate_dinner: {
          title: 'Dinner',
          field: 'participate_dinner',
          valign: 'middle',
          align: 'center',
          sortable: true,
          visible: false,
          class: 'field-participate_dinner',
          filterControl: 'select',
          filterData: 'json:{"yes":"Yes", "no":"No"}'
        },
        organization: {
          title: 'Organization',
          field: 'organization',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        address: {
          title: 'Address',
          field: 'address',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        city: {
          title: 'City',
          field: 'city',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        state: {
          title: 'State',
          field: 'state',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        zip: {
          title: 'Zip',
          field: 'zip',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        email: {
          title: 'e-mail',
          field: 'email',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        phone: {
          title: 'Phone',
          field: 'phone',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        product: {
          title: 'Itinerary',
          field: 'product',
          valign: 'middle',
          sortable: true,
          visible: false,
          class: 'field-product',
          filterControl: 'select',
          filterData: 'json:{"All Days":"All Days", "Thursday / Friday":"Thursday / Friday", "Wednesday Only":"Wednesday Only"}'
        },
        event: {
          title: 'Event',
          field: 'event',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        date_start: {
          title: 'Event Start',
          field: 'date_start',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        date_end: {
          title: 'Event End',
          field: 'date_end',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        price: {
          title: 'Price',
          field: 'price',
          valign: 'middle',
          sortable: true,
          formatter: function(value, row, rowIndex) {
            value = parseFloat(value || 0);

            return value.toFixed(2);
          },
          visible: false
        },
        code: {
          title: 'Registration ID',
          field: 'code',
          align: 'center',
          valign: 'middle',
          sortable: true,
          visible: false
        },
        payment_method: {
          title: 'Payment Method',
          field: 'payment_method',
          valign: 'middle',
          sortable: true,
          visible: false,
          class: 'field-payment_method',
          filterControl: 'select'
        },
      },

      columnsSchemaKeys = Object.keys(columnsSchema),
      columnsList = [];

      for (var columnIndex = 0; columnIndex < columnsSchemaKeys.length; columnIndex++) {
        var field = columnsSchemaKeys[columnIndex];
        var column = columnsSchema[field];

        if (table.fields.indexOf(field) >= 0 || table.fields.length === 0) {
          column.visible = true;
        }

        columnsList.push(column);
      }

      return columnsList;
    }($table);

    $table.tableOptions = {
      url: $table.jsonUrl,
      toolbar: '#toolbar',
      striped: true,
      showToggle: true,
      clickToSelect: true,
      minimumCountColumns: 2,
      pagination: true,
      idField: 'id',
      pageList: '[10, 25, 50, 100, ALL]',
      columns: $table.columnsList,
      onColumnSearch: function (field, text) {
        if(text !== "") {
          $table.filters[field] = text;
        } else {
          delete $table.filters[field];
        }

        $table.jsonUrl = getJsonUrl(params.id, $table.filters);
      },
      onLoadSuccess: function (e, name, args) {
        var i, $el;
        for (var filter in $table.filters) {
          $('.bootstrap-table-filter-control-' + filter).val($table.filters[filter]);
          i++;
        }
        $('#actionFormGroup').hide();
      }
    };

    $.each(options, function(key, option) {
      $table.tableOptions[key] = option;
    });

    $(this).bootstrapTable($table.tableOptions);
  }
})(jQuery, window, document);
