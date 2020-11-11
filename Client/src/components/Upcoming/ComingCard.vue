<template>
  <div class="movie-card">
    <div class="movie-header"  :style="
      `background:center / cover no-repeat url(${Item.Cover});backdrop-filter: brightness(0.6);`
    ">
    <ListController :InList="InList" :AddList="AddList" :RemoveList="RemoveList" :Id="Item._id"/>
    </div>
    <!--movie-header-->
    <div class="movie-content">
      <div class="movie-content-header">
        <a href="#">
          <h3 class="movie-title">{{Item.Title}}</h3>
        </a>
        <div class="vueflix-logo"></div>
      </div>
      <div class="movie-info">
        <div class="info-section">
          <label>Year</label>
          <span>{{Item.Year}}</span>
        </div>
        <!--date,time-->
        <div class="info-section">
          <label>Rate</label>
          <span>{{Item.Rate}}</span>
        </div>
        <!--screen-->
        <div class="info-section">
          <label>Saison</label>
          <span>{{Item.Saison}}</span>
        </div>
        <!--row-->
        <div class="info-section">
          <label>Director:</label>
          <span>{{Item.Director}}</span>
        </div>
        <!--seat-->
      </div>
    </div>
    <!--movie-content-->
  </div>
  <!--movie-card-->
</template>

<script>
import ListController from "@/components/ListController";
export default {
  name: "ComingCard",
    props: {
    Item: { type: Object },
    InList:false,
    AddList: {
      type: Function,
    },
    RemoveList: {
      type: Function,
    },
  },
    components: {
    ListController,
  },
};
</script>

<style>
.movie-card {
  cursor: pointer;
  background: #141414;
  box-shadow: 0px 6px 18px rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 315px;
  color: white;
  margin: 2em;
  border-radius: 10px;
  display: inline-block;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  font-family: F001, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

.movie-header {
  padding: 0;
  margin: 0;
  height: 220px;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}



.header-icon-container {
  position: relative;
}

.header-icon {
  position: absolute;
  top: -20px;
  right: 5%;
  color: #ffffff;
  font-size: 5em;

  opacity: 0.85;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
}

.header-icon.add{
 text-shadow: 0px 0px 20px #72ea6a, 0px 5px 20px #6dea6a;
}
.header-icon.remove{
 text-shadow: 0px 0px 20px #72ea6a, 0px 5px 20px #ea6a6a;
}
.movie-card:hover .header-icon {
  font-size: 5.5em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 1;
}

.movie-card:hover {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  box-shadow: 0px 10px 25px rgba(255, 255, 255, 0.08);
}

.movie-content {
  padding: 18px 18px 24px 18px;
  margin: 0;
}

.movie-content-header,
.movie-info {
  display: table;
  width: 100%;
}

.movie-title {
  font-size: 3em;
  margin: 0;
  display: table-cell;
}

.vueflix-logo {
  width: 50px;
  height: 15px;
  background: url("/logo-big.png") no-repeat;
  background-size: contain;
  display: table-cell;
  float: right;
  position: relative;
  margin-top: 15px;
}

.movie-info {
  margin-top: 1em;
}

.info-section {
  display: table-cell;
  text-transform: uppercase;
  text-align: center;
}

.info-section:first-of-type {
  text-align: left;
}

.info-section:last-of-type {
  text-align: right;
}

.info-section label {
  display: block;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5em;
  font-size: 1.2em;
}

.info-section span {
  font-weight: 100;
  font-size: 1.3em;
}

@media screen and (max-width: 500px) {
  .movie-card {
    width: 95%;
    max-width: 95%;
    margin: 0.5em;
    display: block;
  }

  .container {
    padding: 0;
    margin: 0;
  }
}
</style>
