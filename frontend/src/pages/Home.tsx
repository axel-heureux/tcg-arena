function Home() {
  return (
    <section className="page page-home">
      <h2>Bienvenue sur TCG Arena</h2>
      <p>
        Explore les fonctionnalités de base de ton application : connexion, affichage des cartes,
        et gestion du profil utilisateur.
      </p>
      <div className="page-box">
        <div>
          <strong>Login :</strong> connecte-toi pour accéder à ton profil.
        </div>
        <div>
          <strong>Cartes :</strong> découvre les cartes du jeu et leurs caractéristiques.
        </div>
      </div>
    </section>
  )
}

export default Home
