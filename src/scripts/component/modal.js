import CONFIG from '../config'
export const modal = async () => {
  const modalStructure =
  `
  <div class="modaldiv">
    <div class="modal-content">
      <div data-id="id"></div>          
        <div class="modal-header">
          <h3>Restaurant Menu</h3>
          <button class="close">&times;</button>
        </div>
      <div class="modal-body">
        <table>
          <tbody>
            <tr>
              <td>Alamat</td>
              <td>address</td>
            </tr>
            <tr>
              <td>Menu</td>
              <td>menu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `
  document.querySelector('.modal').innerHTML = modalStructure
  const btnDetail = document.querySelectorAll('#detailButton')
  const modal = document.querySelector('.modaldiv')
  const close = document.querySelector('.close')
  let id = []
  btnDetail.forEach(e => {
    e.addEventListener('click', () => {
      id = e.getAttribute('data-id')
      modal.style.display = 'block'
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
  const detailFetch = await fetch(`${CONFIG.API_URL}/detail/:${id}`, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .catch(() => {
      return []
    })
}
