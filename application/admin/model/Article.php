<?php

namespace app\admin\model;

use think\Model;

class Article extends Model
{
  // 表名
  protected $name = 'article';

  // 自动写入时间戳字段
  protected $autoWriteTimestamp = 'int';

  // 定义时间戳字段名
  protected $createTime = 'createtime';
  protected $updateTime = 'updatetime';

  // 追加属性
  protected $append = [
    'flag_text',
    'status_text'
  ];


  protected static function init()
  {
    self::afterInsert(function ($row) {
      $pk = $row->getPk();
      $row->getQuery()->where($pk, $row[$pk])->update(['weigh' => $row[$pk]]);
    });
  }


  public function getFlagList()
  {
    return ['hot' => __('Flag hot'),'index' => __('Flag index'),'recommend' => __('Flag recommend'),'new' => __('Flag new')];
  }

  public function getStatusList()
  {
    return ['normal' => __('Normal'),'hidden' => __('Hidden')];
  }


  public function getFlagTextAttr($value, $data)
  {
    $value = $value ? $value : $data['flag'];
    $valueArr = explode(',', $value);
    $list = $this->getFlagList();
    return implode(',', array_intersect_key($list, array_flip($valueArr)));
  }


  public function getStatusTextAttr($value, $data)
  {
    $value = $value ? $value : $data['status'];
    $list = $this->getStatusList();
    return isset($list[$value]) ? $list[$value] : '';
  }

  protected function setFlagAttr($value)
  {
    return is_array($value) ? implode(',', $value) : $value;
  }



  public function category()
  {
    return $this->belongsTo('\app\common\model\Category', 'category_id', 'id');
  }

}
