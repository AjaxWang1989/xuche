<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use app\common\model\Category as CategoryModel;
use fast\Tree;
use think\Db;
/**
 * 分类管理
 *
 * @icon fa fa-list
 * @remark 用于统一管理网站的所有分类,分类可进行无限级分类
 */
class Category extends Backend
{

    protected $model = null;
    protected $categorylist = [];
    protected $noNeedRight = ['selectpage'];

    public function _initialize()
    {
        parent::_initialize();
        $this->request->filter(['strip_tags']);
        $this->model = model('app\common\model\Category');

        $tree = Tree::instance();
        $tree->init(collection($this->model->order('weigh desc,id desc')->select())->toArray(), 'pid');
        $this->categorylist = $tree->getTreeList($tree->getTreeArray(0), 'name');
        $categorydata = [0 => ['type' => 'all', 'name' => __('None')]];
        foreach ($this->categorylist as $k => $v)
        {
            $categorydata[$v['id']] = $v;
        }
        $this->view->assign("flagList", $this->model->getFlagList());
        $this->view->assign("typeList", CategoryModel::getTypeList());
        $this->view->assign("parentList", $categorydata);
    }

    /**
     * 查看
     */
    public function index()
    {
        if ($this->request->isAjax())
        {
            $type = $this->request->request("type");
            $pid = $this->request->request("pid");
            $status = $this->request->request("status");
            $name = $this->request->request("name");
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $where = [];
            if($pid){
              $where['pid'] = ['=',$pid];
            }
            if($status){
              $where['status'] = ['=',$status];
            }
            if($type){
              $where['type'] = $type;
            }
            if($name){
              $where['name'] = ['like',"%{$name}%"];
            }
            $total = $this->model
                    ->where($where)
                    ->order($sort, $order)
                    ->count();

            $list = $this->model
                    ->where($where)
                    ->order($sort, $order)
                    ->limit($offset, $limit)
                    ->select();
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }

    /**
     * Selectpage搜索
     *
     * @internal
     */
    public function selectpage()
    {
        return parent::selectpage();
    }

    public function edit($ids = NULL)
    {
      $this->request->filter([]);
      return parent::edit($ids);
    }

    public function add()
    {
      $this->request->filter([]);
      return parent::add();
    }

}
