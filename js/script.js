const itemsPerPage = 9;
let activePage = 1;

/** 
* This function creates and inserts/appends the elements needed to display a "page" of nine students
* @param   {Array} list      List of student objects
* @param   {Number} page     Page number of currently selected page
*/
function showPage(list, page) {
   let startIdx = (page * itemsPerPage) - itemsPerPage;
   let endIdx = page * itemsPerPage;
   let ul = document.getElementsByClassName('student-list')[0];
   ul.innerHTML = '';

   // loop through the list and only display the students associated with the selected page
   for (let i=0; i<list.length; i++) {
      if (i >= startIdx && i < endIdx) {
         let student = list[i];
         let li = document.createElement('li');
         li.className = "student-item cf";
         li.innerHTML = `<div class="student-details">
                           <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
                           <h3>${student.name.first + ' ' + student.name.last}</h3>
                           <span class="email">${student.email}</span>
                        </div>
                        <div class="joined-details">
                           <span class="date">Joined ${student.registered.date}</span>
                        </div>`
         ul.appendChild(li);
      }
   }
}



/**
* This function creates and insert/append the elements needed for the pagination buttons
* @param   {Array} list      List of student objects
*/
function addPagination(list) {
   let buttonCount = Math.ceil(list.length / itemsPerPage);
   let ul = document.getElementsByClassName('link-list')[0];
   ul.innerHTML = '';

   // create buttons
   for (let i=1; i<=buttonCount; i++) {
      let li = document.createElement('li');
      li.innerHTML = `<button type="button">${i}</button>`;
      ul.appendChild(li);
   }

   // add event listener for button clicks
   ul.firstChild.className = 'active';
   ul.addEventListener('click', (e) => {
      if (e.target.type === 'button') {
         ul.children.item(activePage - 1).className = '';
         activePage = parseInt(e.target.innerHTML);
         ul.children.item(activePage - 1).className = 'active';
         showPage(list, activePage);
      }
   });
}


showPage(data, 1);
addPagination(data);