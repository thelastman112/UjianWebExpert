export const modal = async () => {
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
        <button class="close">&times;</button>
          <div class="class-body">    
            <h3>${event.address}</h3>
            <p>${event.menu}</p>
          </div>
        </div>
      </div>
      `
  })
  const modal = document.querySelector('.modaldiv')
  const btnDetail = document.querySelectorAll('#detailButton')
  const close = document.querySelector('.close')
  btnDetail.forEach(e => {
    e.addEventListener('click', () => {
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
}
