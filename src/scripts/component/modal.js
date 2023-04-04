export const modal = async () => {
  const modal = document.querySelector('.modaldiv')
  const btnDetail = document.querySelectorAll('#detailButton')
  const close = document.querySelector('.close')
  btnDetail.forEach(e => {
    e.addEventListener('click', () => {
      modal.style.display = 'block'
      const id = e.getAttribute('data-id')
      console.log(id)
    })
  })
  close.addEventListener('click', () => {
    modal.style.display = 'none'
  })
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'
    }
  })
  const detailFetch = await fetch('/DETAIL.json', {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .catch(() => {
      return []
    })
  const mapDetail = detailFetch.restaurants
  mapDetail.forEach(event => {
    document.querySelector('.modal').innerHTML =
      `
      <div class="modaldiv">
        <div class="modal-content">
        <div data-id=${event.id}></div>          
          <div class="modal-header">
            <h3>Restaurant Menu</h3>
            <button class="close">&times;</button>
          </div>
          <div class="modal-body">
            <table>
              <tbody>
                <tr>
                  <td>Alamat</td>
                  <td>${event.address}</td>
                </tr>
                <tr>
                  <td>Menu</td>
                  <td>${event.menu}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      `
  })
}
