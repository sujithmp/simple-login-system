<template>
	<div>
		<!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->

		<b-modal v-model="show" id="dynamic" title="Edit Todo">
			<!-- <p class="my-4">{{ Object.keys(data).length > 0 ? data[selectedTodo].title: 'Thanks'}}</p> -->
			<form>
  				<div class="form-group">
					<input  class="form-control form-control-sm" v-model="data[selectedTodo].title" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
				</div>
				<div class="form-group">
					<select class="custom-select" v-model="data[selectedTodo].completed">
						<option selected>Please select an option</option>
						<!-- <option value="10">10</option>
						<option value="20">20</option> -->
						<option    :value="true">Completed</option>
						<option    :value="false">Not Completed</option>
					</select>
				</div>
			</form>					
		</b-modal>
	</div>	

</template>	

<script>
  export default {
  	name: 'Modal',
  	props:{
  		status:Boolean,
  		selectedTodo:[Number,String],
  		data: Array
  		// dataid:dataid,
  	},
    data() {
    	
      return {
        show: this.status,
        // variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        // headerBgVariant: 'dark',
        // headerTextVariant: 'light',
        // bodyBgVariant: 'light',
        // bodyTextVariant: 'dark',
        // footerBgVariant: 'warning',
        // footerTextVariant: 'dark'
      }
    },
    mounted(){
    	console.log(this.data,"data")
    }
  }
</script>
	