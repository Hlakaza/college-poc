var DatatableTranslationDemo=function(){var e=function(){$(".m_datatable").mDatatable({data:{type:"remote",source:{read:{url:"http://keenthemes.com/College/preview/inc/api/datatables/demos/default.php"}},pageSize:10,saveState:{cookie:!0,webstorage:!0},serverPaging:!0,serverFiltering:!1,serverSorting:!0},layout:{theme:"default",class:"",scroll:!1,height:null,footer:!1},sortable:!0,pagination:!0,search:{input:$("#generalSearch")},columns:[{field:"RecordID",title:"#",sortable:!1,width:40,selector:{class:"m-checkbox--solid m-checkbox--brand"}},{field:"OrderID",title:"Order ID",sortable:"asc",filterable:!1,width:150},{field:"ShipCity",title:"Ship City"},{field:"ShipName",title:"Ship Name",width:150},{field:"CompanyEmail",title:"Email",width:150},{field:"CompanyAgent",title:"Agent"},{field:"Department",title:"Department"},{field:"ShipDate",title:"Ship Date"}],translate:{records:{processing:"Cargando...",noRecords:"No se encontrarón archivos"},toolbar:{pagination:{items:{default:{first:"Primero",prev:"Anterior",next:"Siguiente",last:"Último",more:"Más páginas",input:"Número de página",select:"Seleccionar tamaño de página"},info:"Viendo {{start}} - {{end}} de {{total}} registros"}}}}})};return{init:function(){e()}}}();jQuery(document).ready(function(){DatatableTranslationDemo.init()});