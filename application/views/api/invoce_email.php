<div style="font-family:HelveticaNeue-Light,Arial,sans-serif;background-color:#eeeeee">
    <table align="center" bgcolor="#eeeeee" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
                <td>
                    <table align="center" bgcolor="#eeeeee" border="0" cellpadding="0" cellspacing="0" style="width: 750px!important; text-align: center;" width="750px">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" bgcolor="#eeeeee" border="0" cellpadding="0" cellspacing="0" width="690">
                                        <tbody>
                                            <tr>
                                                <td align="center" bgcolor="#eeeeee" border="0" cellpadding="0" cellspacing="0" colspan="3" height="80" style="padding:0;margin:0;font-size:0;line-height:0">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="690">
                                                        <tbody>
                                                            <tr>
                                                                <td width="30">
                                                                </td>
                                                                <td align="left" style="padding:0;margin:0;font-size:0;line-height:0" valign="middle">
                                                                    <a href="<?php echo base_url(); ?>" target="_blank">
                                                                        <img alt="<?php echo $this->config->item('APP_NAME'); ?>" height="50px" src="/assets/images/logo/logo-agenda-transparent.png"/>
                                                                    </a>
                                                                </td>
                                                                <td width="30">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" colspan="3">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="630">
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="3" height="60">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="25">
                                                                </td>
                                                                <td align="center">
                                                                    <h1 style="font-family:HelveticaNeue-Light,arial,sans-serif;font-size:48px;color:#404040;line-height:48px;font-weight:bold;margin:0;padding:0">
                                                                        Silahkan Lengkapi Pembayaran Anda
                                                                    </h1>
                                                                </td>
                                                                <td width="25">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3" height="40">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" colspan="5">
                                                                    <p style="color:#404040;font-size:16px;line-height:24px;font-weight:lighter;padding:0;margin:0">
                                                                        Hai <strong><?php echo $data->client_aecode->name; ?></strong>,
                                                                        Terima kasih atas kepercayaanmu telah berbelanja di AgendaFX. Mohon segera lakukan pembayaran Sebesar. Silahkan lakukan Pembayaran pada Rekening AgendaFX dan lakukan konfirmasi
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="4">
                                                                    <div style="width:100%;text-align:center;margin:30px 0">
                                                                        <table align="center" cellpadding="0" cellspacing="0" style="font-family:HelveticaNeue-Light,Arial,sans-serif;margin:0 auto;padding:0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" style="margin:0;text-align:center">
                                                                                        <a href="#" style="font-size:21px;line-height:22px;text-decoration:none;color:#ffffff;font-weight:bold;border-radius:2px;background-color:#0096d3;padding:14px 40px;display:block;letter-spacing:1.2px">
                                                                                            <?php
                                                                                            echo $data->amountWithRp;
                                                                                            ?>
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" colspan="5">
                                                                    <p style="color:#404040;font-size:15px;line-height:24px;font-weight:lighter;padding:0;margin:0">
                                                                      Mohon Untuk melakukan Transfer sesuai jumlah diatas, Tiga angka unix diatas <strong style="font-weight:bold;"><?php echo substr($data->unix_price, -3); ?></strong>, membantu proses pengecekan pembayaran
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr align="center">
                                                                <td colspan="3" height="30">
                                                                <br>
                                                                        <p style="color:#404040;font-size:16px;line-height:22px;font-weight:lighter;padding:0;margin:0">

                                                                            <?php echo $this->lang->line('invoice_desc2'); ?>
                                                                        </p>
                                                                    </br>
                                                                </td>
                                                            </tr>
                                                            <tr align="center">
                                                              <td colspan="3" height="30"><table width="200" align="center">
                                                                <tr align="center">
                                                                  <td colspan="2"><img src="<?php echo base_url() ?>assets/images/logo/logo-bca.gif"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td style="text-align: center">No rek</td>
                                                                  <td style="text-align: center">2218050455</td>
                                                                </tr>
                                                                <tr>
                                                                  <td style="text-align: center">A / N</td>
                                                                  <td style="text-align: center">Roby Martiarto</td>
                                                                </tr>
                                                              </table></td>
                                                            </tr>
                                                            <tr align="center">
                                                              <td colspan="3" height="30"><table align="center" cellpadding="0" cellspacing="0" style="font-family:HelveticaNeue-Light,Arial,sans-serif;margin:0 auto;padding:0">
                                                                <tbody>
                                                                  <tr>
                                                                    <td align="center" style="margin:0;text-align:center"><a href="<?php echo base_url() ?>payment/transactions" style="font-size:21px;line-height:22px;text-decoration:none;color:#ffffff;font-weight:bold;border-radius:2px;background-color:#0096d3;padding:14px 40px;display:block;letter-spacing:1.2px"> Konfirmasi Pembayaran </a></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table align="center" bgcolor="#eeeeee" border="0" cellpadding="0" cellspacing="0" style="width:750px!important" width="750px">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table align="center" bgcolor="#eeeeee" border="0" cellpadding="0" cellspacing="0" width="630">
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="2" height="30">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" width="360">
                                                                    <div style="color:#a3a3a3;font-size:12px;line-height:12px;padding:0;margin:0">
                                                                        © <?php echo date('Y')." ".$this->config->item('APP_TITLE')?> . All rights reserved.
                                                                    </div>
                                                                    <div style="line-height:5px;padding:0;margin:0">
                                                                    </div>
                                                                    <div style="color:#a3a3a3;font-size:12px;line-height:12px;padding:0;margin:0">
                                                                        Made in Indonesia
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2" height="5">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</div>
