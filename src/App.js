import { Switch, Route } from "react-router-dom";
import EditCardForm from "./components/pages/editCard/editCardForm";
import UserCard from "./components/pages/userCard/userCard";

function App() {
    return (
        <Switch>
            <Route path="/edit" component={EditCardForm} />
            <Route path="/" component={UserCard} />
        </Switch>
    );
}

export default App;
