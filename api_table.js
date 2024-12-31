function Details() {
  fetch(`https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects`)
    .then(responce => responce.json())
    .then(data => {
      console.log(data);


      arraydata = data;
      console.log(arraydata);

      showdata(data);
      console.log(arraydata[0].priority);


    });

}
Details();

function showdata(data) {

  document.getElementById('tableout').innerHTML = data.
    map


    ((d) =>
      `    

    <tr>
  <td>${d.id}</td>
      <td>${d.createdAt}</td>
      <td>${d.ProjectName}</td>
      <td>${d.priority}</td>
            <td>${d.Details}</td>
      <td>${d.Department}</td>
      <td>${d.startDate}</td>
      <td>${d.EndDate}</td>
      <td>${d.status}</td>


    </tr>
   
 
`
    ).join('');

}

showdata();


function searchpriority() {
  // console.log("hellow");


  console.log("seachpriority data", arraydata);
  searchkey = document.getElementById('searchinput').value;
  console.log(searchkey);

  const filterdata = arraydata.filter((d) =>
    d.priority.toLowerCase().includes(searchkey.toLowerCase()) ||
    d.status.toLowerCase().includes(searchkey.toLowerCase()))


  console.log(filterdata);
  showdata(filterdata);
}




