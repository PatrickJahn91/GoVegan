class GruppenTag extends React.Component {

    artikelEntfernen = (artikelName) => {
        this.props.gruppe.artikelEntfernen(artikelName)
        this.props.aktiveGruppeHandler(this.props.gruppe.id)
    }

  render = () => {
      let itemsRelevant = this.props.gruppe.artikelListe.filter(item => item.gekauft === this.props.erledigt)

    return (
      <div>
        <dt className={this.props.aktiv && !this.props.erledigt ? "aktiv" : "inaktiv"} onClick={() =>
            !this.props.erledigt ? this.props.aktiveGruppeHandler(this.props.gruppe.id) : ''}>{this.props.gruppe.name
        }
        </dt>
          {itemsRelevant.map(artikel => (
              <ArtikelTag key={artikel.id} artikel={artikel} checkHandler={this.props.checkHandler} deleteHandler={this.artikelEntfernen}/>
          ))}
      </div>
    )
  }
}
