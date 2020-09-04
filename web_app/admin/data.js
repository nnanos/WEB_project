
document.getElementById("delete-icon").onclick = deleteData ;

function deleteData(){
	let r = confirm("Delete Data?");
	if (r == true) {
		fetch("http://localhost:80/project_ours_test/backend/delete.php", {
			method: "POST",
			headers: { "Content-Type": "application/json" }
		}).then(res => res.text())
		.then(res => console.log(res))
		.then(res => alert("data deleted"))
		.catch(res => console.log(res));
	}
}
