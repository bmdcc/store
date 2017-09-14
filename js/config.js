$(function() {
	simpleCart({

	    // array representing the format and columns of the cart, see
	    // the cart columns documentation
	    cartColumns: [
	        { attr: "name" , label: "Name" },
	        { attr: "price" , label: "Price", view: 'currency' },
	        { view: "decrement" , label: false },
	        { attr: "quantity" , label: "Qty" },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "SubTotal", view: 'currency' },
	        { view: "remove" , text: "Remove" , label: false }
	    ],

	    // "div" or "table" - builds the cart as a table or collection of divs
	    cartStyle: "div",

	    // how simpleCart should checkout, see the checkout reference for more info
	    //checkout: {
	    //    type: "PayPal" ,
	    //    email: "admin@toysdownunder.com"
//},
		
		checkout: { 
			type: "SendForm" , 
			url: "https://docs.google.com/forms/d/e/1FAIpQLScWbu4dV3UZR3iu92RMSqk5TMPpEIFFx8-NJ2rPcuMMr5zeSg/viewform?usp=pp_url&entry.618891356&entry.548877670&entry.1323246545=$32.00" ,
	
			// http method for form, "POST" or "GET", default is "POST"
			method: "GET" , 
	
			// url to return to on successful checkout, default is null
			success: "success.html" , 
	
			// url to return to on cancelled checkout, default is null
			cancel: "cancel.html" ,
				
		}, 

	    // set the currency, see the currency reference for more info
	    currency: "AUD",

	    // collection of arbitrary data you may want to store with the cart,
	    // such as customer info
	    data: {},

	    // set the cart langauge (may be used for checkout)
	    language: "english-us",

	    // array of item fields that will not be sent to checkout
	    excludeFromCheckout: [
	    	'qty',
	    	'thumb'
	    ],

	    // custom function to add shipping cost
	    shippingCustom: null,

	    // flat rate shipping option
	    shippingFlatRate: 0,

	    // added shipping based on this value multiplied by the cart quantity
	    shippingQuantityRate: 0,

	    // added shipping based on this value multiplied by the cart subtotal
	    shippingTotalRate: 0,

	    // tax rate applied to cart subtotal
	    taxRate: 0,

	    // true if tax should be applied to shipping
	    taxShipping: false,

	    // event callbacks
	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
	    checkoutSuccess             : null,
	    checkoutFail                : null,
	    beforeCheckout              : null

	});

	simpleStore.init({

		// brand can be text or image URL
		brand : "BMDCC Store",

		// numder of products per row (accepts 1, 2 or 3)
		numColumns : 3,
		
		spreadsheetID: "19CKmCsNBOSVjQHE-SEpeo2KISfETdofEslQujaNNMgk",

		// name of JSON file, located in directory root
		JSONFile : "products.json"

	});

	simpleCart.bind( 'beforeCheckout' , function( data ){
		data["entry.1323246545"] = simpleCart.grandTotal();

		data["entry.103449169"] = "line1\nline2\nline3 and line3";
	  });

});
