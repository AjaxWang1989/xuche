define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

  var Controller = {
    index: function () {
      // 初始化表格参数配置
      Table.api.init({
        extend: {
          index_url: 'article/index',
          add_url: 'article/add',
          edit_url: 'article/edit',
          del_url: 'article/del',
          multi_url: 'article/multi',
          table: 'article',
        }
      });

      var table = $("#table");

      // 初始化表格
      table.bootstrapTable({
        url: $.fn.bootstrapTable.defaults.extend.index_url,
        pk: 'id',
        sortName: 'weigh',
        search:false,
        columns: [
          [
            {checkbox: true},
            {field: 'id', title: __('Id'),operate:false},
            {field: 'category_id', title: __('Category_id'),searchList:categoryObjList,formatter:function(value){
              return categoryObjList[value];
            }},
            {field: 'title', title: __('Title'),operate: 'LIKE %...%'},
            {field: 'image', title: __('Image'),operate:false,formatter: Table.api.formatter.limg},
            {field: 'description', title: __('Description'), operate:false},
            {field: 'views', title: __('Views'), operate:false},
            {field: 'publishtime', title: __('Publishtime'), operate:'RANGE', addclass:'datetimerange'},
            {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
            {field: 'status', title: __('Status'), visible:false, searchList: {"normal":__('normal'),"hidden":__('hidden')}},
            {field: 'status_text', title: __('Status'), operate:false},
            {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
          ]
        ]
      });

      // 为表格绑定事件
      Table.api.bindevent(table);
    },
    add: function () {
      Controller.api.bindevent();
    },
    edit: function () {
      Controller.api.bindevent();
    },
    api: {
      bindevent: function () {
        Form.api.bindevent($("form[role=form]"));
      }
    }
  };
  return Controller;
});
