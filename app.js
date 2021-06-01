const github=new  Github ;
const ui=new UI;

const userInput=document.getElementById('userInput');
userInput.addEventListener('keyup',function(e){
    const user=userInput.value;
if(user!==''){
    // making requests
    github.getUser(user)// calling function from a constructor
    .then(data=>{///then response from github constfad 
        if(data.profile.message==='Not Found'){
            ui.showAlert('user not found','alert alert-danger');
        
        }else
        {
            ui.showProfile(data.profile);// calling function from a constructor
            ui.showRepo(data.repos);
        }
    })
// github aur ui do constructors hai,cage chlyte ahin
}
// kafi simple event listeners hmare conditons pr aur fr constructor ko call kiya normal tarike se bs contructor alg defined the aur usme normal properties
else{
    ui.clearProfile();
}
});