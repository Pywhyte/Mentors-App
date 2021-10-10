import MyInput from "./Input/MyInput";



const UserFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placehodler="Поиск..."
            />
        </div>
    );
};

export default UserFilter;