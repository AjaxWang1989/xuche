define(['jquery', 'bootstrap', 'backend', 'table', 'form','template'], function ($, undefined, Backend, Table, Form,Template) {
  var ptype = '';
  var Controller = {
    index: function () {
      // 初始化表格参数配置
      Table.api.init({
        extend: {
          index_url: 'category/index',
          add_url: 'category/add',
          edit_url: 'category/edit',
          del_url: 'category/del',
          multi_url: 'category/multi',
          dragsort_url: '',
          table: 'category',
        }
      });


      var table = $("#table");
      var tableOptions = {
        url: $.fn.bootstrapTable.defaults.extend.index_url,
        escape: false,
        pk: 'id',
        sortName: 'weigh',
        search:false,
        commonSearch:false,
        columns: [
          [
            {checkbox: true},
            {field: 'id', title: __('Id'),operate: false},
            {field: 'name', title: __('Name')},
            {field: 'type_text', title: __('Type'),operate: false},
            {field: 'icon', title: __('图标'),operate: false,formatter:function (value, row, index) {
                return '<i class="' + value + '"></i>';
            }},
            {field: 'weigh', title: __('Weigh'),operate: false,},
            {field: 'status', title: __('Status'), formatter: Table.api.formatter.status,searchList:{'1': __('Normal'), '0': __('Hidden')}},
            {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Controller.api.formatter.operate}
          ]
        ]
      };
      // 初始化表格
      table.bootstrapTable(tableOptions);

      // 为表格绑定事件
      Table.api.bindevent(table);

      //绑定TAB事件
      $(document).on("click", "#query-search", function () {
        var options = table.bootstrapTable('getOptions');
        options.pageNumber = 1;
        options.queryParams = function (params) {
          return {
            status:$('#status').val(),
            pid:$('#pid').val(),
            name:$('#name').val(),
            type: $('#type').val(),
            sort: params.sort,
            order: params.order,
            offset: params.offset,
            limit: params.limit,
          };
        };
        table.bootstrapTable('refresh', {});
        return false;
      });

      $("#query-reset").click(function(){
        $("#status option:first").prop("selected", 'selected');
        $("#pid option:first").prop("selected", 'selected');
        table.bootstrapTable('refresh',{});
      });
      //必须默认触发shown.bs.tab事件
      // $('ul.nav-tabs li.active a[data-toggle="tab"]').trigger("shown.bs.tab");
      Controller.api.bindevent();
    },
    add: function () {
      Controller.api.bindevent();
    },
    edit: function () {
      Controller.api.bindevent();
    },
    api: {
      formatter: {
        //addtab的编辑页面
        operate: function (value, row, index) {
          var table = this.table;
          // 操作配置
          var options = table ? table.bootstrapTable('getOptions') : {};
          // 默认按钮组
          var buttons = $.extend([], this.buttons || []);
          if (options.extend.edit_url !== '') {
              buttons.push({name: 'edit', icon: 'fa fa-pencil', title: __('Edit'), classname: 'btn btn-xs btn-success btn-editone', url: options.extend.edit_url});
          }
          if (options.extend.del_url !== '' && row.id != 79 && row.id != 106 && row.id != 18 && row.id != 19 && row.id != 113 && row.id != 20) {
            buttons.push({name: 'del', icon: 'fa fa-trash', title: __('Del'), classname: 'btn btn-xs btn-danger btn-delone'});
          }
          return Table.api.buttonlink(this, buttons, value, row, index, 'operate');
        }
      },
      bindevent: function () {
        $(document).on("change", "#c-type", function () {
          $("#c-pid option[data-type='all']").prop("selected", true);
          $("#c-pid option").removeClass("hide");
          $("#c-pid option[data-type!='" + $(this).val() + "'][data-type!='all']").addClass("hide");
          $("#c-pid").selectpicker("refresh");
        });

        var iconlist = [];
        Form.api.bindevent($("form[role=form]"));
        $(document).on('click', ".btn-search-icon", function () {
            if (iconlist.length == 0) {
                $.get(Config.site.cdnurl + "/assets/libs/font-awesome/less/variables.less", function (ret) {
                    var exp = /fa-var-(.*):/ig;
                    var result;
                    while ((result = exp.exec(ret)) != null) {
                        iconlist.push(result[1]);
                    }
                    Layer.open({
                        type: 1,
                        area: ['460px', '300px'], //宽高
                        content: Template('chooseicontpl', {iconlist: iconlist})
                    });
                });
            } else {
                Layer.open({
                    type: 1,
                    area: ['460px', '300px'], //宽高
                    content: Template('chooseicontpl', {iconlist: iconlist})
                });
            }
        });
        $(document).on('click', '#chooseicon ul li', function () {
            $("input[name='row[icon]']").val('fa fa-' + $(this).data("font"));
            Layer.closeAll();
        });
        $(document).on('keyup', 'input.js-icon-search', function () {
            $("#chooseicon ul li").show();
            if ($(this).val() != '') {
                $("#chooseicon ul li:not([data-font*='" + $(this).val() + "'])").hide();
            }
        });
      }
    }
  };
  return Controller;
});
