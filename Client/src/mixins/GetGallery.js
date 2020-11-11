import SerieApi from "@/mixins/SerieApi.js";
import UserApi from "@/mixins/UserApi.js";
export default {
  data: function() {
    return {
      Series: [],
      Categs: [],
      MyList: [],
      Load: false,
    };
  },
  methods: {
    AddList(id) {
      // FUNCTION POUR AJOUTER DES SERIES A LA LISTE DE L'utilisateurs et changer la liste
      this.MyList.push(id);
      this.EditUser(localStorage.getItem("id"), { MyList: this.MyList });
    },
    RemoveList(id) {
      // FUNCTION POUR supprimer DES SERIES A LA LISTE DE L'utilisateurs et changer la liste
      this.MyList = this.MyList.filter((e) => e !== id);
      this.EditUser(localStorage.getItem("id"), { MyList: this.MyList });
    },
    CheckList(id) { // FUNCTION QUI CHECK SI LA SERIE EST DANS LA LISTE OU PAS
      if (this.MyList.toString().indexOf(id) > -1 && this.MyList.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    Init() {
      // FUNCTION POUR récupérer la liste de l'utilisateurs
      this.GetUsersDetail(localStorage.getItem("id"))
        .then((data) => {
          this.MyList = data.MyList;
        })
        .catch((err) => console.log(err));
      // FUNCTION POUR récupérer la liste des series et des catgégories présent
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
  },
  mounted() {
    this.Init();
  },
  mixins: [SerieApi, UserApi],
};
