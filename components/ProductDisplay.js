app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
   
        <img v-bind:src="image" width="200" height="300">
        <div class="variants-container">
          <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        </div>
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else style="color: red"> Sorry !! Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

 
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
    
      <div style="display: flex; width: 100%" >
       <review-form @review-submitted="addReview"></review-form>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    
    </div>
  </div>`,
  data() {
    return {
        product: 'Shirts',
        brand: 'Vue.js',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 1, color: 'Blue', image: './assets/images/Blue.jpg', quantity: 4 },
          { id: 2, color: 'Green', image: './assets/images/Green.jpg', quantity: 6 },
          { id: 3, color: 'LightBlue', image: './assets/images/LightBlue.jpg', quantity: 1},
          { id: 4, color: 'Red', image: './assets/images/Red.jpg', quantity: 0 },
        ],
        reviews: []
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
})