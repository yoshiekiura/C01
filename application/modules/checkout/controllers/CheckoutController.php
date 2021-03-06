<?php
use Carbon\Carbon;
class CheckoutController extends AuthController
{
  public function __construct()
  {
    parent::__construct();
    $this->load->library([
      'rajaongkir', 'cart'
    ]);
  }
  public function index()
  {
    $provinces = json_decode($this->rajaongkir->province());
    $data['provinces'] = $provinces;
    $data['page'] = "category-page";
    $data['content'] = "checkout/checkout_v";
    $this->template->get_main($data);
  }
  public function postAddress($aecodeid)
  {
    
    $address = new Address;
    $address->aecodeid = $aecodeid;
    $address->province_id = $this->input->post('province_id');
    $address->city_id = $this->input->post('city_id');

    $address->address = $this->input->post('address');
    $address->receiver_name = $this->input->post('receiver_name');
    $address->telphone_number = $this->input->post('telphone_number');
    $address->save();
    $this->session->set_flashdata('success' , 'Berhasil menambahkan Alamat !');
    if($this->input->post('redirect')){
      redirect($this->input->post('redirect'));
    }else{
      redirect('/checkout');
    }
  }
  public function postCheckout($company = "AFX")
  {

    $date = date('Ymdhis', time());
    $orders = Order::orderBy('id', 'DECS')
              ->take(1)
              ->get();
    $new_id = 0;
    foreach ($orders as $key => $order) {
        # code...
        $last_id = $order->id;
        $new_id  = $last_id + 1;
    }
    $invoice = $company . $date . $new_id;
    $cek = Order::where('order_number', $invoice)->get();

    // $cek     = $this->db->get_where('master_invoice', array('invoice' => $invoice));
    if (count($cek) > 0) {
        $this->postCheckout($company);
    } else {
        $order = new Order;
        $order->order_number = $invoice;
        $order->cmd = 9;
        $order->unix = rand(100, 299);
        $order->order_date = Carbon::now();
        $order->expired_at = new Carbon('+10 Hour');
        $order->address_id = $this->input->post('selected_address');
        $order->amount = $this->input->post('harga_barang');
        $order->aecodeid = $this->session->userdata('aecodeid');
        $order->comment = $this->input->post('catatan_penjual');
        $order->shipping_amount = $this->input->post('ongkir');
        $order->save();

        $order_id = $order->id;
        $invoice_id = $order->order_number;

        foreach ($this->cart->contents() as $key => $cart) {
          $detail = new OrderDetails;
          $detail->orders_id = $order_id;
          $detail->prod_id = $cart['id'];
          $detail->price = $cart['price'];
          $detail->quantity = $cart['qty'];
          $detail->save();
        }
        $this->load->module('mod_ecommerce_invoice/email');
        $body = $this->email->get_email_invoice($invoice_id);
        $email = $this->session->userdata('email');
        modules::run('mailer/send', $email , "Mohon lengkapi pembayaran anda !" , $body);
        redirect('payment/purchases/new/?invoice_id=' . $invoice_id . '&user_step=choose_payment');
    }
  }
}
