function WriteToFile() {

  title=document.getElementById("title").value;
  organization=document.getElementById("organization").value;
   // alert("title: " +title)
  location=document.getElementById("location").value;
  rating=document.getElementById("rating").value;
  description=document.getElementById("description").value;
 var reviewSingle = {
    "title":title,
    "organization":organization,
    "location":location,
    "rating":rating,
    "description":description
  };
// alert("variable successfully created!")
// reviewSingle = document.getElementById('display').innerHTML;

// //open the file containing all past results and append them to our current list
// f = open("all_answers.json", "r")
// olddata = json.load(f)
// listAllUsers.extend(olddata)
// f.close()
}
