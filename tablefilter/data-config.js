var filtersConfig = {
	
    
        base_path: 'tablefilter/',
    
		
		col_1: 'none',
		col_2: 'select',
		col_3: 'select',
		alternate_rows: true,
		btn_reset: false,
		loader: true,
		status_bar: false,
		mark_active_columns: true,
		highlight_keywords: false,
		
	};
	
	var tf = new TableFilter( 'demo', filtersConfig);
	tf.init();