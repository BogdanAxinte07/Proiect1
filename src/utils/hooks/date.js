export function getFormattedDate(dateString) {
   
  
    const currentDate = new Date(dateString);
     
    let day = currentDate.getDate().toString().padStart(2, "0");
    let month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); 
    let year = currentDate.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  