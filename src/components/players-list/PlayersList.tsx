/* eslint-disable @typescript-eslint/no-unused-vars */
import { Player } from "../player/Player";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const PlayersList = () => {
    const numberOfPlayers = useSelector((state: RootState) => state.players.numberOfPlayers);
    const playersInfo = useSelector((state: RootState) => state.players.playersInfo);

    return (
        <div className="flex flex-col justify-between mt-16 mx-6">
            {playersInfo.map(
                (player, index) => index + 1 <= numberOfPlayers && <Player key={player.id} id={player.id} name={player.name} score={player.score} />
            )}
        </div>
    );
};
