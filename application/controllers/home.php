<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->helper('form');

		require_once APPPATH . 'libraries/php-diff/Diff.php';
		require_once APPPATH . 'libraries/php-diff/Diff/Renderer/Html/Inline.php';
	}

	public function index() {
		
		$editor1 = $this->input->post('editor1');
		$editor2 = $this->input->post('editor2');

		if(!$editor1 OR !$editor2) {
			$data = array(
				'show_diff' => False
			);
		} else {
			$a = explode("\n", $editor1);
			$b = explode("\n", $editor2);
			$diff = new Diff($a, $b, array());
			$renderer = new Diff_Renderer_Html_Inline;
			$render = $diff->Render($renderer);

			$data = array(
				'show_diff' => True,
				'render' => $render
			);
		}

		$this->load->view('home', $data);	
		

	}

}
