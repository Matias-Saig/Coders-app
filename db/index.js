import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mydb.db");

const setupDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS user_session (localId TEXT PRIMARY KEY, email TEXT, idToken TEXT)",
      [],
      (_, result) => console.log("Base Init Ok", result),
      (_, error) => console.error("Base Init Error", error),
    );

  });
};

export const initDatabase = () => {
  setupDatabase();
};

export const getUserSession = () =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM user_session",
        [],
        (_, { rows }) => {
          resolve(rows._array[0]);
          console.log("getUser OK", rows);
        },
        (_, error) => reject(console.error("getUser Error", error))
      );
    });
  });

export const saveUserSession = (localId, email, idToken) =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "REPLACE INTO user_session (localId, email, idToken) VALUES (?, ?, ?)",
        [localId, email, idToken],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error("Error al guardar la sesión del usuario"));
          }
        },
      );
    });
  });

export const deleteUserSession = () =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM user_session", [], (_, { rowsAffected }) => {
        if (rowsAffected > 0) {
          resolve(); console.log("eliminacion exitosa");
        } else {
          reject(new Error("Error al eliminar la sesión del usuario"));
        }
      });
    });
  });
