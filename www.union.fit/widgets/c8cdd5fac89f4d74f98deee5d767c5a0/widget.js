!function(){class e{constructor(){this.widgets=document.querySelectorAll(".union-widget"),this.refresh()}refresh(){for(let e of this.widgets){e.innerHTML='<p style="margin-bottom: 0; padding: 15px;">Loading...</p>';const t={event_category_id:e.dataset.eventCategoryId,days:e.dataset.days,limit:e.dataset.limit,widget_type:e.dataset.widgetType};let n=Object.keys(t).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e])).join("&");fetch(`https://www.union.fit/widgets/c8cdd5fac89f4d74f98deee5d767c5a0/widget.html?${n}`).then(e=>e.text()).then(t=>{e.innerHTML=t})}}}"undefined"==typeof unionWidget&&(window.unionWidget=new e)}();