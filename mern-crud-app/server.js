                //server.js
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
//config database
mongoose.connect('mongodb://localhost:27017/merncrud');

//models
const itemSchema=new mongoose.Schema({
	/*name:String*/
	eid:{ type: Number, required: true },
	ename:{ type: String, required: true },
	eage:{ type: Number, required: true },
	edob:{ type: Date, required: true },
	email:{ type: String, required: true }
});
const Item = mongoose.model('Item',itemSchema);
//controllers and routes
app.get('/items',async(req,res)=> {
	const items=await Item.find();
	res.send(items);
});
app.get('/items/:id',async(req,res)=> {
	const items=await Item.findOne({_id:req.params.id});
	res.send(items);
});

app.post('/items', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});
app.put('/items/:id',async(req,rea)=>{
	const item=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
	res.send(item);
});
app.delete('/items/:id',async(req,res)=>{
	const item=await Item.findByIdAndDelete(req.params.id);
	res.send({message:'Item deleted'});
});
 
 app.listen(9000,()=>{
 	console.log('Server is running on port 9000');
 });














 // Table Component
/*class Table extends Component {
  state = {
    timer: 60,
    currentPage: 1,
    itemsPerPage: 5,
    employees: [
      { empid: 1, empname: 'Sashi', age: 19, email: 'sashi@gmail.com', address: 'Guntur', salary: 97000, isEditing: false },
      { empid: 2, empname: 'John', age: 28, email: 'john@example.com', address: 'New York', salary: 55000, isEditing: false },
      { empid: 3, empname: 'Anna', age: 22, email: 'anna@example.com', address: 'London', salary: 45000, isEditing: false },
      { empid: 4, empname: 'Mike', age: 35, email: 'mike@example.com', address: 'Sydney', salary: 67000, isEditing: false },
      { empid: 5, empname: 'Sara', age: 30, email: 'sara@example.com', address: 'Toronto', salary: 60000, isEditing: false },
      { empid: 6, empname: 'Tom', age: 25, email: 'tom@example.com', address: 'Berlin', salary: 52000, isEditing: false },
      { empid: 7, empname: 'Emily', age: 27, email: 'emily@example.com', address: 'Paris', salary: 55000, isEditing: false },
      { empid: 8, empname: 'Jack', age: 40, email: 'jack@example.com', address: 'Dubai', salary: 70000, isEditing: false },
      { empid: 9, empname: 'Olivia', age: 32, email: 'olivia@example.com', address: 'Mumbai', salary: 65000, isEditing: false },
      { empid: 10, empname: 'Liam', age: 26, email: 'liam@example.com', address: 'Singapore', salary: 58000, isEditing: false },
      { empid: 11, empname: 'Sophia', age: 29, email: 'sophia@example.com', address: 'Hong Kong', salary: 62000, isEditing: false },
      { empid: 12, empname: 'Noah', age: 33, email: 'noah@example.com', address: 'Tokyo', salary: 70000, isEditing: false },
      { empid: 13, empname: 'Ava', age: 24, email: 'ava@example.com', address: 'Seoul', salary: 53000, isEditing: false },
      { empid: 14, empname: 'Mason', age: 31, email: 'mason@example.com', address: 'Los Angeles', salary: 65000, isEditing: false },
      { empid: 15, empname: 'Isabella', age: 23, email: 'isabella@example.com', address: 'San Francisco', salary: 54000, isEditing: false },
    ],
  };

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timer <= 0) {
          clearInterval(this.interval);
          alert('Time is up!');
          return { timer: 0 };
        }
        return { timer: prevState.timer - 1 };
      });
    }, 1000);
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { employees, currentPage, itemsPerPage } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = employees.slice(startIndex, startIndex + itemsPerPage);

    const pageCount = Math.ceil(employees.length / itemsPerPage);
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

    return (
      <>
        <h2>Employee Table</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((emp) => (
              <tr key={emp.empid}>
                <td>{emp.empid}</td>
                <td>{emp.empname}</td>
                <td>{emp.age}</td>
                <td>{emp.email}</td>
                <td>{emp.address}</td>
                <td>{emp.salary}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination>
          {pages.map(page => (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => this.handlePageChange(page)}
            >
              {page}
            </Pagination.Item>
          ))}
        </Pagination>
      </>
    );
  }
}*/

export default Fruits;
