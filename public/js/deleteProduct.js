const deleteButton = document.getElementById('delete-button')
const deleteInputProducts = document.getElementById('delete-idProducts')


const deleteButtonHandleClick = (e) => {

    e.preventDefault()

    const { value } = deleteInputProducts

    if (value.length === 0)
        return alert('Debe ingresar un valor')

    const url = './products/' + value

    fetch(url, { method: "DELETE" })
        .then(res => res.json())
        .then(res => errorCheck(res))
        .catch(err => alert(err))
}



deleteButton.addEventListener('click', deleteButtonHandleClick)