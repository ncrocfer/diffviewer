<!DOCTYPE html>
<html>
<head>
	<meta charset=utf-8 />
	<title></title>
	<link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url(); ?>assets/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url(); ?>assets/css/main.css" />
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container main-container">

		<div class="navbar navbar-fixed-top" style="opacity: 1;">
            <div class="navbar-inner">
                <div class="container">
                    <a class="brand scroller" data-section="body" href="<?php echo base_url(); ?>">
                        <img src="http://opendiff-local.fr/assets/img/logo.png" alt="logo">
                    </a>
                </div>
            </div>
        </div>

        <?php if(!$show_diff): ?>

			<div class="hero-unit">
		    	<h3>DiffViewer : Online Diff Viewer</h3>
		    	<p>This online tool allows you to quickly see the differences between two versions of a file. It uses <a href="">CodeIgniter</a>, <a href="">JQuery</a>, <a href="">php-diff</a> and <a href="">Twitter Bootstrap</a>.</p>
			</div>

		<?php else: ?>

			<h3>Result :</h3>
			<?php echo $render; ?>

		<?php endif; ?>

		
			
		

		<div class="row">
			<?php echo form_open(); ?>
			<div class="span6">
				<p class="text-center editor-title">Version 1</p>
				<textarea rows="10" class="editor" name="editor1"></textarea>
			</div>

			<div class="span6">
				<p class="text-center editor-title">Version 2</p>
				<textarea rows="10" class="editor" name="editor2"></textarea>
			</div>

			<span class="span12">
				<p class="button text-center">
					<input type="submit" class="btn btn-info" value="Compare" />
				</p>
			</span>
			<?php echo form_close(); ?>

		</div>

</div>
</body>
</html>