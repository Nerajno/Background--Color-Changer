// random color via the btn function
const rndmClrGen = async () => {
  
  const randomColor = Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  const colorUrl =
    "https://www.thecolorapi.com/id?hex=" + randomColor + "&format=svg";
  try {
    const response = await fetch(colorUrl);
    const body = await response.text();
    color.innerHTML = body;
    colorName.innerHTML = "#" + randomColor;
  } catch (error) {
    console.log(error);
  }
};

// Input color button function
const colorInputSearch = async () => {
  let textBoxSubmitValue = document.getElementById("colorInput").value;
  console.log(textBoxSubmitValue);
  const colorUrl = "https://www.thecolorapi.com/id?name=" + textBoxSubmitValue +"&format=json";
  console.log(colorUrl);
  try {
    const response = await(colorUrl);
    const body = await response.text();
    console.log(body);
    
  } catch (error) {
    console.warn(error);
  }
}



//Random color button
randomColorGen.addEventListener("click", rndmClrGen);

//Input submission btn
inputSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let textBoxtSubmitValue = document.getElementById("colorInput").value
  document.body.style.backgroundColor = textBoxtSubmitValue;
});


//Reset color Background
resetBackGroundColor.addEventListener("click", (e) =>{
   e.preventDefault();
   document.body.style.backgroundColor = "aliceblue";
   $('#colorForm').trigger("reset");
}); 
