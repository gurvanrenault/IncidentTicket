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
  var ticket_body;

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
  ticket.innerHTML = "<div class='ticket_body "+priority_class_name+"' id='"+object["id"]+"'></div>";

  document.body.appendChild(ticket);
  ticket_body=document.getElementById(""+object["id"]);
  title_ticket="<div class='title_ticket'>"+object["title"]+"</div>";
  description_ticket="<div class='description_ticket'>"+object["description"]+"</div>";
  ticket_body=document.getElementById(""+object["id"]);
  on_click_check="id='check_ticket"+object["id"]+"'";
  check_ticket="<div class='check_ticket' "+on_click_check+" ></div>";
  ticket_body.innerHTML+=title_ticket+description_ticket+check_ticket;
  ticket_controller=document.getElementById("check_ticket"+object["id"]);
  ticket_controller.addEventListener("click", function(){deleteTicket(object["id"]);}, false);
}
function deleteTicket(id)
{
  element=document.getElementById(id);
  if (element==null)
  {
      throw "The element with the id '"+id+"' is undefined ";
  }
  element.parentNode.removeChild(element);

}
