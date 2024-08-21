import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function ColorPicker({ closeMenu, setTaskColor }) {

    function handleColorPick(color) {
        setTaskColor(color); 
    }

    return (
        <div className="relative bg-gray-600 border border-white rounded-lg text-white p-4">
            <h1 className="text-center text-3xl m-3">Pick your priority</h1>
            <FontAwesomeIcon
                icon={faX}
                className='absolute top-4 right-4 hover:text-gray-200 transition-all cursor-pointer'
                onClick={closeMenu}
            />
            <div className="grid grid-cols-2 gap-4">
                <div onClick={() => handleColorPick("blue")} className="bg-blue-400 w-52 h-52 p-4 rounded-lg transform transition-transform duration-300 hover:scale-110">
                    <h1 className="text-2xl">1. Do First</h1>
                    <ul className="text-lg">
                        <li>Crises</li>
                        <li>Deadlines</li>
                        <li>Problems</li>
                    </ul>
                </div>

                <div onClick={() => handleColorPick("green")} className="bg-green-400 w-52 h-52 p-4 rounded-lg transform transition-transform duration-300 hover:scale-110">
                    <h1 className="text-2xl">2. Schedule</h1>
                    <ul className="text-lg">
                        <li>Relationships</li>
                        <li>Planning</li>
                        <li>Recreation</li>
                    </ul>
                </div>
                <div onClick={() => handleColorPick("orange")} className="bg-orange-400 w-52 h-52 p-4 rounded-lg transform transition-transform duration-300 hover:scale-110">
                    <h1 className="text-2xl">3. Delegate</h1>
                    <ul className="text-lg">
                        <li>Interruptions</li>
                        <li>Meetings</li>
                        <li>Activities</li>
                    </ul>
                </div>

                <div onClick={() => handleColorPick("red")} className="bg-red-400 w-52 h-52 p-4 rounded-lg transform transition-transform duration-300 hover:scale-110">
                    <h1 className="text-2xl">4. Don't Do</h1>
                    <ul className="text-lg">
                        <li>Time Wasters</li>
                        <li>Pleasant Things</li>
                        <li>Trivia</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;
