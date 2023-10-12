import React from 'react';
import './App.css';
import useAppData from "./hooks";

function App() {
  const { users, handleDeleteUser, handleCreateUser, handleSaveUser, handleEditUser, editingUser, newUser, setNewUser, handleEditUserChange } = useAppData();

  return (
      <div>
          <h1 className="title">Liste des Utilisateurs</h1>
          <table>
              <thead>
              <tr>
                  <th>Pseudo</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Âge</th>
                  <th>Status</th>
                  <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {users.map((user, index) => (
                  <tr key={index}>
                      {editingUser === user.id ? (
                          <React.Fragment>
                              <td>
                                  <input
                                      type="text"
                                      value={user.username}
                                      onChange={(e) => handleEditUserChange(user.id, 'username', e.target.value)}
                                  />
                              </td>
                              <td>
                                  <input
                                      type="text"
                                      value={user.lastname}
                                      onChange={(e) => handleEditUserChange(user.id, 'lastname', e.target.value)}
                                  />
                              </td>
                              <td>
                                  <input
                                      type="text"
                                      value={user.firstname}
                                      onChange={(e) => handleEditUserChange(user.id, 'firstname', e.target.value)}
                                  />
                              </td>
                              <td>
                                  <input
                                      type="text"
                                      value={user.age}
                                      onChange={(e) => handleEditUserChange(user.id, 'age', e.target.value)}
                                  />
                              </td>
                              <td>
                                  <select
                                      value={user.status}
                                      onChange={(e) => handleEditUserChange(user.id, 'status', e.target.value)}
                                  >
                                      <option value="true">Actif</option>
                                      <option value="false">Inactif</option>
                                  </select>
                              </td>
                              <td>
                                  <button onClick={() => handleSaveUser(user.id)}>Enregistrer</button>
                              </td>
                          </React.Fragment>
                      ) : (
                          <React.Fragment>
                              <td>{user.username}</td>
                              <td>{user.lastname}</td>
                              <td>{user.firstname}</td>
                              <td>{user.age}</td>
                              <td className={user.status === 'true' ? 'active' : 'inactive'}>
                                  {user.status === 'true' ? 'Actif' : 'Inactif'}
                              </td>
                              <td>
                                  <button className="button" onClick={() => handleEditUser(user.id)}>Modifier</button>
                                  <button className="button" onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
                              </td>
                          </React.Fragment>
                      )}
                  </tr>
              ))}
              </tbody>
          </table>
          <h2>Créer un nouvel utilisateur</h2>
          <div className="create-input">
              <label>Pseudo : </label>
              <input className="input"
                  type="text"
                  value={newUser.username}
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
          </div>
          <div className="create-input">
              <label>Nom : </label>
              <input className="input"
                  type="text"
                  value={newUser.lastname}
                  onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
              />
          </div>
          <div className="create-input">
              <label>Prénom : </label>
              <input className="input"
                  type="text"
                  value={newUser.firstname}
                  onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })}
              />
          </div>
          <div className="create-input">
              <label>Âge : </label>
              <input className="input"
                  type="text"
                  value={newUser.age}
                  onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
              />
          </div>
          <div className="create-input">
              <label>Statut : </label>
              <select  className="input"
                  value={newUser.status}
                  onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
              >
                  <option value="true">Actif</option>
                  <option value="false">Inactif</option>
              </select>
          </div>
          <button className="button" onClick={handleCreateUser}>Créer un utilisateur</button>
      </div>
  );
}

export default App;
