//eatr
function createTicketObject(id_ticket,author,title,description,priority,status_code){
  var obj={
          "id":id_ticket,
          "author":author,
          "title":title,
          "description":description,
          "priority":priority,
          "status":status_code
          }
   return obj;

}
function newTicket(object)
{
  var priority_class_name;
  console.log(object["priority"]);
  if (typeof(object["id"])!="number"){
    throw new TypeError("The 'id' parameter should be a number , "+typeof(object["id"])+" given");
  }

  //
  switch (object["priority"]) {
    case "Low":
      priority_class_name="low_priority";
      break;
    case "Medium":
      priority_class_name="medium_priority";
      break;
    case "High":
      priority_class_name="high_priority";
      break;
    default:
      throw new  RangeError("The 'priority' parameter should be 'Low','Medium' or 'High'");
  }
  //
  var ticket = document.createElement("ticket");
  ticket.innerHTML = "<div class='ticket_body "+priority_class_name+"'></div>";
  document.body.appendChild(ticket);

}
