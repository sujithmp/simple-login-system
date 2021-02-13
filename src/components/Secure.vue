<template>
  <div id="hello">
  	<div class="container">
  		
		
		<div class="bd-example">
			<div class="alert alert-primary" role="alert">
			  {{msg}}
			</div>
		</div>	

		<h3>Todos</h3>	


		<ul class="nav nav-tabs" id="myTab" role="tablist">
		  <li class="nav-item">
		    <a class="nav-link active"  id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Active  <span class="badge badge-light">{{Object.values(todos).length}}</span></a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" v-on:click="getMockData('COMPLETED')" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Completed <span class="badge badge-light">{{completedTotal}}</span></a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" v-on:click="getMockData('NOT_COMPLETED')" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Not Completed <span class="badge badge-light">{{notCompletedTotal}}</span></a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings </a>
		  </li>
		</ul>
		<div class="tab-content" id="myTabContent">
		  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
		  	
		  	<div class="row">
				<table class="table mt-5">
				  	<thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Name</th>
					      <th scope="col">Status</th>
					      <th scope="col">Actions</th>
					    </tr>
				  	</thead>
				  	<tbody>
				    <tr v-for="(todo,sl) in todos">
				      <th scope="row">{{sl+1}}</th>
				      <td>{{todo.taskTitle}}</td>
				      <td>{{todo.done? "Completed": "Not Completed"}}</td>
				      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click="edit(sl)">Edit</button></td>
				    </tr>
				   
			  		</tbody>
				</table>
				<nav aria-label="Page navigation example">
				  <ul class="pagination">
				    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
				    <li class="page-item"><a class="page-link" href="#">1</a></li>
				    <li class="page-item"><a class="page-link" href="#">2</a></li>
				    <li class="page-item"><a class="page-link" href="#">3</a></li>
				    <li class="page-item"><a class="page-link" href="#">Next</a></li>
				  </ul>
				</nav>
			</div>
		  </div>
		  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
		 	<div class="row">
				<table class="table table mt-5">
				  	<thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Name</th>
					      <th scope="col">Status</th>
					      <th scope="col">Actions</th>
					    </tr>
				  	</thead>
				  	<tbody>
				    <tr v-for="(todo,sl) in sampleData" v-if="todo.completed">
				      <th scope="row">{{sl+1}}</th>
				      <td>{{todo.title}}</td>
				      <td>{{todo.completed? "Completed": "Not Completed"}}</td>
				      <td><button type="button"  class="btn btn-primary" :id="'todoUpdate_'+sl"   v-on:click="update(sl)" >Edit</button></td>
				    </tr>
				   
			  		</tbody>
				</table>
				<nav aria-label="Page navigation example">
				  <ul class="pagination">
				    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
				    <li class="page-item" v-for="page in pages"><a class="page-link" v-on:click="goto(page)" href="#">{{page}}</a></li>
				    <li class="page-item"><a class="page-link" href="#">Next</a></li>
				  </ul>
				</nav>
			</div> 	
		  </div>
		  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
	  		<div class="row">
				<table class="table table mt-5">
				  	<thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Name</th>
					      <th scope="col">Status</th>
					    </tr>
				  	</thead>
				  	<tbody>
				    <tr v-for="(todo,sl) in sampleData" v-if="!todo.completed">
				      <th scope="row">{{sl+1}}</th>
				      <td>{{todo.title}}</td>
				      <td>{{todo.completed? "Completed": "Not Completed"}}</td>
				    </tr>
			  		</tbody>
				</table>
				<nav aria-label="Page navigation example">
				  <ul class="pagination">
				    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
				    <li class="page-item" v-for="page in pages"><a class="page-link" v-on:click="goto(page)" href="#">{{page}}</a></li>
				    <li class="page-item"><a class="page-link" href="#">Next</a></li>
				  </ul>
				</nav>
			</div>
		  </div>
		  <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
			  	
		  		<div class="mt-3">
			  		<div class="mb-3">
					  	<label for="exampleFormControlInput1" class="form-label">Page Offset</label>
						<select class="custom-select" v-model="desired">
							<option selected>Please select an option</option>
							<!-- <option value="10">10</option>
							<option value="20">20</option> -->
							<option v-for="(option,index) in settings.offset"   :value="option">{{option}}</option>
						</select>
					  	<!-- <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> -->
					</div>
					<div class="mb-3">
						<label for="customOffset" class="form-label">Custom Offset </label>
						<input type="number" class="form-control" id="customOffset" v-model="settings.customOffset" placeholder="12">
					</div>
					<div class="mb-3">
						<label for="loaderIcon" class="form-label">Loader Icon </label>
						<select  class="form-control" v-model="settings.loaderIcon">
							<option selected>Please select an option</option>
							<!-- <option value="10">10</option>
							<option value="20">20</option> -->
							<option    value="dots">dots</option>
							<option    value="spinner">spinner</option>
							<option    value="bars">bars</option>
						</select>
						<!-- <input type="text" class="form-control" id="loaderStyle" v-model="settings.loaderIcon" > -->
					</div>
					<div class="mb-3">
						<label for="loaderColor" class="form-label">loader Color </label>
						<select  class="form-control" v-model="settings.loaderColor">
							<option selected>Please select an option</option>
							<!-- <option value="10">10</option>
							<option value="20">20</option> -->
							<option    value="#cc00ff">#cc00ff</option>
							<option    value="#ff0000">#ff0000</option>
							<option    value="#0000ff">#0000ff</option>
						</select>
						<!-- <input type="text" class="form-control" id="loaderStyle" v-model="settings.loaderIcon" > -->
					</div>
				</div>					
				<button type="button" class="btn btn-primary" v-on:click="updateSettings()" >Submit</button>
		  </div>
		</div>


		<!-- modals -->

		<div v-show="selectedId" class="modal" id="exampleModal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Edit Todo</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<!-- <p>{{selectedTodo}}</p> -->
					<input  class="form-control form-control-sm" v-model="selectedTodo" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button"   v-on:click="save()" data-dismiss="modal" class="btn btn-primary">Save changes</button>
				</div>
		    </div>
		  </div>
		</div>

		<Modal v-if="selectedTodo === 0 || selectedTodo" 
		:status="status" 
		:data="sampleData" 
		:selectedTodo="selectedTodo" ></Modal>
		<loading  
		:active.sync="loading" 
        :can-cancel="true" 
        :is-full-page="fullPage"
        :loader="settings.loaderIcon"
        :color="settings.loaderColor"
        ></loading>
		<!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> -->
  	</div>
  	
  </div>
</template>
<script>

import Modal from './Modal';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';	

export default {
  name: 'Secure',
  components:{
  	Modal,
  	Loading,
  },
  data () {
    return {
      msg: 'Welcome to secure page',
      todos:[
	      	{
				"done": false,
				"taskTitle": "Set up More Services in ECS cluster"
			},
			{
				"done": false,
				"taskTitle": "Check The Required Memory"
			},
			{
				"done": false,
				"taskTitle": "Clarify The Number of Instances Required While Creating ECS Cluster"
			},
			{
				"done": false,
				"taskTitle": "Have a life!!"
			}
  		],
  		sampleData:[],	
  		desired:10,
  		selectedTodo:'',
  		pages:0,
  		selectedId: '',
  		start: 0,
  		settings:{
  			offset:[10,20,30],
  			customOffset:'',
  			loaderIcon: 'dots',
  			loaderColor: '#cc00ff'
  		},
  		completedTotal: 0,
  		notCompletedTotal:0,
  		type:'',
  		loading: false,
  		status: true,
  		fullPage: true,	
    }
  },
  mounted(){

  	this.getMockData();

  },
  methods:{

  	update(id){
  		
  		this.selectedTodo = id;
  		// this.status = true;
  		console.log(this.$bvModal,"this.$bvModal",this.selectedTodo);
  		// this.$bvModal.props({dataId:id});
  		this.$bvModal.show('dynamic');
  		
  		
  	},
  	updateSettings() {
  		
  		const { customOffset,offset } = this.settings;
  		console.log(offset,'offset',offset.includes(parseInt(customOffset)));
  		if(offset.includes(parseInt(customOffset))) { alert("The item already exists"); this.settings = {...this.settings,customOffset:''}; return false;}
  		if(customOffset) this.settings = {...this.settings,offset:[...offset,parseInt(customOffset)]};
  		console.log(this.settings,"this.settings")
  	},
  	goto(page) {
  		this.getMockData(this.type,page-1);
  	},
  	save(){
  				
  		this.todos[this.selectedId] = {...this.todos[this.selectedId],taskTitle:this.selectedTodo};
  		this.getMockData();
  	},
  	getMockData(type = '',start = 0) {
  		let self = this;

  		this.loading = true;
  		fetch('https://jsonplaceholder.typicode.com/todos/')
		  .then(response => response.json())
		  .then(json => {
		  	self.sampleData = [];
		  	self.sampleData = [...self.sampleData,...json];
		  	let completed = Object.values(this.sampleData).filter( e => e.completed);
		  	let notCompleted = Object.values(this.sampleData).filter( e => !e.completed);
		  	this.completedTotal = completed.length;
		  	this.notCompletedTotal = notCompleted.length;
		  	if(type == 'COMPLETED') {
		  		this.type = type;
		  		self.paginate(completed);
		  		if(start) this.start = this.desired*start;
		  		else this.start = 0;
		  		console.log(this.start,"this.start");
		  		this.moreData(this.start,completed);
		  	}
		  	else if(type == 'NOT_COMPLETED') {
		  		this.type = type;
		  		self.paginate(notCompleted);
		  		if(start) this.start = this.desired*start;
		  		else this.start = 0;
		  		this.moreData(this.start,notCompleted);
			}

			this.loading = false;  	
		  })
	  	},
	moreData(start = 0,data = [] ) {
		this.start = start;

		this.sampleData = data.slice(this.start,this.desired+this.start);
		// this.sampleData = Object.values(this.sampleData).slice(0,this.desired);
	},
	edit(id) {
		this.selectedTodo = this.todos[id].taskTitle;
		this.selectedId = id;
	},
	paginate(data) {

		let itemSets = data.length/parseInt(this.desired);
		let pages = itemSets > 0 ? (data.length%parseInt(this.desired) == 0 ? itemSets : parseInt(itemSets)+1): 0;
		this.pages = pages;
		
		console.log(this.pages,'pages')
	}  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bd-example {
    position: relative;
    padding: 1rem;
    margin: 1rem -15px 0;
    border: solid #f8f9fa;
    border-width: .2rem 0 0;
}
</style>
