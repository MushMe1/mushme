<?php
header("Content-Type: application/json");

// Konfiguracja połączenia z bazą danych MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "grzyby_db";

// Nawiązanie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}

// Zapytanie do bazy danych
$sql = "SELECT nazwa, liczba_grzybow FROM wojewodztwa_grzyby";
$result = $conn->query($sql);

$data = [];

// Przekształcenie wyników zapytania w tablicę
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[$row['nazwa']] = (int)$row['liczba_grzybow'];
    }
}

// Zamknięcie połączenia
$conn->close();

// Zwrócenie danych jako JSON
echo json_encode($data);
?>
