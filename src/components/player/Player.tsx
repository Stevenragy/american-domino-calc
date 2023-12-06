import { useDispatch } from "react-redux";
import { decrementPlayerScore, incrementPlayerScore, setPlayerName } from "../../features/playersSlice";

interface PlayerProps {
    id: number;
    name: string;
    score: number;
}

export const Player = (props: PlayerProps) => {
    const { name, score, id } = props;
    const dispatch = useDispatch();

    const playerScoreIncrement = (id: number) => {
        console.log({ id });
        dispatch(incrementPlayerScore(id));
    };

    const playerScoreDecrement = (id: number) => {
        dispatch(decrementPlayerScore(id));
    };

    const handlePlayerNameChange = (id: number, name: string) => {
        dispatch(setPlayerName({ id, name }));
    };

    return (
        <div className="flex flex-col" id={`${id}`}>
            <input
                className="border-4 rounded-full p-4 border-t mr-0 border-b border-l text-gray-800 border-lime-300 border- bg-white"
                value={name}
                placeholder={`Player ${id}`}
                onChange={(e) => handlePlayerNameChange(id, e.target.value)}
            />
            <div className="flex justify-center items-center my-2">
                <button onClick={() => playerScoreDecrement(id)} className="rounded-full mr-4 bg-lime-300 text-zinc-950">
                    -
                </button>
                <span className="text-4xl">{score}</span>
                <button onClick={() => playerScoreIncrement(id)} className="rounded-full ml-4 bg-lime-300 text-zinc-950">
                    +
                </button>
            </div>
        </div>
    );
};
