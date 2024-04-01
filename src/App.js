import './App.css';
import { useState } from "react";


function App() {
  const [name, setName] = useState('Mehmet'); //state olusturdum. setname ise statin değerini değiştirecek fonk. değer suan mehmet. 
  const [age, setAge] = useState(20);
  const [friends, setFriends] = useState(["Hasret", "Engin"]); //Array tanımladık
  const [address, setAddress] = useState({ title: 'Burgaz', zip: 1234 }) //obje tanımladık
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>change name</button>
      <button onClick={() => setAge(25)}>change age</button>

      <hr />
      <h2>Friends</h2>
      {friends.map((friend, key) => (
        <div key={key}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Ayşe"])}>add new friends</button>
      <hr />
      
      <h2>Addres</h2>
      <div>{address.title}{address.zip}</div>
      <button onClick={() => setAddress({title: "Ankara", zip:987})}>new address</button>

    </div>
    // ...friends yazmamızın sebebi listeye ayşeyi eklerken diğer elemanları da korumak. 
  );
}

export default App;
