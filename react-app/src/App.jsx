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

    return (
        <>
            <Header></Header>
            <Food itemList={fruits}></Food>
            <Footer></Footer>
        </>
    );
}

export default App
