export function getData(dbname, store) {

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbname);

    request.onsuccess = function () {
      const db = request.result;

      if (!db.objectStoreNames.contains(store)) {
        console.warn(`Store "${store}" does not exist in the database.`);
        resolve([]); // Return an empty array if the store doesn't exist
        db.close();
        return;
      }

      // Open a read-only transaction
      const txn = db.transaction(store, "readonly");
      const objStore = txn.objectStore(store);

      // Read all data from the store
      const readReq = objStore.getAll();

      readReq.onsuccess = function () {
        resolve(readReq.result || []); // Return the result or an empty array
      };

      readReq.onerror = function () {
        console.error(`Error reading data from store "${store}".`, readReq.error);
        resolve([]); // Return an empty array on error
      };

      // Close the database after transaction completes
      txn.oncomplete = function () {
        db.close();
      };
    };

    request.onerror = function () {
      console.error(`Error opening database "${dbname}".`, request.error);
      resolve([]); // Return an empty array on database open error
    };
  });
}


// export function addData(dbname, store, data, keyPath) {
//   return new Promise((resolve, reject) => {
//     let request = indexedDB.open(dbname);
//     request.onsuccess = async function () {
//       let db = request.result;
//       if (db.objectStoreNames.contains(store)) {
//         let txn = db.transaction(store, "readwrite");
//         let objStore = txn.objectStore(store);
//         for (let d of data) {
//           await addDataHelper(objStore, d);
//         }
//         db.close()
//         resolve(true);
//       } else {
//         db.close();
//         if (await upgrade(dbname, db.version + 1, [store], keyPath)) {
//           resolve(await addData(dbname, store, data, keyPath)); // there is nothing to return in a promise but resolve... hmmm. that's true...
//         }
//       }
//     };

//     request.onerror = function () {
//       reject(false);
//     };
//   });
// }

export function getSingleData(dbname, store, id) {
  return new Promise((resolve, reject) => {
    let request = indexedDB.open(dbname);
    request.onsuccess = function () {
      // let's take care of this part first
      let db = request.result;
      // trying to read
      // ok
      // I just want to favor boots interface for now...
      if (db.objectStoreNames.contains(store)) {
        let txn = db.transaction(store, "readonly"); // readonly in this case...
        // txn opened...
        let objStore = txn.objectStore(store);

        let readReq = objStore.get(id); // just get everything abeg
        // anything can happen to the reading shey you get...
        readReq.onsuccess = function () {
          resolve(readReq.result); // nice and good...
        };
        readReq.onerror = function () {
          resolve(null); // just return an empty list...
        };
      } else {
        resolve(null);
      }
    };
    request.onerror = function () {
      resolve(null);
    };
  });
}

// function addDataHelper(store, data) {
//   return new Promise((resolve, reject) => {
//     let putReq = store.put(data);
//     putReq.onsuccess = function () {
//       resolve(true);
//     };
//     putReq.onerror = function () {
//       reject(false);
//     };
//   });
// }

// function upgrade(dbname, version, stores, keyPath) {
//   return new Promise((resolve, reject) => {
//     let request = indexedDB.open(dbname, version);
//     request.onupgradeneeded = function () {
//       let db = request.result;
//       stores.forEach((store) => {
//         db.createObjectStore(store, keyPath);
//       });
//       resolve(true);
//     };

//     request.onerror = function () {
//       alert(
//         "Please allow database creation, so as to use Boots in offline mode. Thank you"
//       );
//       reject(false);
//     };
//   });
// }

export function addData(dbname, store, data, keyPath) {
  return new Promise((resolve, reject) => {
    let request = indexedDB.open(dbname);

    request.onupgradeneeded = function () {
      const db = request.result;
      if (!db.objectStoreNames.contains(store)) {
        db.createObjectStore(store, keyPath);
      }
    };

    request.onsuccess = function () {
      const db = request.result;

      if (!db.objectStoreNames.contains(store)) {
        db.close();
        upgrade(dbname, db.version + 1, [store], keyPath)
          .then(() => addData(dbname, store, data, keyPath).then(resolve).catch(reject))
          .catch(reject);
        return;
      }

      const txn = db.transaction(store, "readwrite");
      const objStore = txn.objectStore(store);

      try {
        data.forEach((item) => {
          objStore.put(item);
        });

        txn.oncomplete = function () {
          db.close();
          resolve(true);
        };

        txn.onerror = function () {
          db.close();
          reject(txn.error);
        };
      } catch (error) {
        db.close();
        reject(error);
      }
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

function upgrade(dbname, version, stores, keyPath) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbname, version);

    request.onupgradeneeded = function () {
      const db = request.result;
      stores.forEach((store) => {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, keyPath);
        }
      });
    };

    request.onsuccess = function () {
      request.result.close();
      resolve(true);
    };

    request.onerror = function () {
      alert(
        "Please allow database creation, so as to use Boots in offline mode. Thank you"
      );
      reject(request.error);
    };
  });
}

// it will work now... shey you get.
// it will work easy peasy... no capping.
export function getLastDataFromStore(dbName, storeName) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
        
        request.onsuccess = function () {
            const db = request.result;
            const transaction = db.transaction(storeName, "readonly");
            const store = transaction.objectStore(storeName);
            
            // Open cursor in descending order
            const cursorRequest = store.openCursor(null, "prev");

            cursorRequest.onsuccess = function (event) {
                const cursor = event.target.result;
                if (cursor) {
                    // Cursor at the last item (highest key)
                    resolve(cursor.value);
                } else {
                    // No data in the store
                    resolve(null);
                }
            };

            cursorRequest.onerror = function () {
                reject("Failed to fetch the last item");
            };
        };

        request.onerror = function () {
            reject("Failed to open database");
        };
    });
}

export function deleteItemFromIndexedDB(dbName, storeName, key) {
  return new Promise((resolve, reject) => {
    // Open the database
    const request = indexedDB.open(dbName);

    request.onerror = (event) => {
      console.error('Database error:', event.target.error);
      reject('Failed to open database');
    };

    request.onsuccess = (event) => {
      const db = event.target.result;

      // Start a transaction
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);


      // Perform the delete operation
      const deleteRequest = store.delete(key);

      deleteRequest.onsuccess = () => {
        console.log(`Item with key ${key} deleted successfully.`);
        resolve(`Item with key ${key} deleted successfully.`);
      };

      deleteRequest.onerror = (event) => {
        console.error('Delete error:', event.target.error);
        reject('Failed to delete item');
      };

      // Handle transaction complete
      transaction.oncomplete = () => {
        console.log('Transaction completed');
        db.close(); // Close the database
      };

      transaction.onerror = (event) => {
        console.error('Transaction error:', event.target.error);
        reject('Transaction failed');
      };
    };
  });
}

export function deleteDatabase(dbName) {
  return new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(dbName);

      request.onsuccess = function() {
          console.log(`Database '${dbName}' deleted successfully.`);
          resolve(true);
      };

      request.onerror = function(event) {
          console.error(`Error deleting database '${dbName}':`, event.target.error);
          reject(false);
      };

      request.onblocked = function() {
          console.warn(`Database deletion for '${dbName}' is blocked. Ensure all connections are closed.`);
      };
  });
}


// nice and easy...
// user might be experiencing some delay... exam can't be up to 5 mb.
// I will still use localstorage...
// then I will set a limit to most things....
