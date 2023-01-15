import { Switch, Route } from "react-router-dom";
import EditCardForm from "./components/pages/editCard/editCardForm";
import UserPage from "./components/pages/userCard/userPage";

function App() {
    return (
        <Switch>
            <Route path="/edit" component={EditCardForm} />
            <Route path="/" component={UserPage} />
        </Switch>
    );
}

export default App;
