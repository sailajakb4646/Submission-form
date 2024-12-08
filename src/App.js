import "./App.css";
import {React,useState} from "react";

function App(){
  const [firstName,setFirstName] = useState("");
  const [lastName,setlastName] = useState("");
  const [contact,setContact] = useState("");
  const [email,setEmail] = useState("");
  const [gender,setGender] = useState("Female");
  const [resume,setResume] = useState("");
  const [url,setUrl] = useState("");
  const [selectOption,setselectOption] = useState("");
  const [about,setAbout] = useState("");

  const [subject , setSubject] = useState({
    english : true,
    maths : false,
    physics : false
  });


const handleSubmit = (e) =>  {
  e.preventDefault();
  console.log(firstName,lastName,contact,gender,email,resume,url,selectOption,about,subject);
};

const handleSubjectChange = (sub) =>  {
  setSubject((prev)=>({
    ...prev,
    [sub]:  !prev[sub],
  }));
};

const handleReset = () =>{
  setFirstName("");
  setlastName("");
  setContact("");
  setEmail("");
  setGender("Male");
  setResume("");
  setUrl("");
  setselectOption("");
  setAbout("");
  setSubject({
    english : true,
    maths : false,
    physics : false
  });
};

return (
  <div className="App">
    <h1>Form in React</h1>
    <fieldset>
      <form action="App" method="get">
        <label For = "firstName">First Name*</label>
        <input type="text" name = "firstName" id = "firstName" value = {firstName} onChange={(e) =>setFirstName(e.target.value)} placeholder="Enter First Name"/>

        <label for = "lastName">Last Name*</label>
        <input type="text" name = "lastName" id = "lastName" value = {lastName} onChange={(e) =>setlastName(e.target.value)} placeholder="Enter Last Name"/>

        <label for = "Contact">Contact*</label> 
        <input type= "tel" name = "Number" id = "Number" value = {contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter your Contact number"/>

        <label for = "Email">Email*</label>
        <input type = "email" name = "email" id="email" value = {email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email ID"/>

        <label for = "gender">Gender*</label>
        <input type="radio" name="gender" id="male" value ="male" checked={gender==="male"} onChange={(e) => setGender(e.target.value)} />
        Male
        <input type="radio" name="gender" id="Female" value ="Female" checked={gender==="Female"} onChange={(e) => setGender(e.target.value)} />
        Female
        <input type =  "radio" name = "gender" id = "others" value = "others" checked = {gender ===  "others"} onChange={(e) => setGender(e.target.value)}        />
        others
         
        <label for = "lang">Your Best Subject</label>
        <input type = "Checkbox" name = "lang" id = "english" checked = {subject.english === true} onChange={(e) => handleSubjectChange("english")}/>
        Engislh
        <input type = "Checkbox" name = "lang" id = "maths" checked = {subject.maths === true} onChange={(e) => handleSubjectChange("maths")}/>
        Maths
        <input type = "Checkbox" name = "lang" id = "physics" checked = {subject.physics === true} onChange={(e) => handleSubjectChange("physics")}/>
        physics
        
        <label for = "file">Upload Resume</label>
        <input type = "file" name = "file" id = "file" onChange={(e) => setResume(e.target.files[0])} placeholder="Enter Upload file" />

        <label for = "url">Enter URl*</label>
        <input type = "url" name = "url  " id = "url"  onChange={(e) => setUrl(e.target.value)}placeholder="Enter url"/>

        <label for = "url">Select your Choice</label>
        <select name = "select" id = "select"  value= {selectOption} onChange={(e) => setselectOption(e.target.value)}>
          <option value = "disabled" selected={selectOption === ""}>Select your ans</option>
            <optgroup lable  = "Adavanced">
              <option value="4">React</option>
              <option value="4">Node</option>
              <option value="4">Express</option>
              <option value="4">Mongo DB</option>
            </optgroup>
        </select>
        
        <label for = "about">About</label>
        <textarea name = "about" id = "about"  cols ="30" rows="20" value={about}  onChange={(e) => setAbout(e.target.value)} placeholder="About your self"></textarea>

        <button type = "reset" value="reset" onClick={() => handleReset()}>Reset</button> 
        <button type = "submit" value="submit" onClick={(e) => handleSubmit(e)}>Submit</button> 


      </form>
    </fieldset>

  </div>
);

}

export default App;