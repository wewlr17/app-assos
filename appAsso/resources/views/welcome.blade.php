<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>

    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="app"></div>

    

    <script>
        // import "/js/app.js"
        const associations = <?php echo json_encode($associations); ?>;
        const posts = <?php echo json_encode($posts); ?>;
    
    </script>
    <script src="/js/app.js"></script>
</body>
</html>