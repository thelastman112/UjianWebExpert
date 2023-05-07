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
          <tbody class="tbody">
            <tr>
              <td>Alamat</td>
              <td>address</td>
            </tr>
            <tr class="bordered">
              <td>Menu</td>
              <td>
                <span>Makanan</span>
                <ul class="ul1"></ul>
              </td>
              <td>
                <span>Minuman</span>
                <ul class="ul2"></ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `
  document.querySelector('.modal').innerHTML += modalStructure
  const btnDetail = document.querySelectorAll('#detailButton')
  const modal = document.querySelector('.modaldiv')
  const close = document.querySelector('.close')
  let id = []
  btnDetail.forEach(e => {
    e.addEventListener('click', () => {
      id = e.getAttribute('data-id')
      fetchingData(id)
      modal.style.display = 'block'
    })
  })
  async function fetchingData (id) {
    const detailFetch = await fetch(`${CONFIG.API_URL}/detail/${id}`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .catch(() => {
        return []
      })
    const foodsDetail = detailFetch.restaurant.menus.foods
    const drinksDetail = detailFetch.restaurant.menus.drinks
    const fetchul1 = document.querySelector('.ul1')
    const fetchul2 = document.querySelector('.ul2')
    foodsDetail.forEach((food) => {
      fetchul1.innerHTML += `
        <li>${food.name}</li>
      `
    })
    drinksDetail.forEach((drink) => {
      fetchul2.innerHTML += `
        <li>${drink.name}</li>
      `
    })
    close.addEventListener('click', () => {
      modal.style.display = 'none'
      document.querySelectorAll('.temp').forEach(a => a.remove())
    })
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none'
        document.querySelectorAll('.temp').forEach(a => a.remove())
      }
    })
  }
}
