import SerieApi from "@/mixins/SerieApi.js";
import UserApi from "@/mixins/UserApi.js";
export default {
  data: function() {
    return {
      Series: [], // Liste des series
      Categs: [], // Liste des catégories
      MyList: [], // Liste des series de l'utilisateurs
      Load: false,
      searchQuery: "",
    };
  },
  methods: {
    SetQuery(Text) { // function pour set la query variable query et filtrer dessus
      this.searchQuery = Text;
    },
    AddList(id) {
      this.MyList.push(id); // FUNCTION POUR AJOUTER DES SERIES A LA LISTE DE L'utilisateurs et changer la liste en base de donnée
      this.EditUser(localStorage.getItem("id"), { MyList: this.MyList });
    },
    RemoveList(id) {
      this.MyList = this.MyList.filter((e) => e !== id); // FUNCTION POUR supprimer DES SERIES A LA LISTE DE L'utilisateurs et changer la liste en base de donnée
      this.EditUser(localStorage.getItem("id"), { MyList: this.MyList });
    },
    RemoveSerieMyList(id) {
      this.RemoveList(id); // fonction permettant de supprimer des serie de la liste de l'utilisateurs et de l'enlever de l'array Series pour ne plus l'afficher
      this.Series = this.Series.filter((e) => e._id !== id);
    },
    CheckList(id) {
      if (this.MyList.toString().indexOf(id) > -1 && this.MyList.length > 0) {
        // FUNCTION QUI CHECK SI LA SERIE EST DANS LA LISTE de l'utilisateurs OU PAS
        return false;
      } else {
        return true;
      }
    },
    GetSerieCateg(categ, Mode, Series) {
      // FUNCTION QUI TRIE LES SERIES PAR RAPPORT A çA CATéGORIE et trie si on veux les series disponible en ce moment ou toutes les series meme non disponible
      var result = [];
      Series.forEach((Serie) => {
        if (Serie.Categorie.indexOf(categ) > -1) {
          if (Mode == "") {
            if (Serie.Disponible) result.push(Serie);
          } else {
            result.push(Serie);
          }
        }
      });
      return result;
    },

    SetMyList() {
      // FUNCTION POUR récupérer la liste de l'utilisateurs
      this.GetUsersDetail(localStorage.getItem("id"))
        .then((data) => {
          this.MyList = data.MyList;
        })
        .catch((err) => console.log(err));
    },
    SetSeries() {
      // FUNCTION POUR récupérer toutes les series et la catégories présentes
      this.GetSeries()
        .then((data) => {
          this.Series = data;
          this.Series.forEach((Serie) => {
            Serie.Categorie.forEach((Categorie) => {
              if (!this.Categs.includes(Categorie)) {
                this.Categs.push(Categorie);
              }
            });
          });
          this.Load = true;
        })
        .catch((err) => console.log(err));
    },

    SetSeriesMyList() {
      // FUNCTION POUR récupérer toutes les series et la catégories présentes dans la liste de l'utilisateurs
      this.GetSeries()
        .then((data) => {
          data.forEach((Serie) => {
            if (this.MyList.includes(Serie._id)) {
              this.Series.push(Serie);
              Serie.Categorie.forEach((Categorie) => {
                if (!this.Categs.includes(Categorie)) {
                  this.Categs.push(Categorie);
                }
              });
            }
          });
          this.Load = true;
        })
        .catch((err) => console.log(err));
    },
    Init(Mode) {
      // function qui initialise les différentes listes de différentes façon en fonction du mode
      this.SetMyList();
      if (Mode == "MyList") {
        this.SetSeriesMyList();
      } else {
        this.SetSeries();
      }
    },
  },
  computed: {
    ResultQuery() {
      var query = this.searchQuery;
      var FieldsQuerable = ["Age","Director","Rate","Year","Title","Categorie","Cast","name"];// liste des valeurs des series sur lequels je veux trier
      function InFieldsQuerable(value) {// fonction permettant de voir si une valeurs est bien celle que l'on veux dans le trie
        return FieldsQuerable.includes(value.toString());
      }
      function InSearchQuery(value) {// permet de comparer une valeurs a notre recherche
        return (value.toString().toLowerCase().indexOf(query.toLowerCase()) > -1);
      }

      function InArrayQuerable(value) { // fonction permetttant de pacourir un array d'elements ou d'objet et dire si une valeurs fait partie de la recherche
        var res=false;
        value.forEach((element) => {// je parcours mon array
          if(typeof(element) == "object") { // je check si l'element a l'interieur est un array
            for (const [elkey, elvalue] of Object.entries(element)) { // je filtre tous les champs et valeurs de l'objet
              if (InFieldsQuerable(elkey) && InSearchQuery(elvalue)) {// je check si elle fait partie des champs que je veux filtrer et que ma query match avec cette valeurs
                res= true;
              }
            }
          } else if(InSearchQuery(element)) {// si ce n'est pas un array je check que ma query match avec cette valeurs
            res= true;
          }
        });
        return res;
      }

      if (query) {// si il y a une requete 
        return this.Series.filter((serie) => {// je filtre la variable series
          for (const [key, value] of Object.entries(serie)) {// sur cette variable je filtre tous les champs et valeurs
            if (InFieldsQuerable(key) && Array.isArray(value)) {// je cherche si les champs sont ceux que je veux filtrer et je regarde si la valeurs est un array
              if (InArrayQuerable(value)) {// si elle est un array je cherche une valeurs correspondantes a ma query  
                return serie;
              }
            } else {
              if (InFieldsQuerable(key) && InSearchQuery(value)) {// si ce n'est pas un array je check si elle fait partie des champs que je veux filtrer et que ma query match avec cette valeurs
                return serie;
              }
            }
          }
        });
      } else {
        return this.Series;
      }
    },
  },
  mixins: [SerieApi, UserApi],
};
