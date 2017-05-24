<?php

include 'class_connect.php';

$conn = new Connection('69.195.124.53','clsubdom_multisite','clsubdom_dbuser');
$conn1 = $conn->connect();
//var_dump($conn1);


$client_url = $_GET['newurl'];
preg_match('/http:/', $client_url, $matches);
if($matches) :
	$start = strpos($client_url,'http://');
	$client_url = substr($client_url,7);
	$client_url = preg_replace('{/$}', '',$client_url);
endif;
$client_url = rtrim($client_url,"/");
$multisite = array();
$sql = "SELECT * FROM wp_blogs";
$result = $conn1->query($sql);

$i=0;
while($row = $result->fetch_assoc()){
	$multisite[$i]['url'] = $row['domain'];
	$multisite[$i]['registered'] = $row['registered'];
	$multisite[$i]['last'] = $row['last_updated'];
	$multisite[$i]['location'] = "cl-subdomains.com";
	$multisite[$i]['blog_id'] = $row['blog_id'];
	$i++;
}
$count = sizeof($multisite);

$bft_conn1 = new Connection('162.144.22.62','braftons_multisite','braftons_wpusr');
$bft_conn = $bft_conn1->connect();

$resp = $bft_conn->query($sql);
$z = $count;
while($rw = $resp->fetch_assoc()){
	$multisite[$z]['url'] = $rw['domain'];
	$multisite[$z]['registered'] = $rw['registered'];
	$multisite[$z]['last'] = $rw['last_updated'];
	$multisite[$z]['location'] = "brafton-subdomains.com";
	$multisite[$z]['blog_id'] = $rw['blog_id'];
	$z++;
}

$found = array('success'=>false, 'url'=>'', 'location'=>'', 'registered'=>'','last'=>'','blog_id'=>'');
foreach($multisite as $site) {
	if($client_url==$site['url']) {
		$found['success']=true;
		$found['url']=$site['url'];
		$found['location']=$site['location'];
		$found['registered']=$site['registered'];
		$found['last']=$site['last'];
		$found['blog_id']=$site['blog_id'];
	}
}

header('Content-Type: application/json');
echo json_encode($found,JSON_FORCE_OBJECT);


?>