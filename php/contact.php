<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobranie danych z formularza
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']); 
    $phone = htmlspecialchars($_POST['MobileNumber']); 
    $subject = htmlspecialchars($_POST['EmailSubject']);  
    $message = htmlspecialchars($_POST['YourMessage']);  
    // Adres e-mail, na który będą wysyłane wiadomości
    $to = "contact.mushme@gmail.com";
    
    // Nagłówki
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Treść wiadomości
    $emailBody = "Imię: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Telefon: $phone\n";
    $emailBody .= "Temat: $subject\n\n";
    $emailBody .= "Wiadomość:\n$message\n";
    
    // Wysyłanie wiadomości
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Wiadomość wysłana pomyślnie!";
    } else {
        echo "Błąd podczas wysyłania wiadomości. Spróbuj ponownie.";
    }
} else {
    echo "Nieprawidłowe żądanie.";
}
?>
