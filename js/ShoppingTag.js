/**
 * Hauptkomponente der App
 * hier werden die Listen Listen gerendert
 */

class ShoppingTag extends React.Component {

  constructor() {
    super();
    let gruppe1 = App.gruppeHinzufuegen("Obst & Gemüse")
    gruppe1.artikelHinzufuegen("Brokkoli")
    let gruppe2 = App.gruppeHinzufuegen("Getreideprodukte")
    gruppe2.artikelHinzufuegen("Reis")
    let gruppe3 = App.gruppeHinzufuegen("Milchersatz")
    gruppe3.artikelHinzufuegen("Hafermilch")
    let gruppe4 = App.gruppeHinzufuegen("Fleischersatz")
    gruppe4.artikelHinzufuegen("Burgerpatties")
    let gruppe5 = App.gruppeHinzufuegen("Getränke")
    gruppe5.artikelHinzufuegen("Cola")
    let gekaufterArtikel = gruppe3.artikelHinzufuegen("Veta")
    gekaufterArtikel.gekauft = true

    this.state = {
      aktiveGruppe: null,
    }
  }

  setAktiveGruppe = (gruppenId) => {
    App.aktiveGruppe = gruppenId
    this.setState({aktiveGruppe: App.aktiveGruppe})
    console.debug(this.state.aktiveGruppe)
  }

  artikelChecken = (artikel) => {
    artikel.gekauft = !artikel.gekauft
    this.setState({state: this.state})
  }

  artikelHinzufuegen = () => {
    let eingabe = document.getElementById("artikelEingabe")
    if (eingabe.value.trim().length > 0) {
      let gruppe = App.gruppeFinden(App.aktiveGruppe)
      gruppe.artikelHinzufuegen(eingabe.value)
      this.setState(this.state)
    }
    eingabe.value = ""
    eingabe.focus()
  }

  render = () => {
    return (
      <div>
        <header>
          <h1>GoVegan</h1>
          <nav>
            <input type="text" id="artikelEingabe" placeholder="Artikel hinzufügen"/>
            <button className="material-icons" onClick={() => this.artikelHinzufuegen()}>add_circle</button>
          </nav>
        </header>
        <hr/>

        <main>
          <section>
            <h2>Einkaufen
            </h2>
            <dl>

              {App.gruppenListe.map(gruppe => (
                  <GruppenTag key={gruppe.id} gruppe={gruppe} erledigt={false} aktiveGruppeHandler={this.setAktiveGruppe} aktiv={gruppe.id === App.aktiveGruppe} checkHandler={this.artikelChecken}/>
              ))}

            </dl>
          </section>
          <hr/>
          <section>
            <h2>Erledigt
            </h2>
            {App.gruppenListe.map(gruppe => (
                <GruppenTag key={gruppe.id} gruppe={gruppe} erledigt={true}
                            aktiveGruppeHandler={this.setAktiveGruppe}
                            aktiv={gruppe.id === App.aktiveGruppe}
                            checkHandler={this.artikelChecken}/>
            ))}
          </section>
        </main>
        <hr/>

        <footer>
          <nav>
            <a href="https://www.greenforce.com" target="_blank"><button>
              <span className="material-icons">spa</span> Veganes
            </button></a>
            <a href="https://shop.rewe.de" target="_blank"><button>
              <span className="material-icons">store</span> Bestellen
            </button></a>
            <a href="https://www.rewe.de/rezeptsammlung/vegan/" target="_blank"><button>
              <span className="material-icons">description</span> Rezepte
            </button></a>
          </nav>
        </footer>
      </div>
    )
  }
}
