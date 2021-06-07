const writeFile = (response) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css"/>
    <title>Generated Website</title>
</head>
<body>
    <header>
        <h1>${response.name}</h1>
    </header>
    <h2>
        <p>${response.location}</p>
    </h2>
        <p>${response.bio}</p>
    <footer>
    <p>My Linkedin profile can be found <a href="${response.linkedin}">here.</a></p>
    <p>My Github: <a href="https://github.com/${response.github}"> ${response.github}</a></p>
    <p>My E-mail: <a href="${response.email}"> ${response.email}</a></p>
    </footer>
</body>
</html>`

module.exports = {
    writeFile
  }