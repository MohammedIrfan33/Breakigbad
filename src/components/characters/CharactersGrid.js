import Characters from './Characters';

function CharactersGrid({items,isloading}) {
  return(
    <section className="cards-grid">
      {
        items.map((item)=>{
          return (<Characters key={items.id} item={item} />)
        })
      }
    </section>
    )
}

export default CharactersGrid