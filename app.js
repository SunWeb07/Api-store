
function fetchDataByCategories(e){
e.preventDefault();
myVar = setTimeout(fetchData, 3000);
}

function fetchData(){
    document.getElementById("loader").style.display = "block";
    const category = document.getElementById('category-select').value;
    console.log(category)
    let url;
if(category==="all") url = 'https://fakestoreapi.com/products';
else  url = `https://fakestoreapi.com/products/category/${category}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Handle the API response
    let output = ""
    let val="";
    data.forEach(element => {
      
        val  = `
        <div class="col-lg-4 col-md-6 mb-4 responsive">
            <div class="card border-3    shadow">
                <img src=${element.image} class="card-img-top rounded-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold mb-3">${element.title}</h5>
                   
                    <p class="text-primary font-weight-bold mb-3">Price:- ${element.price}</p>
                    <p class="card-text mb-4">Rating:- ${element.rating.rate}</p>
                    <p class="card-text mb-4">Stock left:- ${element.rating.count}</p>
                    <a href="#" class="btn btn-primary btn-lg btn-block">Buy Now</a>
                </div>
            </div>
        </div>
        `;    
        output+=val;
    });

        document.getElementById('output').innerHTML = output;
        document.getElementById("loader").style.display = "none";
      
        
  })
  .catch(error => {
    // Handle any errors
    alert("hello")
    alert(error)
  
  });

}

