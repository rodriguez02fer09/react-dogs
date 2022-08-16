import Header from "./components/Header";
import InfoDogs from "./components/InfoDogs";
import "./App.css";

function App() {
  return (
    <div>
      <Header title="Clientes caninos de veterinaria" />
<InfoDogs
      name='Lala'
      age= "1 año"
      gender= "masculino"
      race= "Labrador"
      size=   "Median"
      url="https://images.ecestaticos.com/H4CUeGslvPRglrmCtaP7A4wz9KQ=/0x115:2265x1390/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg"
/>
<InfoDogs
      name='Lola'
      age= "1 año"
      gender= "masculino"
      race= "Collie"
      size=   "Median"
      url='https://th.bing.com/th/id/R.b49a59cd65b1315bf207896e7022ff96?rik=cFUjftRMnSDSuw&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fcollie%2fcollie-02.jpg&ehk=E81poBuyVASsYQJmD7%2bc%2fptnpDokAfhwWi9BJ%2be3D4c%3d&risl=&pid=ImgRaw&r=0'
/>
<InfoDogs
name='Sansa'
age='4 años'
gender='Femenino' 
race='Pastor Alemán' 
size='Grande'
url='https://th.bing.com/th/id/OIP.-O1So4zyNbvFNAkW5TiUtAHaGU?w=220&h=187&c=7&r=0&o=5&dpr=2&pid=1.7'
/>
</div>
  );
}

export default App;
