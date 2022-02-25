function Characters({item}) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="top-card">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="bottom-card">
          <ul>
            <li>
              <h3><strong>Name:  </strong><span>{item.portrayed}</span></h3>    
              <h3><strong>charactor:  </strong><span>{item.name}</span></h3> 
              <h3><strong>Nickname:  </strong><span>{item.nickname}</span></h3> 
              <h3><strong>Status:  </strong><span>{item.status}</span></h3> 
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Characters