app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
       <span> {{ review.name }} : </span> gave this {{ review.rating }} stars
        <br/>
      <span>   Review Details :</span> "{{ review.review }}"
        <br/>
        <!-- solution -->
       <span>  Recommended:</span> {{ review.recommend }}
        <!-- solution -->
      </li>
    </ul>
  </div>
`
})