import AuthApi from "@/mixins/AuthApi.js";
export default {
  data: function() {
    return {
      Firstname: "test",
      Lastname: "test",
      Email: "test@test.test",
      Password: "test",
      errorVisible: false,
      errorText: "",
      SignMode: true,
    };
  },
  methods: {
    SignIn() {
      this.Login(this.Email, this.Password).then((res) => {
        if (res.auth == true) {
          localStorage.setItem("id", res.body._id);
          localStorage.setItem("token", res.token);
          this.NavigateNews();
        } else {
          this.errorText = "Account not Found";
          this.errorVisible = true;
        }
      });
    },
    SignUp() {
      this.Create({
        Firstname: this.Firstname,
        Lastname: this.Lastname,
        Email: this.Email,
        Password: this.Password,
        admin: false,
      }).then((res) => {
        if (res._id) {
          this.SignIn();
        } else {
          this.errorText = "Account already exist";
          this.errorVisible = true;
        }
      });
    },
    NavigateNews() {
      this.$router.push({ name: "News" });
    },
    ChangeMode() {
      this.SignMode = !this.SignMode;
    },
    Submit() {
      if (this.SignMode) {
        this.SignIn();
      } else {
        this.SignUp();
      }
    },
  },

  mixins: [AuthApi],
};
