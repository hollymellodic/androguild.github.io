var filtersConfig = {
        base_path: 'tablefilter/',
        paging: {
          results_per_page: [10]
        },
        state: {
          types: ['local_storage'],
		  grid_layout: true,
          filters: true,
          page_number: true,
          page_length: true,
          sort: false
        },
        alternate_rows: true,
        btn_reset: false,
        rows_counter: false,
        loader: {
          html: '<div id="lblMsg"></div>',
          css_class: 'myLoader'
        },
        status_bar: {
          target_id: 'lblMsg',
          css_class: 'myStatus'
        },
		col_0: 'select',
        col_1: 'select',
        col_2: 'none',
        col_types: [
            'string', 'string', 'string'
        ],
		col_widths: [
            '200px', '250px', '50px'
        ]
    };
    var tf = new TableFilter('demo', filtersConfig);
    tf.init();