import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <button type="button">Add to state integer</button>
            <button type="button">View state integer</button>

            <div>
                <form method="get" id="add-form">
                <label for="add-integer">Integer to add:</label>
                <input type="text" id="add-integer" name="add-integer"/>
                </form>

                <button type="submit" form="add-form" value="Submit">Submit</button>

            </div>
        </div>
    );
}

export default App;
