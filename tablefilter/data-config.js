var filtersConfig = {
	
		base_path:'tablefilter/',
		col_1: 'select',
		col_2: 'select',
		col_3: 'select',
		paging: true,
		paging_lenght: 5,
		alternate_rows: true,
		btn_reset: false,
		loader: true,
		status_bar: false,
		mark_active_columns: true,
		highlight_keywords: false,
		col_types: [
			'string', 'null', 'string', 'string'
		],
		
		col_widths: [
			'200px', '70px', '200px', '200px'
		],
		extensions:[{ name: 'sort' }]
		
	};
	
	var tf = new TableFilter( 'demo', filtersConfig);
	tf.init();