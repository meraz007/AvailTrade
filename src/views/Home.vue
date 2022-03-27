<template>
  <div class="home">
    <div class="container">
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img class="logo horizontal-logo" src="horizontal-logo.svg" alt="forecastr logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        ...
      </ul>
    </div>
  </div>
</nav>
      </div>
      <div class="row">
        <div class="col-md-3">
         <div class="list-group">
                  <button type="button" style="font-size:14px" class="list-group-item list-group-item-action" v-for="product in getPrimaryProductList" :key="product.id">
                    <span class="pull-left" >
                      <img :src="path +'/public/images/' + product.category_icon" style="width:30px"  class="img-reponsive img-rounded">
                    </span>
                    {{product.category_name}}
                  </button>
              </div>
        </div>
        <div class="col-md-6">
          <!--
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" v-for="product in getSlider" :key="product.id">
                  <img class="img-fluid"  :src="path +'/public/images/' + product.slider_image" alt="">
              
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
          </div>
          -->
            <MDBCarousel
              v-model="carousel4"
              :items="items4"
            />
        </div>
        <div class="col-md-3">
          <h4>EveryThing In One Place</h4>
          <div class="card mb-3" style="border: none" v-for="product in getThreeProduct" :key="product.id">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="path +'/public/images/' + product.products_image" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{product.product_name.substring(0,20)+"..."}}</h5>
                <button class="btn btn-success">Source</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div >
        <h3 class="my-4">Just For You</h3>
         <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5">
        <div class="col" v-for="product in getJustForYou" :key="product.id">
          <div class="card p-3" style="height: 22rem;">
          <img :src="path +'/public/images/' + product.products_image" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title">{{product.product_name.substring(0,20)+".."}}</h6>
            <p class="card-text">৳ {{product.product_price}}</p>
            <p class="card-text">{{product.unit}} Pices (Min Order)</p>
            <p class="text-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye me-2" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>{{product.visitor_count}}
            </p>
            
          </div>
        </div>
          <h1></h1>
          <img >
        </div>
      </div>
      </div>
    </div>
  </div>
  <div>
  </div>
  <div>{{getSecondaryCategoryList}}</div>
</template>

<script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
export default {
  name: 'Home',
  components: {
      MDBCarousel
    },
    setup() {
      const items4 = [
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
          alt: "..."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
          alt: "..."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
          alt: "..."
        }
      ];
      const carousel4 = ref(0);
      return {
        items4,
        carousel4
      };
    },
  data(){
    return{
      path:'https://www.availtrade.com'
    }
  },
 
  computed:{
    getPrimaryProductList(){
      return this.$store.state.primary_category_list
    },
    getSlider(){
      return this.$store.state.slider
    },
    getThreeProduct(){
      return this.$store.state.right_three_product
    },
    getJustForYou(){
      return this.$store.state.just_for_you
    },
    getSecondaryCategoryList(){
      return this.$store.state.sCategoryList
    }

  },
  mounted(){
    this.$store.dispatch("fetchProductList");
    this.$store.dispatch("fetchSlider");
    this.$store.dispatch("fetchRightThreeProduct");
    this.$store.dispatch("fetchJustForYou");
    this.$store.dispatch("fetchSecondaryTertiaryCatgeoryList");
  }
}
</script>
