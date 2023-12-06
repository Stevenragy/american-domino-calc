import { useSelector } from "react-redux";
import Dropdown from "../../shared/dropdown/Dropdown";
import { RootState } from "../../app/store";

export const Header = () => {
    const options = [2, 3, 4];
    const numberOfPlayers = useSelector((state: RootState) => state.players.numberOfPlayers);

    return (
        <header className="flex flex-col justify-center md:flex-row md:items-center md:justify-around mt-6 mx-6">
            <h1 className="text-center text-5xl md:text-lg mb-5">American Domino</h1>
            <Dropdown options={options} dropDownValue={`${numberOfPlayers} Players`} />
        </header>
    );
};
