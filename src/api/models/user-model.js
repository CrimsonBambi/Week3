// mock data
const userItems = [
    {
        user_id: 3609,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
     },
     {
        user_id: 3608,
        name: 'Vin Diesel',
        username: 'diesel',
        email: 'vin@metropolia.fi',
        role: 'user',
        password: 'password',
     }
  ];
  
  const listAllUsers = () => {
    return userItems;
  };
  
  const findUserById = (id) => {
    return userItems.find((item) => item.user_id == id);
  };
  
  const addUser = (user) => {
    const {name, username, email, role, password} = user;
    const newId = userItems[0].user_id + 1;
    userItems.unshift({user_id: newId, name, username, email, role, password});
    return {user_id: newId};
  };

  const putUserById = (id, updatedUser) => {
      const index = userItems.findIndex((item) => item.user_id == id);
      if (index !== -1) {
        userItems[index] = { ...userItems[index], ...updatedUser };
        return userItems[index];
      }
    };

  const deleteUserById = (id) => {
      const index = userItems.findIndex((item) => item.user_id == id);
      if (index !== -1) {
        const deleteUser = userItems.splice(index, 1);
        return deleteUser[index];
      }
    };
  
  export {listAllUsers, findUserById, addUser, putUserById, deleteUserById};