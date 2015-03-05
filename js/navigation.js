                function toogle_div (id) {
			// body...
			var divEle= document.getElementById(id);
			if( divEle.style.display === 'none'){
				divEle.style.display='block';
				divEle.style.transitionProperty="display";
				divEle.style.transitionDuration="30s";
				divEle.style.transitionTimingFunction="ease-out";
			}else{
				divEle.style.display='none';
                                divEle.style.transitionProperty="display";
				divEle.style.transitionDuration="30s";
				divEle.style.transitionTimingFunction="ease-out";
			}
		}
                function toogle_div1 (x,y,z) {
			// body...
			var divEle1= document.getElementById(x);
                        var divEle2= document.getElementById(y);
                        var image= document.querySelector(z);
			if( divEle1.style.display === 'none' ||  divEle2.style.display === 'none'){
				divEle1.style.display='block';
                                divEle2.style.display='block';
                                image.src= 'image/pinus.png';
			}else{
				divEle1.style.display='none';
                                divEle2.style.display='none';
                                image.src= 'image/download.png';
			}
		}
                
                function toogle_div2 (x,y) {
                    // body...
                    var divEle= document.getElementById(x);
                    var image= document.querySelector(y);
                    if( divEle.style.display === 'none'){
                        divEle.style.display='block';
                        image.src= 'image/pinus.png';
                    }else{
                        divEle.style.display='none';
                        image.src= 'image/download.png';
                    }
                }