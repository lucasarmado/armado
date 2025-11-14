sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox"

], function(Controller, Fragment, MessageBox) {
    "use strict";

    return Controller.extend("locadora.sap.projetolocadorafiori.controller.NovaPagina3", {
        
        onInit: function() {

            var that = this;

            var ArrayLista = [
                {
                    titulo: "Three Imaginary Boys",
                    ano: 1979,
                    imagemAlbum: "https://upload.wikimedia.org/wikipedia/pt/7/78/The_Cure_-_Three_Imaginary_Boys.jpg"
                },
                {
                    titulo: "Seventeen Seconds",
                    ano: 1980,
                    imagemAlbum: "https://upload.wikimedia.org/wikipedia/pt/2/25/The_Cure_%E2%80%93_Seventeen_Seconds.jpg"
                },
                {
                    titulo: "Faith",
                    ano: 1981,
                    imagemAlbum: "https://upload.wikimedia.org/wikipedia/pt/9/92/The_Cure_%E2%80%93_Faith.jpg"
                },
                {
                    titulo: "Pornography",
                    ano: 1982,
                    imagemAlbum: "https://upload.wikimedia.org/wikipedia/pt/a/a4/The_Cure_%E2%80%93_Pornography.jpg"
                },
                {
                    titulo: "The Top",
                    ano: 1984,
                    imagemAlbum: "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e4/The_Cure_The_Top.jpg/250px-The_Cure_The_Top.jpg"
                },
                {
                    titulo: "The Head on the Door",
                    ano: 1985,
                    imagemAlbum: "https://upload.wikimedia.org/wikipedia/pt/2/2d/The_Cure_The_Head_on_the_Door.jpg"
                },
                {
                    titulo: "Kiss Me, Kiss Me, Kiss Me",
                    ano: 1987,
                    imagemAlbum: "https://m.media-amazon.com/images/I/71MzlteC-JL.jpg"
                },
                {
                    titulo: "Disintegration",
                    ano: 1989,
                    imagemAlbum: "https://m.media-amazon.com/images/I/61epkYq75pL._UF1000,1000_QL80_.jpg"
                },
                {
                    titulo: "Wish",
                    ano: 1992,
                    imagemAlbum: "https://m.media-amazon.com/images/I/71D-a-FGviL._UF1000,1000_QL80_.jpg"
                },
                {
                    titulo: "Wild Mood Swings",
                    ano: 1996,
                    imagemAlbum: "https://m.media-amazon.com/images/I/61qI0EgdGcL._UF1000,1000_QL80_.jpg"
                },
                {
                    titulo: "Bloodflowers",
                    ano: 2000,
                    imagemAlbum: "https://m.media-amazon.com/images/I/71O8TwEHnHL._UF1000,1000_QL80_.jpg"
                },
                {
                    titulo: "The Cure",
                    ano: 2004,
                    imagemAlbum: "https://m.media-amazon.com/images/I/71JcqoceqVL._UF1000,1000_QL80_.jpg"
                },
                {
                    titulo: "4:13 Dream",
                    ano: 2008,
                    imagemAlbum: "https://upload.wikimedia.org/wikipedia/en/e/e9/4.13_Dream_Cover.jpg"
                },
                {
                    titulo: "Songs of a Lost World",
                    ano: 2024,
                    imagemAlbum: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-czGLuM3-WWinvb5Y2rx9BAod9fKq329fg&s"
                }
                
            ];


            var oModeloLista = new sap.ui.model.json.JSONModel({
                data: ArrayLista
              });

            that.getView().setModel(oModeloLista, "modeloLista")
        },


        onNavBack: function() {
            window.history.go(-1);
        },

        onConfig: function(oEvent){
            var oButton1 = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialogConfig) {
                 this._pDialogConfig = Fragment.load({
                    id: oView.getId(),
                    name: "locadora.sap.projetolocadorafiori.view4.Config",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialogConfig.then(function(oDialog){
                oDialog.open();
            }.bind(this));
        },

        onVoltar3: function(){
            this._pDialogConfig.then(function(oDialog){
                oDialog.close();
            }.bind(this));
        },

        SwitchMode: function() {
            var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
            var sNewTheme = (sCurrentTheme === "sap_horizon_dark") ? "sap_horizon" : "sap_horizon_dark";
            this.applyTheme(sNewTheme);
            },
        
            applyTheme: function(sTheme) {
             var oCore = sap.ui.getCore();
             oCore.applyTheme(sTheme);

        },

        onAlbumSelected: function(oEvent){
            var ArrayItens = [];
            var that = this;
            var oSelectedItem = oEvent.getParameter("listItem") || oEvent.getSource();
            var oAlbum = oSelectedItem.getTitle();// Obtém o Docnum do item selecionado

            if (oAlbum === 'Three Imaginary Boys') {
                ArrayItens = [
                    { titulo: "10:15 Saturday Night", duracao: "3:42" },
                    { titulo: "Accuracy", duracao: "2:16" },
                    { titulo: "Grinding Halt", duracao: "2:49" },
                    { titulo: "Another Day", duracao: "3:44" },
                    { titulo: "Object", duracao: "3:01" },
                    { titulo: "Subway Song", duracao: "1:54" },
                    { titulo: "Foxy Lady", duracao: "2:29" },
                    { titulo: "Meathook", duracao: "2:18" },
                    { titulo: "So What", duracao: "2:37" },
                    { titulo: "Fire in Cairo", duracao: "3:21" },
                    { titulo: "It's Not You", duracao: "2:46" },
                    { titulo: "Three Imaginary Boys", duracao: "3:12" },
                    { titulo: "The Weedy Burton", duracao: "1:43" }
                ];

            }

              var oModeloItens = new sap.ui.model.json.JSONModel({
                data: ArrayItens,
                growingThreshold: 10 // valor inicial
              });

              that.getView().setModel(oModeloItens, "modeloItens");

        }

    });
});