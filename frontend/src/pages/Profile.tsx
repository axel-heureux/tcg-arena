import { FormEvent, useEffect, useState } from 'react'

type ProfileProps = {
  username: string | null
  avatarUrl: string
  onUpdateProfile: (name: string, avatar: string) => void
  onLogout: () => void
}

function Profile({ username, avatarUrl, onUpdateProfile, onLogout }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState(username ?? '')
  const [newAvatar, setNewAvatar] = useState(avatarUrl)

  useEffect(() => {
    setNewName(username ?? '')
    setNewAvatar(avatarUrl)
  }, [username, avatarUrl])

  if (!username) {
    return (
      <section className="page page-profile">
        <h2>Profil</h2>
        <p>Tu n'es pas connecté. Va sur la page Login pour t'identifier.</p>
      </section>
    )
  }

  const avatarSource = newAvatar || `https://api.dicebear.com/6.x/pixel-art/svg?seed=${encodeURIComponent(username)}`

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!newName.trim()) {
      return
    }
    onUpdateProfile(newName.trim(), newAvatar.trim())
    setIsEditing(false)
  }

  return (
    <section className="page page-profile">
      <h2>Profil utilisateur</h2>
      <div className="profile-card profile-edit-card">
        <div className="avatar-block">
          <img className="profile-avatar" src={avatarSource} alt="Avatar utilisateur" />
          <span>{newAvatar ? 'Avatar personnalisé' : 'Avatar par défaut'}</span>
        </div>
        <div className="profile-details">
          <p>
            <strong>Pseudo :</strong> {username}
          </p>
          <p>
            <strong>Rôle :</strong> Joueur
          </p>
          <p>
            <strong>Progression :</strong> niveau 5
          </p>
        </div>
      </div>

      {isEditing ? (
        <form className="profile-form" onSubmit={handleSubmit}>
          <label>
            Nouveau pseudo
            <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          </label>
          <label>
            URL de l'avatar
            <input value={newAvatar} onChange={(e) => setNewAvatar(e.target.value)} placeholder="Laisse vide pour l'avatar par défaut" />
          </label>
          <div className="profile-form-actions">
            <button type="submit">Enregistrer</button>
            <button type="button" className="secondary-button" onClick={() => setIsEditing(false)}>
              Annuler
            </button>
          </div>
        </form>
      ) : (
        <button className="secondary-button" onClick={() => setIsEditing(true)}>
          Modifier mon profil
        </button>
      )}

      <button className="logout-button" onClick={onLogout}>
        Se déconnecter
      </button>
    </section>
  )
}

export default Profile
