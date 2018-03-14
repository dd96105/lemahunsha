<?php 
	$userArr = array("小明","小红");
	$name = $_GET['name']; 
	$isIn=in_array($name,$userArr);
	if($isIn){
		echo "用户名已经被使用了,不好意思哦";
	}else{
		echo "尊敬的".$name."欢迎你！";
	}
 ?>