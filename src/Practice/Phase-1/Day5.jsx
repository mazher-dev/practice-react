const fruits = ['Apple' , 'Banana', 'Cherry']

function FruitList(){
    return(
        <ul>
            {fruits.map((fruit , index) => {
                <li key={index}>{fruit}</li>
            })}
        </ul>
    )
}

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  
  function UserList() {
    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
  

