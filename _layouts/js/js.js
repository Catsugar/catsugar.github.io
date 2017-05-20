var P2 = window.P2 ||{};
P2.Organ = function(){
document.onreadystatechange = Organadvert;
    function Organadvert() {
        var ad = document.getElementsByClassName("myItem");
            for(var i=0;i<ad.length;i++)
            {
                var adid = ad[i].id = 'ad'+i;
                if(adid)
                {
                    var nid = document.getElementById(adid);
                    nid.onmouseover=function () {
                        for (var i = 0; i < ad.length; i++) {
                            var tfc  = this.lastElementChild;
                            this.style.background = '#fff'
                            tfc.style.transform = 'rotate(360deg)';
                            tfc.style.transition = '1s';
                            fadein(tfc);
                            var tfl  = this.firstElementChild;
                            tfl.style.transform = 'rotate(360deg)';
                            tfl.style.transition = '1s';
                    }
                }
                    nid.onmouseout=function() {
                        for (var i = 0; i < ad.length; i++) {
                            var tfc  = this.lastElementChild;
                            tfc.display = 'none';
                        	ad[i].style.background = 'rgba(224,224,224,0.6)';
                        	tfc.style.transform = 'rotate(0deg)';
                        	fadeout(tfc);
                            var tfl  = this.firstElementChild;
                            tfl.style.transform = 'rotate(0deg)';
                        }
                    }
                }
            }
    }
}

//fadein
function fadein(el)
{
	el.style.opacity = 0;
	el.style.display = "";
	var last = +new Date();
	var tick = function()
	{
		el.style.opacity = +el.style.opacity + (new Date() - last);
		last = +new Date();
		if(+el.style.opacity >0)
		{
			(window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick,16));
		}
	}
}

// fadeout
function fadeout(el)
{
	el.style.opacity = 1;
	el.style.display = "";
	var last = +new Date();
	var tick = function()
	{
		el.style.opacity = +el.style.opacity + (new Date() - last);
		last = +new Date();
		if(+el.style.opacity <1)
		{
			(window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick,16));
		}
	}
}
P2.Organ();