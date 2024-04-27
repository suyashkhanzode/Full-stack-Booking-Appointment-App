function handleFormSubmit(event) {
    axios
    .get("http://localhost:9897/sharpner/appointment")
        .then((response) => {
          for(let i = 0;i<response.data.length;i++)
            {
                 displayUserOnScreen(response.data[i])
            }
        })
        .catch((error) => console.log(error));
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", ()=>{
        userList.removeChild(target.parentElement);
   
         deleteUser(userDetails._id);
    });
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
   
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.email);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }

  function deleteUser(id){
    axios
    .delete("https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData/${id}")
    .then(()=>{
        
    })
    .catch((err)=>{
        console.log(err)
    })
  }


  
  
  // Do not touch code below
  module.exports = handleFormSubmit;
  