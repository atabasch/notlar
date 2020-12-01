<?php
require_once(__DIR__."/config.php");

function getAll($sql){
	$db = new aswDB();
	$items = $db->getAll($sql);
	if(!$items){
		$fResult = null;
	}else{
		$fResult = array();
		foreach($items as $item){
			$fResult[] = $item;
		}
		
	}
	return [	'results' => $fResult	];
}

function getSingle($sql){
	$db = new aswDB();
	$item = $db->getSingle($sql);
	if(!$item){
		$fResult = null;
	}else{
		$fResult = $item;
	}
	return [	'result' => $fResult	];
}


$data = array();
$status = false;
$message = "Beklenmedik bir sorun oluştu";

if(!$_POST){
	$message = "Sayfa post edilmedi";
}else{

	$sql = post("sql");
	$single = post("single", false);
	$successMessage = post("message", "Veriler getirildi.");

	if(!$sql){
		$message = "Sql kodu gönderilmedi";
	}else{

		if($single==true){
			$data = array_merge(getSingle($sql));
		}else{
			$data = array_merge(getAll($sql));
		}
		$message = $successMessage;
		$status = true;

	}

}


$data["status"] = $status;
$data["message"] = $message;
echo json_encode($data);
?>