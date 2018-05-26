<?php

namespace app\index\controller;

use app\common\controller\Frontend;
use think\Db;
use app\common\model\Category;
use app\common\model\Banner;
use app\common\model\Adviser;
use app\common\model\Article;
use app\common\model\Customer;
class Index extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function _initialize()
    {
        parent::_initialize();
    }

    public function index()
    {
        $img = Banner::where('category_id',0)->where('status',1)->select();
        $adviser = Adviser::order('weigh asc')->select();
        $newsObj = Article::where('status','normal')->where('publishtime','<',date('Y-m-d H:i:s'))
        ->field(['conetnt'],true)->order('publishtime desc')->limit(18)->select();
        $newsArray = collection($newsObj)->toArray();
        $news = array_chunk($newsArray,6);
        $customer = Customer::limit(12)->order('id desc')->select();
        $this->view->assign('newsCount', count($news));
        $this->view->assign('news', $news);
        $this->view->assign('customer', $customer);
        $this->view->assign('img', $img);
        $this->view->assign('adviser', $adviser);
        $this->view->assign('stitle', '首页');
        return $this->view->fetch();
    }

    public function news($id=0)
    {
      $list = Article::where('status','normal')->where('category_id',$id)->where('publishtime','<',date('Y-m-d H:i:s'))->with(['category' => function ($query) {
        $query->field('id,name,flag,type');
      }])->field(['content'],true)->order('createtime desc')->paginate(10);
      $cateOne = Category::where('id',$id)->find();
      $newList = Article::where('status','normal')->field(['title','id','publishtime'])->where('publishtime','<',date('Y-m-d H:i:s'))->order('publishtime desc')->limit(9)->select();
      $img = Banner::where('category_id',$id)->where('status',1)->select();
      $this->view->assign('img', $img);
      $this->view->assign('newList',$newList);
      $this->view->assign('lists',$list);
      $this->view->assign('page',$list->render());
      $this->view->assign('total',$list->total());
      $this->view->assign('cateOne',$cateOne);
      $this->view->assign('stitle', $cateOne->name);
      return $this->view->fetch();
    }


    public function detail($id=0)
    {
      $detail = Article::where('id',$id)->find();
      $detail->category;
      $before = Article::where('id','<',$id)->field(['title','id'])->limit(1)->find();
      $next = Article::where('id','>',$id)->where('publishtime','<',date('Y-m-d H:i:s'))->field(['title','id'])->limit(1)->find();
      $newList = Article::field(['title','id','publishtime'])->order('publishtime desc')->limit(9)->select();
      Article::where('id',$id)->setInc('views');
      $this->view->assign('detail',$detail);
      $this->view->assign('before',$before);
      $this->view->assign('next',$next);
      $this->view->assign('newList',$newList);
      $this->view->assign('stitle', $detail->title);
      return $this->view->fetch();
    }

    public function info($id=0)
    {
      $detail = Category::where('id',$id)->find();
      $nextCate = Category::where('pid',$id)->field('name,id,type,flag')->select();
      $blCate = Category::where('pid',$detail->pid)->field('name,id,type,flag')->select();
      $img = Banner::where('category_id',$id)->where('status',1)->select();
      $this->view->assign('img', $img);
      $this->view->assign('detail',$detail);
      $this->view->assign('nextCate',$nextCate);
      $this->view->assign('blCate',$blCate);
      $this->view->assign('stitle', $detail->name);
      return $this->view->fetch();
    }

    public function in()
    {
      $data = [
        ['type'=>'service','name'=>'造价','status'=>'normal'],
        ['type'=>'service','name'=>'基本建设工程预算编制和审核','status'=>'normal'],
        ['type'=>'service','name'=>'基本建设工程结算审核','status'=>'normal'],
        ['type'=>'service','name'=>'基本建设工程决算审核','status'=>'normal'],
        ['type'=>'service','name'=>'编制可行性研究报告','status'=>'normal'],
        ['type'=>'service','name'=>'工程造价全过程控制','status'=>'normal'],
      ];
      //Db::table('fa_category')->insertAll($data);
      //Db::table('fa_category')->where('id','>',0)->update(['icon'=>'fa fa-th']);
      return 'test';
    }





}
