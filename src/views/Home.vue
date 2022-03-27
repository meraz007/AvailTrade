<template>
  <div class="home">
    <div class="container">
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
        <div class="col-md-6" >
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
            <p>{{product.visitor_count}}</p>
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
    }
  },
  mounted(){
    this.$store.dispatch("fetchProductList");
    this.$store.dispatch("fetchSlider");
    this.$store.dispatch("fetchRightThreeProduct");
    this.$store.dispatch("fetchJustForYou");
  }
}
</script>
