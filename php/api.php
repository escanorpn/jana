<?php   
//   require_once 'db.php';  
  require_once 'cors.php'; 
  $response = array(); 
  $response['nxt']=false;
  if(isset($_GET['apicall']))
  {  
  switch($_GET['apicall'])
  { 

case 'mail':  
{
  
  if($data){  
    $name = $data['fname'];
    $email = $data['email'];
    $pn = $data['pn'];
    $cname = $data['cname'];  
    $msg = $data['msg'];  

// if(1==1){ 
//     $name = 'fname';
//     $email = 'vector.pn@gmail.com';
//     $cname = 'cname';  
//     $msg = 'test msg sent at'. date("h:i:sa"); 

    $to = "info@lmgexhibitions.com"; // this is your Email address
    $from = $email; // this is the sender's Email address
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:" . "\n\n" . $msg. "\n\n"." Company name: ". $cname."\n\n"." Phone number: ". $pn."\n\n"." Email: ". $email;
    // $message2 = "Here is a copy of your message " . $name . "\n\n" . $msg;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    if(mail($to,$subject,$message,$headers)){
            
        $response['message'] = "Mail Sent. Thank you " . $name . ", we will contact you shortly.";  
        $response['fw']=true ;
    }
    
    
    // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
  
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    

    // $response['message'] = 'data received'.$name.$email.$cname.$msg;
    
  
} else{  
    $response['error'] = true;   
    $response['message'] = 'bad data';  
	// $response['user'] = $user; 
 }  
}     
  break;
  case 'quote';
  {
    
  if($data){  
  
    $ename = $data['ename'];
    $lc = $data['lc'];
    $ss = $data['ss'];  
    $s = $data['s']; 
    if($s==2){
      $urli = $data['urli'];
    }else{
      $urli="none";
    }
    $fname = $data['fname'];
    $pn = $data['pn'];
    $dt = $data['dt'];
    $email = $data['email'];
    $ar="none";
    if($data['ar']){
      $ar = $data['ar']; 
    }
    

// if(1==1){ 
//     $ename = 'fname';
//     $email = 'vector.pn@gmail.com';
//     $urli = 'cname';  
//     $pn = 'test msg sent at'. date("h:i:sa"); 

    $to = "vector.pn@gmail.com"; // this is your Email address
    $from = $email; // this is the sender's Email address
    $subject = "Form submission";
    $message =" Message from:" . $fname. "\n\n"." Phone number: ". $pn."\n\n"." Email: ". $email."\n\n"." Message: ". $ar;
    // $message2 = "Here is a copy of your message " . $name . "\n\n" . $msg;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    $response['fw']=false ;
    if(mail($to,$subject,$message,$headers)){
            
        $response['message'] = "Email Sent. Thank you " . $fname . ", we will contact you shortly.";  
        $response['fw']=true ;
    }else{
      $response['message'] = "Email not sent Sent please try later";  
    }
    
  
} else{  
    $response['error'] = true;   
    $response['message'] = 'bad data';  
	// $response['user'] = $user; 
 }  
  }
break;
default:   
 $response['error'] = true;   
 $response['message'] = 'Invalid Operation Called';  
}  
}  
else{  
 $response['error'] = true;   
 $response['message'] = 'Invalid API Call';  
}  
echo json_encode($response);  
function isTheseParametersAvailable($params){  
foreach($params as $param){  
 if(!isset($data[$param])){  
     return false;   
  }  
}  
return true;   
}  
?>  