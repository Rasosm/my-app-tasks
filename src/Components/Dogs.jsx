const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
function Dogs() {
    return (
        <div className="dogs">
            {dogs.map((dog, i) => (
                <div key={i} className="shape suo">
                    {dog}
                </div>
            ))}
        </div>
    );
}

export default Dogs;
