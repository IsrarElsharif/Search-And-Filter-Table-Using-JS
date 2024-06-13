
const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr');

search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row,i) => {
        // console.log(row.textContent);
        let table_data = row.textContent.toLocaleLowerCase(),
            search_data = search.value.toLocaleLowerCase();

        // console.log(table_data.indexOf(search_data))
        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        // to change delay style
        row.style.setProperty('--delay', i / 25 + 's');
    })
    document.querySelectorAll('tbody tr:not(.hide)').forEach((variable_row,i) => {
        variable_row.style.backgroundColor = (i % 2 === 0) ? 'transparent' : '#000000b'

    });
}



// function searchTable() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");

//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td");
//         for (var j = 0; j < td.length; j++) {
//             if (td[j]) {
//                 txtValue = td[j].textContent || td[j].innerText;
//                 if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                     tr[i].style.display = "";
//                     break;
//                 } else {
//                     tr[i].style.display = "none";
//                 }
//             }
//         }
//     }
// }




