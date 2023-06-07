const data = [
	"one",
	{
		name: "two",
		nodes: [
			{
				name: "2.1",
				nodes: ["2.1a"]
			},
			"two point two",
		]
	}, 
	"three",
];




const arrToUl = (root, arr) => {
  	var ul = document.createElement('ul');
  	var li;

  	const appendItem = (item) => {
		li = document.createElement('li');
		li.appendChild(document.createTextNode(item));
		ul.appendChild(li);
	}
  
  	root.appendChild(ul);

  	arr.forEach((item) => {
	    if (Array.isArray(item)) {
	      arrToUl(li, item);
	      return;
	    } else if (typeof item === 'object') {
			var objMap = new Map(Object.entries(item));

			objMap.forEach((objItem, key) => {
			  	if (Array.isArray(objItem)) {
					arrToUl(li, objItem);
				} else {
					appendItem(objItem)
				}
			});
	    	return;
	    }
	    
	    appendItem(item)
  	});
}

var div = document.getElementById('list');

arrToUl(div, data);