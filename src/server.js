// Servidor
const express = require("express");
const server = express();

const {
	pageLanding,
	pageStudy,
	pageGiveClasses,
	saveClasses,
} = require("./pages");

const nunjucks = require("nunjucks");

// configurar nunjucks (template engine)
nunjucks.configure("src/views", {
	express: server,
	noCache: true,
});

// inicio e configuracao do servidor
server
	.use(express.urlencoded({ extended: true })) // receber os dados do req.body
	.use(express.static("public")) // configurar arquivos estáticos (css, scripts, imagens)
	.get("/", pageLanding) // rotas da aplicação
	.get("/study", pageStudy)
	.get("/give-classes", pageGiveClasses)
	.post("/save-classes", saveClasses)
	// start do servidor
	.listen(5500);
