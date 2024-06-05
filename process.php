<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
</head>
<body>
<h1>Result</h1>
    <?php
    if (isset($_POST['inputValue'])) {
        $inputValue = htmlspecialchars($_POST['inputValue'], ENT_QUOTES, 'UTF-8');
        echo "<p>You entered: $inputValue</p>";
    } else {
        echo "<p>No value entered.</p>";
    }
    ?>
    
</body>
</html>