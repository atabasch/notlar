<?php 

class aswDB{

	protected $db;
	protected $sql;
	protected $sth;

	public function __construct(){
		try{
			$this->db = new PDO("mysql:host=localhost;dbname=androidrequest;charset=utf8", "root", "");
			$this->db->query("SET CHARACTER SET utf8");
		}catch(Exception $e){
			throw $e;
		}
	}



	public function exec($sql){
		return $this->db->exec($sql);
	}

	public function execute($sql){
		$this->sth = $this->db->prepare($sql);
		$this->sth->execute();
	}

	public function getSingle($sql){
		$this->execute($sql);
		return $this->sth->fetch(PDO::FETCH_OBJ);
	}

	public function getAll($sql){
		$this->execute($sql);
		return $this->sth->fetchAll(PDO::FETCH_OBJ);
	}

}//aswDB


function post($key, $default=null){
	return !isset($_POST[$key])? $default : $_POST[$key];
}


?>