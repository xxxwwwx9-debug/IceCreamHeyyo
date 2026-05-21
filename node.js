const express = require("express");
const path = require("path");

const app = express();

// CSS / IMG / JS dosyaları için
app.use(express.static(__dirname));

// Ana sayfa
app.get("/", (req, res) => {
    res.sendFile(path.resolve("mainpage.html"));
});

// Gelato sayfaları
app.get("/visneGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/visneGelato.html"));
});

app.get("/cikolataGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/cikolataGelato.html"));
});

app.get("/cilekGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/cilekGelato.html"));
});

app.get("/vanilyaGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/vanilyaGelato.html"));
});

app.get("/maviGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/maviGelato.html"));
});

app.get("/fistikGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/fistikGelato.html"));
});

app.get("/karadutGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/karadutGelato.html"));
});

app.get("/karamelGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/karamelGelato.html"));
});

app.get("/mangoGelato", (req, res) => {
    res.sendFile(path.resolve("gelatoSites/mangoGelato.html"));
});

app.listen(3000, () => {
    console.log("Server çalışıyor: http://localhost:3000");
});