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
    RemoveSerieMyList(id) {
      this.RemoveList(id);
      this.Series = this.Series.filter((e) => e._id !== id);
    },
    CheckList(id) {
      // FUNCTION QUI CHECK SI LA SERIE EST DANS LA LISTE OU PAS
      if (this.MyList.toString().indexOf(id) > -1 && this.MyList.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    // FUNCTION QUI TRIE LES SERIES PAR RAPPORT A çA CATéGORIE
    GetSerieCateg(categ) {
      var result = [];
      this.Series.forEach((Serie) => {
        if (Serie.Categorie.indexOf(categ) > -1) {
          result.push(Serie);
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
      this.SetMyList();
      if (Mode == "MyList") {
        this.SetSeriesMyList();
      } else {
        this.SetSeries();
      }
    },
  },
  mixins: [SerieApi, UserApi],
};
