<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Shop_model extends CI_Model
{
    public function __construct()
    {
        // Call the CI_Model constructor
        parent::__construct();
        $this->lang->load('message_lang', 'indonesia');
    }
    public function test()
    {
        return "Haha";
    }
    public function getData($table, $col, $where = array(1 => 1))
    {
        $this->db->select($col);
        $this->db->from($table);
        $this->db->where($where);
        $query = $this->db->get();
        return $query->result_array();
    }
    public function getDataPromo($select, $from, $join, $where)
    {
        $this->db->select($select);
        $this->db->from($from);
        foreach ($join as $key1 => $value1) {
            # code...
            $this->db->join($value1['table'], $value1['on'], $value1['type']);
        }
        foreach ($where as $key => $value) {
            $this->db->where($value['col'], $value['val']);
        }
        $query = $this->db->get();
        return $query->result_array();
    }
    public function getDataByCat($type = '')
    {
        $query = "SELECT
      master_product.`prod_name`,
      master_product.`prod_alias`,
      master_product.`prod_images`,
      master_product.`prod_price`,
      master_product_promo.`id`,
      master_promo.`promo_name`,
      master_promo.`promo_value`,
      master_cat.cat_name,
      CASE
        master_promo.`promo_name`
        WHEN '%'
        THEN (master_promo.`promo_value` * (master_product.`prod_price` / 100))
        ELSE prod_price
      END AS amount
    FROM
      master_product
      LEFT JOIN master_cat
        ON master_product.`id_cat` = master_cat.`id`
      LEFT JOIN master_product_promo
        ON master_product.`id` = master_product_promo.`id_product`
      LEFT JOIN master_promo
        ON master_product_promo.`id_promo` = master_promo.`id`
        WHERE master_cat.cat_name = '$type'";
        $hasil = $this->db->query($query);
        return $hasil->result_array();
    }
    public function getDataByProd($name = '')
    {
        $query = "SELECT
      master_product.`prod_name`,
      master_product.`prod_star`,
      master_product.`prod_images`,
      master_product.`prod_desc`,
      master_product.`prod_desc_long`,
      master_product.`prod_alias`,
      master_product.`prod_price`,
      master_product_promo.`id`,
      master_promo.`promo_name`,
      master_promo.`promo_value`,
      master_cat.cat_name,
      CASE
        master_promo.`promo_name`
        WHEN '%'
        THEN (master_promo.`promo_value` * (master_product.`prod_price` / 100))
        ELSE prod_price
      END AS amount
    FROM
      master_product
      LEFT JOIN master_cat
        ON master_product.`id_cat` = master_cat.`id`
      LEFT JOIN master_product_promo
        ON master_product.`id` = master_product_promo.`id_product`
      LEFT JOIN master_promo
        ON master_product_promo.`id_promo` = master_promo.`id`
        WHERE master_product.prod_name = '$name'";
        $hasil = $this->db->query($query);
        return $hasil->result_array();
    }
    public function insertData($table, $data)
    {
        $sql = $this->db->insert($table, $data);
        if ($sql) {
            # code...
            return true;
        } else {
            return false;
        }
    }
    public function cekPromo($promoname, $promo_value, $price)
    {
        switch ($promoname) {
            case null:
                # code...
                $amount = $price;
                break;
            case '%':
                # code...
                $amount = $price * $promo_value / 100;
                break;

            default:
                # code...
                $amount = $price;
                break;

        }
        return $amount;
    }
    public function deleteData($table, $where)
    {
        $sql = $this->db->delete($table, $where);
        if ($sql) {
            # code...
            return true;
        } else {
            return false;
        }
    }
}

/* End of file shop_model.php */
/* Location: ./application/models/shop_model.php */