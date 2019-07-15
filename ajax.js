document.querySelector('#boton').addEventListener('click', buscarDatos);


function buscarDatos() {

    console.log('en la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'data/data.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            // console.log(this.responseText);

            var email = document.getElementById('emailSearch');
            var emailSearch = email.value;

            document.querySelector('#emailSearch').addEventListener('fill', search);

            let datos = JSON.parse(this.responseText);
              
              //obtengo los datos y los paso a una variable item para iterarlos
            for (var i = 0; i < datos.length; i++) {}
            for (let item of datos) {

                if (item.email == emailSearch) {

                    //busco dentro del aray PhoneNumbers los que contengan valor 
                    var i, j, number = "";
                    for (i in item.phoneNumbers) {
                        number += item.phoneNumbers[i].phone + "<br>";
                        for (j in item.phoneNumbers[i].phone) {
                            number + item.phoneNumbers[i].phone[j];
                        }
                    }
                    //       console.log(number);


                      //busco dentro del aray relatives los que contengan valor 
                    var a, z, name = "";
                    for (a in item.relatives) {
                        name += item.relatives[a].name + "<br>";
                        for (z in item.relatives[a].name) {
                            name + item.relatives[a].name[z];
                        }
                    }

                    //       console.log(name);
                        //res es la clase del tbody donde se mostrará la información 
                    res.innerHTML = `
                

           <table>
               
                <tbody id="res">
               <thead>     
                   <tr>
                       <td><img src="assets/PNGs/user.png"> </td>
                       <td class="nombre">${item.name + ', ' + item.age}</td>   
            
                                          
                   </tr>  
                   
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td> 
                    </tr>
                                                 
               </thead>
                              
  
   <tr>
    <th>Address</th>
    <td></td>
    <th>Phone</th>
    
  </tr>
  <tr>
    <td class="address">${item.address}</td>
    <td></td>
    <td>${number}</td>  
  </tr>

           <tr>
               <th>Email</th>
               <td></td>
               <th>Relatives</th>
               
           </tr>
           
           <tr>
               


               <td>${item.email}</td>
               <td></td>
               <td>${name}</td>
            
           </tr>
              
               </tbody>              
           </table> 

`


                }

            }
        }
        
          function search() {

        var emailSearch = document.getElementById('emailSearch');
        var emailSearch = emailSearch.value;

        let res = document.querySelector('res');
        res.innerHTML = '';


    }  
        
    }


}
