import Header from './header.jsx'
import Footer from './footer.jsx'
import Food from './food.jsx'

function App() {
    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Banana", calories: 105 },
        { id: 3, name: "Orange", calories: 62 },
        { id: 4, name: "Strawberry", calories: 4 },
        { id: 5, name: "Grapes", calories: 3 },
        { id: 6, name: "Mango", calories: 99 },
        { id: 7, name: "Blueberry", calories: 1 },
        { id: 8, name: "Pineapple", calories: 452 },
        { id: 9, name: "Watermelon", calories: 85 },
        { id: 10, name: "Peach", calories: 59 }
    ];
    const cars = [
        { id: 1, name: "Toyota Corolla" },
        { id: 2, name: "Honda Civic" },
        { id: 3, name: "Ford Mustang" },
        { id: 4, name: "Chevrolet Camaro" },
        { id: 5, name: "Tesla Model 3" },
        { id: 6, name: "BMW 3 Series" },
        { id: 7, name: "Audi A4" },
        { id: 8, name: "Mercedes-Benz C-Class" },
        { id: 9, name: "Volkswagen Golf" },
        { id: 10, name: "Subaru Impreza" }
    ];


    return (
        <>
            <Header></Header>
            <Food itemList={fruits} category='fruits'></Food>
            <Food itemList={cars} category='cars'></Food>
            <Footer></Footer>
        </>
    );
}

export default App
